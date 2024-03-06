from django.db import models
from api.profesores.models import Profesores
from api.estudiantes.models import Estudiantes

class Notas(models.Model):
    nom_materia = models.CharField(max_lenght=30)
    calificacion = models.IntegerField()
    nom_estudiante = models.CharField(max_lenght=40)
    grado = models.CharField(max_lenght=5)
    profesores = models.ForeignKey(Profesores, on_delete=models.CASCADE)
    estudiantes = models.ForeignKey(Estudiantes, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'Notas'

