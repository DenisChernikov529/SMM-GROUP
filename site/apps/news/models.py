from django.db import models


class NewsModel(models.Model):
    action = models.CharField(max_length=200)
    text = models.TextField()
    data = models.DateField(auto_now=True)

    def __str__(self):
        return f'{self.action}'

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['data']
