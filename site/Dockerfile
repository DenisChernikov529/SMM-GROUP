FROM python:3.7

WORKDIR /usr/src/smm-group/backend

COPY requirements.txt .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

ENTRYPOINT ["sh", "./entrypoint.sh"]
