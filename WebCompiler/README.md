# CodeMirror를 이용한 웹 컴파일러 만들기
> CodeMirror와 bootstrap을 이용해 웹에서 코드를 실행할 수 있도록 만듭니다.
## 참고
- <a href="https://github.com/codemirror/dev/">CodeMirror</a>
- <a href="https://getbootstrap.com/">BootStrap</a>
- <a href="https://www.youtube.com/watch?v=AkIortwElAg&list=PL9lRHqeCagtv-EsnrBVDRDh0QDc2LReac&index=2">How to make a web CodeEditor like vscode using Codemirror</a>

## 원래 코드에서 수정 사항
> npm compilex 패키지가 deprecated 되어 대체제로 JDoodle Api를 사용했습니다.
- <a href="https://www.jdoodle.com/">JDoodle Website</a>
- 무료로 사용을 원하는 경우 컴파일 횟수가 하루 200회로 제한됩니다.

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
또는
~~~~shell
% node Api.js
~~~~

**주의사항 : 혹시 이 코드를 실행해보고 싶으신 분이 계시다면 반드시 Api.js의 sendFile 코드를 아래와 같이 바꿔주세요.**  
~~~javascript
app.use("/codemirror-5.65.16", express.static("[현재 프로젝트에 설치된 codemirror-5.65.16 디렉토리의 절대 경로]"))
app.get("/", function(req, res){
    res.sendFile("[index.html 절대 경로]")
})
~~~

## 실행 화면 : 현재 코드상 8000포트로 실행
<center>
![image](https://github.com/henryseo1000/Web_Study/assets/81693499/6579fbf4-f13d-42cf-ac71-460cbff055f9)
</center>
