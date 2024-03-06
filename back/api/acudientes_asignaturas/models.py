from django.db import models
from api.acudientes.models import Acudientes
from api.asignaturas.models import Asignaturas

class AcudientesAsignaturas(models.Model):
    acudientes = models.ForeignKey(Acudientes, on_delete=models.CASCADE)
    asignaturas = models.ForeignKey(Asignaturas, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'AcudientesAsignaturas'
