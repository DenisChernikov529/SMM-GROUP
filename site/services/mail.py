import smtplib  # Импортируем библиотеку по работе с SMTP

# Добавляем необходимые подклассы - MIME-типы
from email.mime.multipart import MIMEMultipart  # Многокомпонентный объект
from email.mime.text import MIMEText  # Текст/HTML

addr_from = "mckay-group@yandex.ru"
addr_to = "pusin4507@gmail.com"
password = "dbppcdheabdqtccn"  # пароль от почты addr_from


class EmailClient:

    server = smtplib.SMTP_SSL('smtp.yandex.ru', 465)

    def __init__(self, email: str, password: str):
        self.email = email
        self.password = password

    def send_message(self, email: str, subject: str, body: str):
        msg = MIMEMultipart()
        msg['From'] = self.email
        msg['To'] = email
        msg['Subject'] = subject

        msg.attach(MIMEText(body, 'plain'))
        self.server.login(self.email, self.password)
        self.server.send_message(msg)
        self.server.quit()
