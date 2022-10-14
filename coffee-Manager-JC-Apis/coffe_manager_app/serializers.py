from dataclasses import fields
from rest_framework import serializers
from  coffe_manager_app.models import Login, User, Sale

class Login_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = "__all__"


class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        depth = 1

class Sale_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = "__all__"
        read_only_fields = ('date',)
        depth = 1


