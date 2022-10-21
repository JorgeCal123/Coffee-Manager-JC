from coffe_manager_app import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'login', views.Login_Model_Viewset, basename= "login")
router.register(r'user', views.User_Model_Viewset, basename= "user")
router.register(r'sale', views.Sale_Model_Viewset, basename= "sale")
router.register(r'sale_user', views.Sale_user_Model_Viewset, basename= "sale_user")
router.register(r'sale_date', views.Sale_Model_Viewset_fecha, basename="sale_date")