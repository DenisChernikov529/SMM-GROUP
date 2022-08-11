from django.db import models

# locale imports
from apps.authentication.models import Profile


class OrderModel(models.Model):
    number = models.IntegerField(
        null=True,
        blank=True,
    )
    num_serv = models.IntegerField(null=True, blank=True)
    data = models.DateTimeField(null=True, blank=True)
    social_network = models.CharField(max_length=200)
    name_service = models.CharField(max_length=200)
    quantity = models.IntegerField(default=0)
    link = models.CharField(max_length=2000)
    status = models.CharField(max_length=200, null=True, blank=True)
    order = models.BooleanField()
    price = models.FloatField(default=0)
    user = models.ForeignKey(
        Profile,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
    )

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'


class ServiceModel(models.Model):
    name = models.CharField(max_length=2000)
    price = models.FloatField()

    SOC_NETWORKS = [
        ('fa', 'Facebook'),
        ('vk', 'Vkontakte'),
        ('in', 'Instagram'),
        ('yo', 'YouTube'),
        ('tw', 'Twitch'),
        ('ok', 'Ok'),
    ]
    social_network = models.CharField(
        max_length=2,
        choices=SOC_NETWORKS,
    )

    class Meta:
        ordering = ['social_network']

    def __str__(self):
        return f'{self.name} {self.social_network}'
