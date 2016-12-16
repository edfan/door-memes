from __future__ import unicode_literals

from django.db import models

class Status(models.Model):
    current_status = models.CharField(max_length=200)

    def __str__(self):
        return self.current_status
