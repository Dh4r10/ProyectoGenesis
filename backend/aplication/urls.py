from rest_framework import routers
from .views import *
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import *

router = routers.DefaultRouter()
router.register('api/perfiles', Perfilviewset, basename='perfil')
router.register('api/usuarios', UsuarioViewSet, basename='usuario')
router.register('api/psicosis', PsicosisViewSet, basename='psicosis')
router.register('api/epilepsia', EpilepsiaViewSet, basename='epilepsia')
router.register('api/alcoholismo', AlcoholismoViewSet, basename='alcoholismo')
router.register('api/ansiedad', AnsiedadDepresionViewSet, basename='ansiedad')
router.register('api/datospersonales', DatosPersonalesViewSet,
                basename='datospersonales')
urlpatterns = [
    path('', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
