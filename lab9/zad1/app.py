from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello world!"

@app.route('/health')
def health():
    is_healthy = True

    if is_healthy:
        return "I'm healthy!"
    else:
        return "I'm unhealthy!", 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
