# Generated by Django 4.2.1 on 2023-06-21 20:45

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0005_alter_task_name_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='tasks.task_name'),
        ),
        migrations.AlterField(
            model_name='task',
            name='title',
            field=models.CharField(default=django.utils.timezone.now, max_length=200),
            preserve_default=False,
        ),
    ]
