from urllib import response
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from coffe_manager_app.serializers import Login_Serializer, User_Serializer, Sale_Serializer
from coffe_manager_app.models import Login, User, Sale

from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from coffe_manager_app.custom_filters import *
from django_filters import rest_framework as filters

class Login_Model_Viewset(ModelViewSet):
    serializer_class = Login_Serializer
    queryset =  Login.objects.all()
    filter_backends = [DjangoFilterBackend]

    filterset_fields = ["cedula",]


class User_Model_Viewset(ModelViewSet):
    serializer_class = User_Serializer
    queryset =  User.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["login", "cooperative",]

class filtroFecha(filters.FilterSet):
    #fecha_min =filters.DateFilter(field_name="date", lookup_expr="gte", label="FecMin")
    usuario = filters.CharFilter(field_name="users")
    fecha = filters.DateFromToRangeFilter(field_name='date')
    class Meta:
        model: Sale
        queryset =  Sale.objects.all()

class Sale_Model_Viewset(ModelViewSet):
    serializer_class = Sale_Serializer
    queryset =  Sale.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = {
        "weight_cooffe": ["gte","lte"],
        "overall_value": ["gte","lte"],
    }
class Sale_user_Model_Viewset(ModelViewSet):
    serializer_class = Sale_Serializer
    queryset =  Sale.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["users", "type_cooffee"]

class Sale_Model_Viewset_fecha(ModelViewSet):
    serializer_class = Sale_Serializer
    queryset =  Sale.objects.all()
    filter_backends = [DjangoFilterBackend]

    filterset_fields = ["users"]
    filterset_class = filtroFecha
