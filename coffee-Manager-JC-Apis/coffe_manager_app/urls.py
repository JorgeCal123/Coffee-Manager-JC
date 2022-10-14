from coffe_manager_app import views
from django.urls import re_path, include

from coffe_manager_app.routers import router

urlpatterns = [
    
    #path("login", views.Login_Model_Viewset.as_view({"get": "list", "post": "create", "delete":"destroy"}), name="login"),
    #path("user", views.User_Model_Viewset.as_view({"get": "list", "post": "create", "delete":"destroy"}), name="user"),
    #path("sale", views.Sale_Model_Viewset.as_view({"get": "list", "post": "create", "delete":"destroy"}), name="sale"),

]
urlpatterns += router.urls