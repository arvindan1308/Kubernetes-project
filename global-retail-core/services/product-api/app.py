# from flask import Flask, jsonify
# import os

# app = Flask(__name__)

# @app.route('/products', methods=['GET'])
# def get_products():
#     return jsonify({
#         "status": "Success",
#         "products": [{"id": 1, "name": "Kubernetes Mastery"}, {"id": 2, "name": "Docker Pro"}]
#     })

# if __name__ == "__main__":
#     app.run(host='0.0.0.0', port=5000)

from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

# ----- MongoDB Connection -----
client = MongoClient("mongodb://mongodb:27017")
db = client["products"]

HTML_UI = """
<html>
<head>
<title>Kubernetes Project</title>
<style>
body { background:#111827; color:white; text-align:center;
       font-family:Arial; padding-top:60px; }
img { width:350px; border-radius:12px; margin-top:20px; }
</style>
</head>
<body>
<h1>🚀 Welcome to My Kubernetes Project</h1>
<h3>Powered by Flask + MongoDB + Kubernetes + Argo CD</h3>
<img src="https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png" />
</body>
</html>
"""

@app.route("/")
def home():
    return HTML_UI

app.run(host="0.0.0.0", port=5000)
