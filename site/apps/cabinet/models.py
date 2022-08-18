from django.db import models

# locale imports
from apps.authentication.models import Profile


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


class DiscountServiceModel(models.Model):
    service = models.ForeignKey(
        ServiceModel,
        verbose_name="Услуга",
        on_delete=models.CASCADE,
    )
    discount = models.FloatField(
        verbose_name="Скидка ( в процентах )",
    )
    quantity = models.IntegerField(
        verbose_name="Количество от которого действует скидка",
    )

    def __str__(self):
        return f"{self.service} {self.discount} {self.quantity}"

    class Meta:
        verbose_name = "Скидка"
        verbose_name_plural = "Скидки"


class OrderModel(models.Model):
    date = models.DateTimeField(null=True, blank=True)
    social_network = models.CharField(max_length=200)
    service = models.ForeignKey(
        ServiceModel,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    quantity = models.IntegerField(default=0)
    link = models.CharField(max_length=2000)
    status = models.CharField(max_length=200, null=True, blank=True)
    is_order = models.BooleanField(default=False)
    order_id = models.IntegerField(
        null=True,
        blank=True,
    )

    price = models.FloatField(default=0)
    profile = models.ForeignKey(
        Profile,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
    )

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'
