from django.db import models
from api.profesores.models import Profesores
from api.acudientes.models import Acudientes

class ReportesEducativos(models.model):
    nom_estudiante = models.CharField(max_lenght=80)
    notas_estudiante = models.CharField(max_lenght=20)
    asistencia = models.CharField(max_lenght=20)
    disciplina = models.CharField(max_lenght=30)
    profesores = models.ForeignKey(Profesores, on_delete=models.CASCADE)
    acudientes = models.ForeignKey(Acudientes, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'ReportesEducativos'