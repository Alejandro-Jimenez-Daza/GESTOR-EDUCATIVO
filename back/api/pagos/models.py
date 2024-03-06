from django.db import models
from api.acudientes.models import Acudientes

class Pagos(models.model):
    medio_pago = models.CharField(max_lenght=25)
    enlace_pasarela = models.CharField(max_lenght=30)
    tipo_pago = models.CharField(max_lenght=30)
    acudientes = models.ForeignKey(Acudientes, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'Pagos'
