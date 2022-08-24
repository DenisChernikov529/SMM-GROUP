from django.db import models


class Message(models.Model):
    username = models.CharField(
        max_length=100,
        verbose_name="Имя пользователя",
    )
    email = models.EmailField(
        verbose_name="Почта"
    )
    message = models.TextField(
        verbose_name="Сообщение",
    )

    def __str__(self):
        return f"{self.username} {self.message[:10]}"

    class Meta:
        verbose_name = "Сообщение"
        verbose_name_plural = "Сообщения"


class OwnerEmail(models.Model):
    email = models.EmailField(
        verbose_name="Почта",
    )

    class Meta:
        verbose_name = "Почта для сообщений"
        verbose_name_plural = "Почты для сообщений"
