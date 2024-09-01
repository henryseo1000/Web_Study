from flask import Flask, render_template, url_for, redirect;
import os;

app = Flask("__name__");

path = "./templates";
file_list = os.listdir(path);

# print ("file_list: {}".format(file_list));

def redirect_to ():
    return url_for('static', filename='favicon/favicon.ico');


@app.route("/")
def index():
    return render_template("index.html");

@app.route("/<string:path>")
def route(path):
    return render_template("/" + path + "/index.html");

app.add_url_rule('/favicon.ico', 'redirect_to', redirect_to);

if __name__ == '__main__':  
   app.run('127.0.0.1', port=5001, debug=True)