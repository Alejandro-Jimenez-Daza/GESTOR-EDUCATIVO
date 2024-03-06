from django.db import models
from api.estudiantes.models import Estudiantes
from api.profesores.models import Profesores

class EstudiantesProfesores(models.model):
    estudiantes = models.ForeignKey(Estudiantes, on_delete=models.CASCADE)
    profesores = models.ForeignKey(Profesores, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'EstudiantesProfesores'
    

