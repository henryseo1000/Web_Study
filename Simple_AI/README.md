# 간단한 추천 서비스
### 1) 개요
> 출처 : https://www.youtube.com/watch?v=kQwxIkspINk&t=210s
- 코딩 애플님 영상을 보고 간단한 추천 서비스를 만들어 봅니다.
### 2) 문자 생성 AI
- 임베딩을 이용해 생성
- 임베딩을 잘 생성해야 정확한 문자 생성 가능
- 임베딩 값이 비슷하면 실제 의미도 비슷함
- 임베딩 값의 유사도는 거리를 통해 판단함, 또는 원점과 서로 연결한 뒤 각도의 코사인 값을 계산
### 3) DB 저장, OpenAI 사용
> OPEN AI EMBEDDINGS : https://platform.openai.com/docs/api-reference/embeddings
- 상품 추가 시 상품명 + 상품명 임베딩을 DB에 저장
- 유저 검색 시 검색어 임베딩과 삼품명 임베딩 비교

