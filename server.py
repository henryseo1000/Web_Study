import os, time, threading;
import smtplib;
from flask import Flask, render_template, url_for, redirect, request;
from watchdog.observers import Observer;
from watchdog.events import FileSystemEventHandler;
from dotenv import load_dotenv;
from flask_mail import Message, Mail;

app = Flask("__name__");

path = "./templates";
file_list = os.listdir(path);

load_dotenv()

def redirect_to():
    return url_for('static', filename='favicon/favicon.ico');

class Target:
    watchDir = os.getcwd()
    #watchDir에 감시하려는 디렉토리를 명시한다.

    def __init__(self):
        self.observer = Observer()   #observer객체를 만듦

    def run(self):
        event_handler = Handler()
        self.observer.schedule(event_handler, self.watchDir, recursive=True)
        self.observer.start()
        try:
            while True:
                time.sleep(1)
        except:
            self.observer.stop()
            print("Error")
            self.observer.join()



class Handler(FileSystemEventHandler):
#FileSystemEventHandler 클래스를 상속받음.
#아래 핸들러들을 오버라이드 함

    #파일, 디렉터리가 move 되거나 rename 되면 실행
    def on_moved(self, event):
        print(event)

    def on_created(self, event): #파일, 디렉터리가 생성되면 실행
        print(event)

    def on_deleted(self, event): #파일, 디렉터리가 삭제되면 실행
        print(event)

    def on_modified(self, event): #파일, 디렉터리가 수정되면 실행
        print(event)

@app.route("/")
def index():
    return render_template("index.html");

@app.route("/<string:path>")
def route(path):
    return render_template("/" + path + "/index.html");

@app.route("/login", methods=['POST'])
def login():
    return ""

@app.route("/email", methods=['POST'])
def send_email():
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 465
    app.config['MAIL_USERNAME'] = 'henryseo1000@gmail.com'
    app.config['MAIL_PASSWORD'] = os.getenv("GMAIL_PASSWORD")
    app.config['MAIL_USE_TLS'] = False
    app.config['MAIL_USE_SSL'] = True

    try :
        mail = Mail(app)
        msg = Message('[이메일 테스트] 안녕하세요!', sender='henryseo1000@gmail.com', recipients=[request.form["customer_email"]])
        msg.body = '축하합니다! 이 이메일을 받은 당신은 바보입니다!'
        mail.send(msg)

        return "메일이 성공적으로 전송되었습니다."
    
    except:
        return "문제가 발생했습니다. 다시 시도해주세요."


def watch_file() :
    file_watcher = Target();
    file_watcher.run();

app.add_url_rule('/favicon.ico', 'redirect_to', redirect_to);

# thread_1 = threading.Thread(target = watch_file, args=());
# thread_1.start();

if __name__ == '__main__':
   app.run('0.0.0.0', port=5001, debug=True);