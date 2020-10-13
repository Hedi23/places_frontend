from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('places/<partner_short_name>/', views.partnerPlaces, name='partnerPlaces'),
]