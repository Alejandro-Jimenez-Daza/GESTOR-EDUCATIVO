from django.db import models
from api.profesores.models import Profesores

class Asistencias(models.model):
    nom_estudiante = models.CharField(max_lenght=80)
    grado_estudiante = models.CharField(max_lenght=5)
    asignatura = models.CharField(max_lenght=40)
    profesor = models.ForeignKey(Profesores, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'Asistencias'