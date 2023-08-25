from rest_framework import serializers
from .models import *
from .models import AuthUser  # Asegúrate de importar tu modelo personalizado
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # get perfil
        # Obtén el perfil asociado al usuario
        perfil = user.perfil

        # Si el perfil existe, obtén su idperfil
        if perfil:
            token['idperfil'] = perfil.idperfil
        else:
            # Si no hay perfil asociado, puedes manejarlo como desees
            token['idperfil'] = None
        # ...

        return token


# this serializer is already with url


class PerfilSerilizers(serializers.ModelSerializer):
    class Meta:
        model = Perfiles
        fields = '__all__'


class PsicosisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Psicosis
        fields = '__all__'


class EpilepsiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Epilepsia
        fields = '__all__'


class AlcoholismoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alcoholismo
        fields = '__all__'


class AnsiedadDepresionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ansiedad
        fields = '__all__'


class DatosPersonalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Datospersonales
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    # Campo para proporcionar el ID del perfil al crear el usuario
    perfil_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = AuthUser
        fields = ('username', 'password', 'perfil_id')

    def create(self, validated_data):
        # Extraemos el valor del ID del perfil
        user = AuthUser(**validated_data)
        validated_data['password'] = make_password(
            validated_data.get('password'))
        perfil_id = validated_data.get('perfil_id')

        return super().create(validated_data)
