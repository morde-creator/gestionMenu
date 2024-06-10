from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VehiculoViewSet, VentaViewSet, get_vehiculos_mas_vendidos

router = DefaultRouter()
router.register(r'vehiculos', VehiculoViewSet)
router.register(r'ventas', VentaViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('vehiculos_mas_vendidos/', get_vehiculos_mas_vendidos, name='vehiculos_mas_vendidos'),
]
