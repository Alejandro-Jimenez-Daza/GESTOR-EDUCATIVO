from django.db import models
from api.administracion.models import Administracion

class Notificaciones(models.model):
    descrip_evento = models.CharField(max_lenght=50)
    reg_asistentes = models.CharField(max_lenght=15)
    administracion = models.ForeignKey(Administracion, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'Notificaciones'
