import smtplib


def sendmessage(link, email):
    smtpObj = smtplib.SMTP("smtp.gmail.com", 587)
    smtpObj.starttls()
    smtpObj.login("smm-group.ru@yandex.ru", "qwerty12345Qwerty")
    smtpObj.sendmail(
        "smm-group.ru@yandex.ru",
        email,
        f"Здравствуйте, вы пытаетесь восстановить пароль на нашем сайте SmmGroup\nПожалуйста перейдите по данной ссылке для смены пароля: {link}".encode("utf-8"), # noqa 
    )


def sendmessage0(email, text):
    smtpObj = smtplib.SMTP("smtp.gmail.com", 587)
    smtpObj.starttls()
    smtpObj.login("smm-group.ru@yandex.ru", "qwerty12345Qwerty")
    smtpObj.sendmail("smm-group.ru@yandex.ru", email, text.encode("utf-8"))
