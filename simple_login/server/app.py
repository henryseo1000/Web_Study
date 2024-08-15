from flask import Flask, render_template, request
import pymysql, ssl

app = Flask(__name__)

# MySQL 데이터베이스 연결
db = pymysql.connect(host='192.168.0.34', user='newuser', password='1', db='testdb', charset='utf8')

# 데이터에 접근
cursor = db.cursor()

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/introduce')
def introduce():
   return render_template('introduce.html')

@app.route('/map')
def kakaoMap():
   return render_template('map.html')

@app.route('/login')
def tryLogin():
   if request.method == 'GET' :
      result = request.form
      sql = "select id from login where id == " + result.name
      db.query(sql)
   return render_template('introduce.html')

@app.route('/signup')
def trySignUp():
   if request.method == 'POST' :
      result = request.form
      sql = "insert into login(id, pwd) values(" + result.name + ',' + result.pwd + ")"
      db.query(sql)
   return render_template('index.html')


if __name__ == '__main__':  
   ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS)
   ssl_context.load_cert_chain(certfile = 'newcert.pem', keyfile = 'newkey.pem', password = 'secret')
   app.run('127.0.0.1', port = 5001, debug = True, ssl_context = ssl_context)