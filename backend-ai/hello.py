#!flask/bin/python
from flask import Flask, jsonify

app = Flask(__name__)

test = [
    {
            'id': 1,
            'description': 'it works!'
    }
]

@app.route('/api', methods=['GET'])
def get_test():
    return jsonify({'test': test})

if __name__ == '__main__':
    app.run(debug=True)
