from datetime import datetime
from email.policy import default
from tkinter import CASCADE
from xmlrpc.client import DateTime
from django.db import models


class Login(models.Model):
    cedula = models.CharField(primary_key = True, max_length = 250, unique = True)
    email = models.EmailField(max_length = 255, unique = True)
    pasword = models.CharField(max_length=255)

    def __str__(self):
        return "cedula {}".format(self.cedula)


class User(models.Model):
    program = (
        ("0", "Ninguno"),
        ("1", "Expreso"),
        ("2", "Rainforest")
    )
    id = models.AutoField(primary_key = True)

    login = models.OneToOneField(Login, related_name="login", null=True, blank=True, on_delete = models.CASCADE)

    name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    cooperative = models.CharField(max_length = 255)
    cedula_cafetera = models.CharField(max_length = 255)
    special_program = models.CharField(max_length = 255, choices=program, default="0")

    def __str__(self):
        return "cedula {}".format(self.login.cedula)


class Sale(models.Model):
    type_c = (
        ("0", "Tipo de Cafe"),
        ("1", "Estandar"),
        ("2", "Regional"),
        ("3", "S. Precio ML"),
        ("4", "Pasilla")
    )
    users = models.ForeignKey(User, related_name="users", null=True, blank=True, on_delete = models.CASCADE)
    id = models.AutoField(primary_key = True)
    date = models.DateTimeField(default= datetime.now)
    type_cooffee =models.CharField(max_length = 255, choices= type_c, default = "0")
    weight_cooffe = models.FloatField() 
    unit_value = models.FloatField()
    overall_value = models.FloatField()

    def __str__(self):
        return "cedula {}".format(self.users.login.cedula)


