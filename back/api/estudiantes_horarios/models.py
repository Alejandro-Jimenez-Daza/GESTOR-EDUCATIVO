from django.db import models
from api.estudiantes.models import Estudiantes
from api.horarios.models import Horarios

class EstudiantesHorarios(models.model):
    estudiantes = models.ForeignKey(Estudiantes, on_delete=models.CASCADE)
    horarios = models.ForeignKey(Horarios, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'EstudiantesHorarios'

