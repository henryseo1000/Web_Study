const express = require("express")
const app = express()
const bodyP = require("body-parser")
var request = require('request');

//https://github.com/scriptnull/compilex
app.use(bodyP.json())

//주의 ! 반드시 "/"를 경로 앞에 포함시켜야 정상 작동함
app.use("/codemirror-5.65.16", express.static("/Users/seohojun/Desktop/Study/Web_Study/WebCompiler/codemirror-5.65.16"))

app.get("/", function(req, res){
    res.sendFile("/Users/seohojun/Desktop/Study/Web_Study/WebCompiler/index.html")
})

app.get("/img", function(req, res){
    res.sendFile("/Users/seohojun/Desktop/Study/Web_Study/WebCompiler/img/favicon.ico")
})

app.post("/compile", function(req, res){
    var code = req.body.code
    var input = req.body.input
    var lang = req.body.lang
    var program = {
        script : "",
        language: "",
        versionIndex: "0",
        stdin : null,
        clientId: "a0fa0077882a70e53a61d44e5de6b6c2",
        clientSecret:"5906d54d54882b4832514f333fc0e4534d09856369b051c8f40b621188dbf42c"
    };

    program.script = code

    if(lang == "Python"){
        program.language = "python3"
    }
    else if(lang == "C++"){
        program.language = "cpp17"
    }
    else if(lang == "Java"){
        program.language = "java"
    }
    else {
        program.language = null
    }

    if(input){
        program.stdin = input
    }

    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) {
        if(body){
            res.send(body);
        }
        else if(response){
            res.send(response && response.statusCode);
        }
        else{
            res.send(error);
        }
    })
})

app.listen(8000)