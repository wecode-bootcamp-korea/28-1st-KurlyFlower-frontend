## 팀명

Kulryflower

## 팀원

Frontend : 유호진, 한상일, 이가윤
Backend : 이찬주, 장민욱


## 작업내용
- 마켓컬리 클론코딩
- 포지션: 프론트엔드
- 사용한 기술: React


<br>

## 담당한 페이지  
*관련 팀 노션 페이지, 영상 링크: https://acute-cicada-d5b.notion.site/Kurly-Flower-77334502e27f44e7bce155533e617bf5 
<br>
(최하단 전체 영상 참고)

*블로그 : https://velog.io/@gygy
### 메인페이지
1. 배너 캐러셀 - 무한 슬라이드
2. 상품 캐러셀
<img width="500" alt="스크린샷 2022-01-10 오전 12 14 37" src="https://user-images.githubusercontent.com/67543454/148688399-f12a7422-9726-4dd4-9362-4492ed0185ae.png">

<br>

3. MD의 추천영역 - 카테고리 버튼 클릭시 해당하는 카테고리 데이터만 요청해 표시
<img width="500" alt="스크린샷 2022-01-10 오전 12 14 52" src="https://user-images.githubusercontent.com/67543454/148688411-348c5e81-9638-45b6-942a-6864eeb0e377.png">

<br>

4. 무한 스크롤

5. 장바구니 버튼 클릭 시 선택한 상품 장바구니에 담기
<br>

6. 담긴 상품 갯수 내비게이션 바의 장바구니 아이콘에 표시
<img width="500" alt="스크린샷 2022-01-10 오전 12 15 18" src="https://user-images.githubusercontent.com/67543454/148688432-d7ab0d27-7fa9-4b06-a0ee-3a843e95716c.png">

<br>

7. 장바구니 아이콘 클릭시 장바구니 페이지로 이동
<img width="500" alt="스크린샷 2022-01-10 오전 12 15 49" src="https://user-images.githubusercontent.com/67543454/148688456-8dc54a29-0e6f-498f-9802-2636fbe2b794.png">

<br>
<br>



### 장바구니 페이지
 1. 로그인 토큰을 받아와 로그인 유저인지 판별

<img width="500" alt="스크린샷 2022-01-10 오전 12 21 27" src="https://user-images.githubusercontent.com/67543454/148688665-2b895d57-8b24-4289-a36e-0115c873ccd9.png">

<br>

2. PUT, DELETE, PATCH, POST 메서드를 사용하여 장바구니 데이터 가져오기, 수량 변경, 개별삭제, 선택삭제 기능 구현
3. 패키징 타입 (냉장,냉동,상온) 별로 구분해 냉장상품, 냉동상품, 상온 상품별로 묶어 카테고리 표시
<img width="500" alt="스크린샷 2022-01-10 오전 12 17 03" src="https://user-images.githubusercontent.com/67543454/148688499-58f838fa-be7d-4f52-bac4-90b60769ed4b.png">

<br>

4. 카테고리 접기 및 펼치기 기능
5. 장바구니에 담긴 상품이 없을 시 주문버튼 비활성화 및 상품/배송할 상품 없음 표시
<img width="500" alt="스크린샷 2022-01-10 오전 12 16 21" src="https://user-images.githubusercontent.com/67543454/148688478-f89d4744-6237-4cc8-a0c6-5d5257be5868.png">

<br>

6. 선택한 상품 없이 주문버튼 클릭 시 '주문할 상품을 선택해주세요'메시지 표시
<img width="500" alt="스크린샷 2022-01-10 오전 12 17 33" src="https://user-images.githubusercontent.com/67543454/148688510-2f430c91-8991-428d-84f9-437bf0bc135a.png">

<br>

7. 상품 선택 후 주문버튼 클릭 시 선택한 상품 정보와 함께 '주문이 완료되었습니다' 표시
8. 계속 쇼핑하기 혹은 닫기 버튼 표시
9. 계속 쇼핑하기 버튼 클릭 시 메인페이지로 이동
<img width="500" alt="스크린샷 2022-01-10 오전 12 18 03" src="https://user-images.githubusercontent.com/67543454/148688530-534a5e41-89fc-42f2-b458-074390f2ccac.png">

