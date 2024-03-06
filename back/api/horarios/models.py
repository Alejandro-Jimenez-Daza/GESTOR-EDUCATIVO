from django.db import models
from api.asignaturas.models import Asignaturas
from api.profesores.models import Profesores
from api.administracion.models import Administracion

class Horarios(models.model):
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    salon = models.CharField(max_lenght=5)
    grupo = models.CharField(max_lenght=5)
    asignaturas = models.ForeignKey(Asignaturas, on_delete=models.CASCADE)
    profesores = models.ForeignKey(Profesores, on_delete=models.CASCADE)
    administracion = models.ForeignKey(Administracion, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'Horarios'


