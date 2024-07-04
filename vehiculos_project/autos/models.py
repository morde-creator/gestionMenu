# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class Vehiculo(models.Model):
    marca = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100)
    año = models.IntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    kilometraje = models.IntegerField()
    condicion = models.CharField(max_length=50)
    fecha_cotizacion = models.DateTimeField(auto_now_add=True)

class Venta(models.Model):
    vehiculo = models.ForeignKey(Vehiculo, on_delete=models.CASCADE)
    fecha_venta = models.DateTimeField(auto_now_add=True)

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    admin_key = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.username
