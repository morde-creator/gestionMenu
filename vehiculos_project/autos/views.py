# views.py
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Count
from .models import Vehiculo, Venta
from .serializers import VehiculoSerializer, VentaSerializer
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import LoginForm

def login_view(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            admin_key = form.cleaned_data['admin_key']

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                messages.error(request, 'Nombre de usuario o contraseña incorrectos.')
    else:
        form = LoginForm()

    return render(request, 'Inicio.html', {'form': form})


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
