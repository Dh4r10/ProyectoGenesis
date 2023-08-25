from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser


class AuthUser(AbstractUser):
    # Tus campos personalizados

    perfil = models.ForeignKey(
        'Perfiles',  # Nombre del modelo relacionado en forma de cadena
        on_delete=models.CASCADE,
        related_name='usuarios',
        blank=True,
        null=True
    )

    # # Añade estos atributos para evitar el conflicto con los atributos de AbstractUser
    groups = None
    user_permissions = None


class Epilepsia(models.Model):
    idepilepsia = models.AutoField(primary_key=True)
    pregunta25 = models.BooleanField()
    idusuario = models.ForeignKey(
        AuthUser, models.DO_NOTHING, db_column='idusuario')

    class Meta:

        db_table = 'Epilepsia'


class Perfiles(models.Model):
    idperfil = models.AutoField(primary_key=True)
    # Field name made lowercase.
    nombreperfil = models.CharField(db_column='nombrePerfil', max_length=10,
                                    db_collation='Modern_Spanish_CI_AS')

    class Meta:
        #
        db_table = 'Perfiles'


class Alcoholismo(models.Model):
    idalcoholismo = models.AutoField(primary_key=True)
    pregunta26 = models.BooleanField()
    pregunta27 = models.BooleanField()
    pregunta28 = models.BooleanField()
    pregunta29 = models.BooleanField()
    pregunta30 = models.BooleanField()
    idusuario = models.ForeignKey(
        AuthUser, models.DO_NOTHING, db_column='idusuario')

    class Meta:

        db_table = 'alcoholismo'


class Ansiedad(models.Model):
    idansiedad = models.AutoField(primary_key=True)
    pregunta1 = models.BooleanField()
    pregunta2 = models.BooleanField()
    pregunta3 = models.BooleanField()
    pregunta4 = models.BooleanField()
    pregunta5 = models.BooleanField()
    pregunta6 = models.BooleanField()
    pregunta7 = models.BooleanField()
    pregunta8 = models.BooleanField()
    pregunta9 = models.BooleanField()
    pregunta10 = models.BooleanField()
    pregunta11 = models.BooleanField()
    pregunta12 = models.BooleanField()
    pregunta13 = models.BooleanField()
    pregunta14 = models.BooleanField()
    pregunta15 = models.BooleanField()
    pregunta16 = models.BooleanField()
    pregunta17 = models.BooleanField()
    pregunta18 = models.BooleanField()
    pregunta19 = models.BooleanField()
    pregunta20 = models.BooleanField()
    idusuario = models.ForeignKey(
        AuthUser, models.DO_NOTHING, db_column='idusuario')

    class Meta:

        db_table = 'ansiedad'


class Datospersonales(models.Model):
    iddatospersonales = models.AutoField(primary_key=True)
    nombre = models.CharField(
        max_length=50, db_collation='Modern_Spanish_CI_AS')
    sexo = models.CharField(
        max_length=10, db_collation='Modern_Spanish_CI_AS')
    estadocivil = models.CharField(
        max_length=20, db_collation='Modern_Spanish_CI_AS')
    fechanacimiento = models.DateField()
    codigo = models.IntegerField()
    gradoinstruccion = models.CharField(
        max_length=50, db_collation='Modern_Spanish_CI_AS')
    ocupacion = models.CharField(
        max_length=50, db_collation='Modern_Spanish_CI_AS')
    anodeingreso = models.IntegerField()
    direccionactual = models.CharField(
        max_length=100, db_collation='Modern_Spanish_CI_AS')
    numerocel = models.CharField(
        max_length=15, db_collation='Modern_Spanish_CI_AS')
    vivecon = models.CharField(
        max_length=50, db_collation='Modern_Spanish_CI_AS')
    numerohermanos = models.IntegerField()
    familiarresponsable = models.CharField(
        max_length=50, db_collation='Modern_Spanish_CI_AS')
    numerocelresponsable = models.CharField(
        max_length=15, db_collation='Modern_Spanish_CI_AS')
    religion = models.CharField(
        max_length=50, db_collation='Modern_Spanish_CI_AS')
    beneficios = models.CharField(
        max_length=20, db_collation='Modern_Spanish_CI_AS')
    escuela = models.CharField(
        max_length=50, db_collation='Modern_Spanish_CI_AS')
    facultad = models.CharField(
        max_length=50, db_collation='Modern_Spanish_CI_AS')
    idusuario = models.ForeignKey(
        AuthUser, models.DO_NOTHING, db_column='idusuario')

    class Meta:

        db_table = 'datospersonales'


class Psicosis(models.Model):
    idpsicosis = models.AutoField(primary_key=True)
    pregunta21 = models.BooleanField()
    pregunta22 = models.BooleanField()
    pregunta23 = models.BooleanField()
    pregunta24 = models.BooleanField()
    idusuario = models.ForeignKey(
        AuthUser, models.DO_NOTHING, db_column='idusuario')

    class Meta:

        db_table = 'psicosis'
