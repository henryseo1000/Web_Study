from flask import Flask, render_template, request
import pymysql

app = Flask(__name__)

# MySQL 데이터베이스 연결
db = pymysql.connect(host='127.0.0.1', user='root', db='dev_test', charset='utf8')

# 데이터에 접근
cursor = db.cursor()

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/map')
def kakaoMap():
   return render_template('map.html')

@app.route('/login')
def tryLogin():
   if request.method == 'POST' :
      result = request.form
      sql = "select id from login where id == "
   return render_template('index.html')

if __name__ == '__main__':  
   app.run('127.0.0.1', port=5001, debug=True)