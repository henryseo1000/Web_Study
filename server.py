import os, time, threading;
from flask import Flask, render_template, url_for, redirect;
from watchdog.observers import Observer;
from watchdog.events import FileSystemEventHandler;

app = Flask("__name__");

path = "./templates";
file_list = os.listdir(path);

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

def watch_file() :
    file_watcher = Target();
    file_watcher.run();

app.add_url_rule('/favicon.ico', 'redirect_to', redirect_to);

# thread_1 = threading.Thread(target = watch_file, args=());
# thread_1.start();

if __name__ == '__main__':
   app.run('0.0.0.0', port=5001, debug=True);