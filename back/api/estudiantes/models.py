from django.db import models

class Estudiantes(models.Model):
    nombre = models.CharField(max_length=40)
    apellido = models.CharField(max_length=40)
    edad = models.CharField(max_length=2)
    fecha_nacimiento = models.DateField()
    genero = models.CharField(max_length=15)
    telefono = models.CharField(max_length=20)
    direccion = models.CharField(max_lenght=30)
    correo = models.CharField(max_length=30)
    num_identificacion = models.CharField(max_length=15)
    grado = models.CharField(max_lenght=5)

    class Meta:
        bd_table = 'Estudiantes'
    
