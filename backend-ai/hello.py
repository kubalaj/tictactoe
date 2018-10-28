from flask import Flask
app = Flask(__name__)

test = [
    {
        'test': 'test'
    }
]

@app.route('/tictactoe', methods=['GET'])
def hello_world():
    return 'Hello, World!'
