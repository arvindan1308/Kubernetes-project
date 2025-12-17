from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify({
        "status": "Success",
        "products": [{"id": 1, "name": "Kubernetes Mastery"}, {"id": 2, "name": "Docker Pro"}]
    })

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)