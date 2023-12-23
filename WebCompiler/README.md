# CodeMirror를 이용한 웹 컴파일러 만들기
> CodeMirror와 bootstrap을 이용해 웹에서 코드를 실행할 수 있도록 만듭니다.
## 참고
- <a href="https://github.com/codemirror/dev/">CodeMirror</a>
- <a href="https://getbootstrap.com/">BootStrap</a>
- <a href="https://www.youtube.com/watch?v=AkIortwElAg&list=PL9lRHqeCagtv-EsnrBVDRDh0QDc2LReac&index=2">How to make a web CodeEditor like vscode using Codemirror</a>

## 명령어 사용
1. npm 패키지 생성
~~~shell
% npm init
~~~
2. express, body-paser, compilex, nodemon 패키지를 설치
~~~shell
% npm install -g express body-parser compilex nodemon
~~~
3. 실행 시
~~~shell
% nodemon Api.js
~~~

**주의사항 : 혹시 이 코드를 실행해보고 싶으신 분이 계시다면 반드시 Api.js의 sendFile 코드를 아래와 같이 바꿔주세요.**  
~~~javascript
app.use("/codemirror-5.65.16", express.static("[현재 프로젝트에 설치된 codemirror-5.65.16 디렉토리의 절대 경로]"))
app.get("/", function(req, res){
    res.sendFile("[index.html 절대 경로]")
})
~~~