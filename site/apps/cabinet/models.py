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


class SocialNetworkModel(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name = "Социальная сеть"
        verbose_name_plural = "Социальные сети"


class ServiceModel(models.Model):
    name = models.CharField(max_length=2000)
    price = models.FloatField()
    service_id = models.IntegerField(
        null=True,
        blank=True,
    )

    social_network = models.ForeignKey(
        SocialNetworkModel,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    class Meta:
        ordering = ['social_network']

    def __str__(self):
        return f'{self.name} {self.social_network}'
