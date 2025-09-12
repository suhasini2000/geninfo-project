from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connect to MongoDB (local or Atlas)
client = MongoClient("mongodb+srv://geninfo:geninfo@cluster0.vhmbgnt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client["geninfotech"]
students_collection = db["students"]

@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    if not all(key in data for key in ("name", "email", "password")):
        return jsonify({"error": "Missing fields"}), 400

    students_collection.insert_one(data)
    return jsonify({"message": "Student registered successfully!"}), 201

if __name__ == "__main__":
    app.run(debug=True)