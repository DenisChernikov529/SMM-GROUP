from django.db import models


class Message(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()


class FAQModel(models.Model):
    question = models.CharField(max_length=55)
    answer = models.TextField()
