from flask import Flask, render_template, request
import pymysql

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/semantic-tag')
def semantic():
    return render_template('semantic-tag.html')

# 참고 : 맥의 경우는 포트 5000번이 Airport 전용이라 5001으로 해야 안정적으로 작동한다.
if __name__ == '__main__':  
   app.run('127.0.0.1', port=5001, debug=True)