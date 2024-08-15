from flask import Flask, render_template;

app = Flask("Web Study");

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/card_test")
def card_test():
    return render_template("/card_test/index.html")

if __name__ == '__main__':  
   app.run('127.0.0.1', port=5001, debug=True)