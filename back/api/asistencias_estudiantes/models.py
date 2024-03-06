from django.db import models
from api.asistencias.models import Asistencias
from api.estudiantes.models import Estudiantes

class AsistenciasEstudiantes(models.model):
    asistencias = models.ForeignKey(Asistencias, on_delete=models.CASCADE)
    estudiantes = models.ForeignKey(Estudiantes, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'AsistenciasEstudiantes'


