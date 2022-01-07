import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from '../../components/Nav';

import MenuList from './components/MenuList/MenuList';

import './ProductList.scss';

function ProductList() {
  const location = useLocation();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [categoriesInfo, setCategoriesInfo] = useState([]);
  const qs = new URLSearchParams(location.search);

  const clickedCategoryId = qs.get('category_id');

  useEffect(() => {
    fetch(`http://13.209.117.55/products${location.search}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProductList(data.result.data)); // 원래 코드 setProductList(data)) >> 리스트 데이터는 배열로 받았는데 내가 찾는 값은 객체 안에 있어서 경로 지정 해줘야함
  }, [location.search]);

  useEffect(() => {
    fetch(`http://13.209.117.55/products/categories`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setCategoriesInfo(res.result));
  }, []);

  const handleSubCategory = subCategoryId => {
    const qs = new URLSearchParams(location.search);

    qs.set('subcategory_id', subCategoryId);
    navigate('?' + qs.toString());
  };

  const deleteSubCategory = () => {
    const qs = new URLSearchParams(location.search);

    qs.delete('subcategory_id');
    navigate('?' + qs.toString());
  };

  const handleSort = condition => {
    const qs = new URLSearchParams(location.search);

    qs.set('sort', condition);
    navigate('?' + qs.toString());
  };

  const currentCategory = categoriesInfo.find(
    category => category.id === Number(clickedCategoryId)
  );

  const currentCategoryTitle = currentCategory?.name;
  const currentSubCategories = currentCategory?.subcategories;

  return (
    <>
      <Nav />
      <div className="productTitle">
        <h2>{currentCategoryTitle}</h2>
        <ul>
          <li onClick={deleteSubCategory}>전체보기</li>
          {currentSubCategories?.map(subCategory => (
            <li
              key={subCategory.id}
              onClick={() => handleSubCategory(subCategory.id)}
            >
              {subCategory.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="soltMenu">
        <ul>
          <li onClick={() => handleSort('신상품순')}>신상품순</li>
          <li onClick={() => handleSort('판매량순')}>판매량순</li>
          <li onClick={() => handleSort('낮은가격순')}>낮은가격순</li>
          <li onClick={() => handleSort('높은가격순')}>높은가격순</li>
        </ul>
      </div>
      {productList.length > 0 ? (
        <MenuList productList={productList} />
      ) : (
        '상품이 없습니다'
      )}
    </>
  );
}

export default ProductList;
