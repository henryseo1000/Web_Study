const express = require('express')
const pg = require('pg')
const app = express()
const axios = require('axios')
const pgvector = require('pgvector/pg')
const mysql2      = require('mysql2');

const connection = mysql2.createConnection({
  host     : '192.168.0.33',
  user     : '***',
  password : '***',
  database : 'testdb'
});

app.listen(8080, ()=> {
  console.log(`서버가 활성화되었습니다 : http://localhost:8080`)
});

if(connection.connect()){
  
}

app.get('/', (req, res) => {
  res.send('메인 페이지입니다.')
});

app.get('/add', async (req, res) => {
  var result = await axios.post('https://api.openai.com/v1/embeddings', {
    input: "배고프다",
    model: "text-embedding-3-small",
    encoding_format: "float"
  },
  {
    headers: {
      'Content_Type': 'application/json',
      'Authorization': 'Bearer ' + 
      'api-key'
    }
  })
  console.log(result.data.data[0].embedding)
  res.send('테스트 페이지입니다.')
});