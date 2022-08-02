# Generated by Django 3.0.5 on 2020-07-19 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders',
            name='num_serv',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='balance',
            field=models.FloatField(default=0),
        ),
    ]
