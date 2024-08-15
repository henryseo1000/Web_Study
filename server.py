from flask import Flask, render_template;
import os;

app = Flask("__name__");

path = "./templates";
file_list = os.listdir(path);

# print ("file_list: {}".format(file_list));

@app.route("/")
def index():
    return render_template("index.html");

@app.route("/<string:path>")
def route(path):
    return render_template("/" + path + "/index.html");

if __name__ == '__main__':  
   app.run('127.0.0.1', port=5001, debug=True)