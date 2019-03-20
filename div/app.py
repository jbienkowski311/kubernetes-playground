from flask import Flask, json
app = Flask(__name__)

@app.route('/div/<int:a>/<int:b>', methods=['GET'])
def mul(a, b):
    data = {'result': a / b}
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response