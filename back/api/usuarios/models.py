from django.db import models
from api.tipo_doc.models import TipoDoc

class Usuarios(models.Model):
    documento = models.CharField(unique=True, max_length=20)
    tipo_doc = models.ForeignKey(TipoDoc, on_delete=models.CASCADE)
    

    class Meta:
        bd_table = 'usuarios'