from flask import Flask, render_template

server = Flask(__name__)

@server.route("/")
def index():
    return render_template("main.html")

server.run("0.0.0.0", 3000)