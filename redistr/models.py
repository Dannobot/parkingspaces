# coding=utf-8

from django.db import models

# Create your models here.
class RegiSub(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=128)
    password = models.CharField(max_length=128)
	
    def __unicode__(self):
        return self.name
