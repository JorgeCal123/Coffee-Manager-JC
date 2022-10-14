from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from coffe_manager_app.models import Login, User, Sale

class filter_year(filters.BaseFilterBackend):
    

    def filter_queryset(self, request, queryset, view):
        print("entra filter year")
        print(request)
        print(view)
        #filterset_fields = ["date"]
        #queryset = Sale.objects.all().filter("date")
        print(queryset)
        print("---> fin")
        return queryset 
