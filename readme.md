# :computer: Web_Study
> HTML과 flask를 중점적으로 웹에 대해 공부하고 정리합니다. 재미있어 보이는 프로젝트라면 그냥 이유 없이 해보고 올릴 수도 있습니다.
## :book: 주로 참고한 자료
1. <a href="https://opentutorials.org/course/1"><strong>생활 코딩</strong></a>
2. <a href="https://m.yes24.com/Goods/Detail/96674934"><strong>Do it! HTML+CSS+자바스크립트 웹 표준의 정석</strong></a>
3. <a href="https://product.kyobobook.co.kr/detail/S000001792476"><strong>스프링 부트 프로그래밍 입문</strong></a>
4. <a href="https://www.youtube.com/@AsmrProg"><strong>AsmrProg</strong></a>
<br>

<center>
  <img src="https://github.com/henryseo1000/Web_Study/assets/81693499/e34f9507-8381-411e-860e-d4c60dd7ba8a" style="height: 400px;">
  <img src="https://github.com/henryseo1000/Web_Study/assets/81693499/2808e8e3-85cd-417c-ae5f-eabca6f06446" style="height: 400px;">
</center>

## :smile: 컨벤션 규칙
> 2024 / 08 / 15 이후로 아래 컨벤션 규칙들을 적용합니다.
1. `폴더 이름과 md 파일`들은 모두 `소문자`로 작성하고, 사이에 "_" 기호를 넣습니다.
2. `모든 HTML 파일`들은 최대한 `server.py` 파일에서 접근 가능하고, `Web_Study의 index.html 파일`에서 이동하여 실행할 수 있도록 해볼 예정입니다.
3. 특정 프로젝트를 실행에 옮길 경우에는 브랜치를 새로 만들고, `PR Request`를 연습하기로 했습니다.
4. `PR`을 올릴 경우, `Label과` `Assignee` 등을 붙입니다. 최대한 자세하게 어떤 기능을 구현했는지 작성합니다.
5. 새로운 프로젝트가 생성되면, 반드시 해당 프로젝트 속의 `md 파일과 스터디 리스트를 업데이트`합니다.

## 📺프로젝트 루트의 폴더 실행
> 로직 : 프로젝트 루트 폴더의 server.py를 실행시킨 후 경로를 주면, 해당 경로의 이름에 해당하는 templates 폴더에 가서 index.html을 실행시킵니다.

현재, 몇몇 프로젝트들은 정상적으로 서버에서 실행할 수 없게 되어 있습니다 - 확장 프로그램, 예전에 했던 flask 테스트를 위해 폴더에 app.py가 들어있는 경우

그 외에는 아래의 과정으로 활용할 수 있습니다.

1. `server.py` 실행
2. sh 파일들 권한 주기
```shell
sudo chmod +x clean.sh make.sh scss.sh
```
3. 프로젝트 루트 폴더에서 새 프로젝트 생성 - `HTML`은 `templates`에, `CSS`와 `JS`는 `static`에 들어있음
```shell
./make.sh [프로젝트 이름]
```
4. 프로젝트에서 `scss.sh`를 활용하고 싶은 경우 - `static`의 프로젝트 폴더에 `style.scss` 생성 후 아래 명령어 실행
```shell
./scss.sh [프로젝트 이름]
```

## 🔖 스터디 리스트
- <a href="https://github.com/henryseo1000/Web_Study/tree/main/templates/get_started">GetStarted - 책으로 HTML 복습하기(HTML의 기초)</a>
- <a href="https://github.com/henryseo1000/Web_Study/tree/main/templates/simple_login">Simple Login - 반응형 로그인 화면 클론코딩</a>
- <a href="https://github.com/henryseo1000/Web_Study/tree/main/templates/web_compiler">WebCompiler - 웹을 이용한 컴파일 페이지</a>
- <a href="https://github.com/henryseo1000/Web_Study/tree/main/templates/card_test">CardTest - 자바스크립트와 간단한 CSS로 만든 카드 테스트</a>
- <a href="https://github.com/henryseo1000/Web_Study/tree/main/templates/chrome_prank">ChromePrank - 자바스크립트로 만든, 장난치기 위해 만든 크롬 확장 프로그램</a>
- <a href="https://github.com/henryseo1000/Web_Study/tree/main/templates/chrome_todo">ChromeToDo - JS, HTML, CSS로 만든 메모용 크롬 확장 프로그램</a>
- <a href="https://github.com/henryseo1000/Web_Study/tree/main/templates/flex_test">FlexTest - JS, HTML, SCSS로 만든 SCSS 테스트 페이지</a>
- <a href="https://github.com/henryseo1000/Web_Study/tree/main/templates/input_custom_slider">InputCustomSlider - JS, HTML, SCSS로 만든 간단한 슬라이더</a>
