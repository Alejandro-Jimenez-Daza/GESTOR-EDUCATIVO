from django.db import models

class TipoDoc(models.Model):
    siglas = models.CharField(max_length=5)
    nombre = models.CharField(max_length=30)

    class Meta:
        bd_table = 'TipoDoc'
    
