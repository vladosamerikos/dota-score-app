# Generated by Django 4.0.6 on 2023-05-28 16:49

import apps.users.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='portaluser',
            name='logo',
            field=models.ImageField(null=True, upload_to=apps.users.models.users_directory_path),
        ),
    ]