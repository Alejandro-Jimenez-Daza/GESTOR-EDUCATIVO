from django.db import models
from api.profesores.models import Profesores

class Asignaturas(models.model):
    nom_asignatura = models.CharField(max_lenght=50)
    fecha_inicio = models.DateField()
    horas_semanales = models.DateTimeField()
    nivel = models.CharField(max_lenght=20)
    profesores = models.ForeignKey(Profesores, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'Asignaturas'
