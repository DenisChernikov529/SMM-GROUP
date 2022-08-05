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
