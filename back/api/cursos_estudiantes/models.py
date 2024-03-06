from django.db import models
from api.cursos.models import Cursos
from api.estudiantes.models import Estudiantes

class CursosEstudiantes(models.model):
    cursos = models.ForeignKey(Cursos, on_delete=models.CASCADE)
    estudiantes = models.ForeignKey(Estudiantes, on_delete=models.CASCADE)

    class Meta:
        bd_table = 'CursosEstudiantes'
