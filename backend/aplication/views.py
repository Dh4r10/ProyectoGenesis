from .models import *
from rest_framework import viewsets, permissions
from .serializers import *
from rest_framework.permissions import IsAuthenticated


class Perfilviewset(viewsets.ModelViewSet):
    queryset = Perfiles.objects.all()
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = PerfilSerilizers


class PsicosisViewSet(viewsets.ModelViewSet):
    queryset = Psicosis.objects.all()
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = PsicosisSerializer


class EpilepsiaViewSet(viewsets.ModelViewSet):
    queryset = Epilepsia.objects.all()
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = EpilepsiaSerializer


class AlcoholismoViewSet(viewsets.ModelViewSet):
    queryset = Alcoholismo.objects.all()
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = AlcoholismoSerializer


class AnsiedadDepresionViewSet(viewsets.ModelViewSet):
    queryset = Ansiedad.objects.all()
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = AnsiedadDepresionSerializer


class DatosPersonalesViewSet(viewsets.ModelViewSet):
    queryset = Datospersonales.objects.all()
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = DatosPersonalesSerializer


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = AuthUser.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer
