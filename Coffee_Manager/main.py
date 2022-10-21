import requests

import json

def Login(cedula):
    url = "http://127.0.0.1:8000/login/?cedula={}".format(cedula)

    response = json.loads(requests.get(url).text)
    return response


"""consultas de la Api coffee Manager"""

def get_All_users():
    """consuta de todos los usuarios"""
    url = "http://127.0.0.1:8000/user/"

    payload={}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)
    return response.text


def get_user(cedula):
    """consuta de un usuario pasado por parametro"""

    url = "http://127.0.0.1:8000/user/" + cedula

    payload={}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)
    return response.text

def get_sales(gte_weight ="", lte_weight="", gte_overall="", lte_overall=""):

    url = "http://127.0.0.1:8000/sale/?weight_cooffe__gte={}&\
        weight_cooffe__lte={}&overall_value__gte={}&\
        overall_value__lte={}".format(gte_weight, lte_weight, gte_overall, lte_overall)
    
    payload={}
    headers = {}
    
    response = requests.request("GET", url, headers=headers, data=payload)
    for i in response.json():
        print ("cedula es ---> {}".format(i["users"]["login"]))
    return response.text

print(Login(1)[0]["cedula"])
