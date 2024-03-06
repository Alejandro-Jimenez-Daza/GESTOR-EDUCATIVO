from django.db import models
from api.profesores.models import Profesores
from api.horarios.models import Horarios

class HorariosProfesores(models.model):
    profesores = models.ForeignKey(Profesores, on_delete=models.CASCADE)
    horarios = models.ForeignKey(Horarios, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'HorariosProfesores'
