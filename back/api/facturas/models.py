from django.db import models
from api.administracion.models import Administracion

class Facturas(models.Model):
   fecha_facturas = models.DateField()
   nom_acudiente = models.CharField(max_lenght=40)
   detalle = models.CharField(max_lenght=40)
   total_pago = models.IntegerField()
   dministradcion = models.ForeignKey(Administracion, on_delete=models.CASCADE)

class Meta:
    bd_table = 'Facturas'
   