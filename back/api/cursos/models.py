from django.db import models
from api.profesores.models import Profesores

class Cursos(models.model):

   nombre = models.CharField(max_lenght=50)
   descripcion = models.CharField(max_lenght=50)
   doc_encargado = models.CharField(max_lenght=40)
   estado = models.CharField(max_lenght=20)
   profesores = models.ForeignKey(Profesores, on_delete=models.CASCADE)

   class Meta:
      bd_table = 'Cursos'

