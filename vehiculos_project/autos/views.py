# views.py
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Count
from .models import Vehiculo, Venta
from .serializers import VehiculoSerializer, VentaSerializer

class VehiculoViewSet(viewsets.ModelViewSet):
    queryset = Vehiculo.objects.all()
    serializer_class = VehiculoSerializer

class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

@api_view(['GET'])
def get_vehiculos_mas_vendidos(request):
    vehiculos = Venta.objects.values('vehiculo__marca', 'vehiculo__modelo', 'vehiculo__año').annotate(total_vendidos=Count('vehiculo')).order_by('-total_vendidos')[:5]
    return Response(vehiculos)
