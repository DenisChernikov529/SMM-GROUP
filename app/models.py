from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(help_text='Это поле обязательно')
    balance = models.FloatField(default=0)
    ref_link = models.CharField(max_length=8)
    ref = models.ForeignKey(
        'self',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
    )
    secret_key = models.CharField(max_length=8, blank=True, null=True)

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)
def new_user(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
        instance.profile.save()


class News(models.Model):
    action = models.CharField(max_length=200)
    text = models.TextField()
    data = models.DateField(auto_now=True)

    def __str__(self):
        return f'{self.action}'

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['data']


class Orders(models.Model):
    number = models.IntegerField(null=True, blank=True)
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


SOC_NETWORKS = [
    ('fa', 'Facebook'),
    ('vk', 'Vkontakte'),
    ('in', 'Instagram'),
    ('yo', 'YouTube'),
    ('tw', 'Twitch'),
    ('ok', 'Ok'),
]


class PricesForServices(models.Model):
    service_id = models.IntegerField()

    social_network = models.CharField(max_length=2, choices=SOC_NETWORKS)
    NAME_SERVS = [
        ('na', 'Накрутка живых подписчиков'),
        ('la', 'Лайки'),
        ('pr', 'Просмотры'),
    ]
    name_service = models.CharField(max_length=2, choices=NAME_SERVS)
    price = models.IntegerField()

    def __str__(self):
        return self. service_id

    class Meta:
        verbose_name = 'цена за услугу'
        verbose_name_plural = 'цены за услуги'


class Message(models.Model):
    UserName = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()


class Service(models.Model):
    name = models.CharField(max_length=2000)
    price = models.FloatField()
    social_network = models.CharField(max_length=2, choices=SOC_NETWORKS)

    class Meta:
        ordering = ['social_network']

    def __str__(self):
        return f'{self.name} {self.social_network}'


class Quest_Answer(models.Model):
    question = models.CharField(max_length=55)
    answer = models.TextField()
