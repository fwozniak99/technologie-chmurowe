FROM python:3.9-slim

RUN apt-get update && apt-get install -y curl

COPY . /app

WORKDIR /app

RUN pip install --no-cache-dir -r requirements.txt

HEALTHCHECK --interval=30s --timeout=12s --retries=3 \
  CMD curl -f http://localhost:5000/health || exit 1

CMD ["python", "app.py"]
