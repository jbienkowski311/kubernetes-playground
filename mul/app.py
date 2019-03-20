import requests
from flask import Flask, json
app = Flask(__name__)

additionHost = 'addition:8080'

@app.route('/mul/<int:a>/<int:b>', methods=['GET'])
def mul(a, b):
    result = 0
    for _ in range(1, b):
        r = requests.get('http://' + additionHost + '/add/' + str(a) + '/' + str(a))
        r = r.json()['result']
        result += r

    data = {'result': result}
    response = app.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response