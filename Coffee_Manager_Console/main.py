import json
import requests



def menu_principal():
    opciones = {
        '1': ('Ingresar', ingresar),
        '2': ('Registrarse >', registrar),  # la acción es una llamada a submenu que genera un nuevo menú
        '3': ('Salir', salir),
    }
    print()
    print(" \\\\\\\\\\\\\\  Bienvenido a Coffe Manager  ////////")
    print()

    generar_menu('Menu Principal \n', opciones, '3')  # indicamos el nombre del menú

def generar_menu(nombre, opciones, opcion_salida):  # incorporamos el parámetro para mostrar el nombre del menú
    opcion = None
    while opcion != opcion_salida:
        mostrar_menu(nombre, opciones)
        opcion = leer_opcion(opciones)
        ejecutar_opcion(opcion, opciones)
        print()



def mostrar_menu(nombre, opciones):  # incorporamos el parámetro para mostrar el nombre del menú
    print(f'# {nombre}. Seleccione una opción:')
    for clave in sorted(opciones):
        print(f' {clave}) {opciones[clave][0]}')


def leer_opcion(opciones):
    while (a := input('Opción: ')) not in opciones:
        print('Opción incorrecta, vuelva a intentarlo.')
    return a


def ejecutar_opcion(opcion, opciones):
    opciones[opcion][1]()


def submenu():
    opciones = {
        'a': ('Opción a', funcionA),
        'b': ('Opción b', funcionB),
        'c': ('Volver al menú principal', salir)
    }

    generar_menu('Submenú', opciones, 'c')  # indicamos el nombre del submenú


def registrar() :

    print ("Escriba Su nombre")
    name = input()
    print ("Escriba Su Apellido")
    lastname = input()

    print ("Escriba Su cedula")
    cedula = input()

    print ("Escriba Su correo")
    mail = input()
    
    print ("Escriba Su telefono")
    cel = input()
    
    print ("Escriba Su cooperativa")
    coop = input()
    
    print ("Escriba Su cedula Cafera")
    ced_caf = input()

    print ("Escriba Su contraseña")
    contra = input()
    
    auth_data = {
    "cedula": "5",
    "email": "5@gmail.com",
    "pasword": "1234"
    }

 #   auth_data2 ={
 #       "login": 5,
 #       "name": name,
 #       "last_name": lastname,
 #       "cooperative": coop,
 #       "cedula_cafetera": ced_caf,
 #       "special_program": 1
 #   }

    url = "http://127.0.0.1:8000/login/?cedula={}".format("5")

    request = requests.get(url)
    response = json.loads(request.text)
    print(response[0])
    auth_data2 ={
        "name": "juan",
        "last_name": "velaz",
        "cooperative": "cafe del valle",
        "cedula_cafetera": "23342345",
        "special_program": 1,
        "login": "5"

    }
    print(auth_data2)

    resp = requests.post('http://127.0.0.1:8000/user/', data=auth_data2)




""" Ingreso de un usuario"""
def ingresar():
    cedula = ingresarCedula()
    contra = ingresarContra()
    url = "http://127.0.0.1:8000/login/?cedula={}".format(cedula)

    request = requests.get(url)
    response = json.loads(request.text)
    if (response):
        contra_api= response[0]["pasword"]

        if (contra == contra_api):
            view_Usuario(cedula)
        else:
            print("contraseña incorrecta")
    else:
        print("{} esta cedula no esta Registrada \n Porfavor registrese en el Menu principal".format(cedula))

def ingresarCedula():

    print('Escriba su Cedula')
    res  = input()

    #validarCedula()
    return res

def validarCedula():
    opciones = {
        'a': ('Confirmar', funcion2),
        'b': ('Modificar', ingresarCedula),
    }
    generar_menu('Submenú', opciones, 'a')  # indicamos el nombre del submenú


def ingresarContra():

    print('Escriba su Contraseña')
    res  = input()

    #validarContra()
    return res

def validarContra():
    opciones = {
        'a': ('Confirmar', funcion2),
        'b': ('Modificar', ingresarContra),
    }
    generar_menu('Submenú', opciones, 'a')  # indicamos el nombre del submenú

"""" Menu de inicio de un usuario"""

response1 = []
user = ""
def view_Usuario(cedula):
    global response1
    global user
    url = "http://127.0.0.1:8000/user/?login=" + cedula
    request = requests.get(url)
    response1 = json.loads(request.text)
    if (response1):
        user = response1[0]["id"]
        name = response1[0]["name"]
        l_name = response1[0]["last_name"]
        print(" \\\\\\\\\\\\\\  Coffe Manager  ////////")

        print("     Bienvenido {} {} ".format(name, l_name))
        mostrar_Tabla2(user)

response = []
def mostrar_Tabla(user):
    global response
    url = "http://127.0.0.1:8000/sale_user/?users=" + str(user)
    request = requests.get(url)
    response = json.loads(request.text)
    total = 0
    if (response):
        print ("{:<15} {:<25} {:<10}".format('Cooperativa','fecha','Valor Venta'))
        for sale in response:
            coop=sale["users"]["cooperative"]
            date = sale["date"]
            overall = sale["overall_value"]
            total += overall 
            print ("{:<15} {:<25} {} $".format(coop,date,overall))
    print()
    print("valor Total {:<29} {} $". format("",total))
    menu_Usuario()


def mostrar_Tabla2(user):
    global response
    url = "http://127.0.0.1:8000/sale_user/?users=" + str(user)
    request = requests.get(url)
    response = json.loads(request.text)
    total = 0
    if (response):
        print ("{:<15} {:<20} {:<15} {:<15} {:<20} {:<15} ".format('Cooperativa','fecha','tipo de Cafe', 'Peso del Cafe', 'valor Unitario', 'Valor Venta'))
        for sale in response:
            coop=sale["users"]["cooperative"]
            date = sale["date"]
            type_cooffee = sale["type_cooffee"]
            weight_cooffe = sale["weight_cooffe"]
            unit_value = sale["unit_value"]
            overall = sale["overall_value"]

            total += overall 
            print ("{:<15} {:<20} {:<15} {:<15} {:<20} {:<25} ".format(coop,date,type_cooffee,weight_cooffe,unit_value,overall))
    print()
    print("{:<90} valor Total {} $". format("",total))
    menu_Usuario()


def mostrar_Tabla3(user):
    global response
    url = "http://127.0.0.1:8000/sale_user/?users={}&type_cooffee={}".format(str(user),filtro_complete["tca"])
    url2 = "http://127.0.0.1:8000/sale/?weight_cooffe__gte={}&weight_cooffe__lte={}&overall_value__gte={}&overall_value__lte={}".format(filtro_complete["pmn"],"",filtro_complete["pmy"],"")
    url3 = "http://127.0.0.1:8000/sale_date/?usuario={}&fecha_after={}&fecha_before=".format(str(user), getDate())
    request = requests.get(url3)
    response = json.loads(request.text)
    total = 0
    print("este usuario es :" + str(user))
    if (response):
        print ("{:<15} {:<20} {:<15} {:<15} {:<20} {:<15} ".format('Cooperativa','fecha','tipo de Cafe', 'Peso del Cafe', 'valor Unitario', 'Valor Venta'))
        for sale in response:
            coop=sale["users"]["cooperative"]
            date = sale["date"]
            type_cooffee = sale["type_cooffee"]
            weight_cooffe = sale["weight_cooffe"]
            unit_value = sale["unit_value"]
            overall = sale["overall_value"]

            total += overall 
            print ("{:<15} {:<20} {:<15} {:<15} {:<20} {:<25} ".format(coop,date,type_cooffee,weight_cooffe,unit_value,overall))
    print()
    print("{:<90} valor Total {} $". format("",total))
    menu_Usuario()


def getDate():
    ano = "2022"
    mes = "01"
    dia = "01"
    if filtro_complete["mes"] != "":
        mes = filtro_complete["mes"]
    if filtro_complete["ano"] != "":
        ano = filtro_complete["ano"]
    
    dat ="{}-{}-{}".format(ano,mes,dia)
    return dat


def menu_Usuario():
    opciones = {
        'a': ('Ver mi informacion', myInfo),
        'b': ('filtros', filtros),
        'c': ('salir', salir)
    }

    generar_menu('Submenú', opciones, 'c')  # indicamos el nombre del submenú



def funcion2():
    valido = True
    return valido


def myInfo():
    print()
    print(" \\\\\\\\\\\\\\  Coffe Manager  ////////")

    name = response1[0]["name"]
    l_name = response1[0]["last_name"]
    cooperative = response1[0]["cooperative"]
    cedula_cafetera = response1[0]["cedula_cafetera"]
    correo = response1[0]["login"]["email"]
    print ("{:<15} {:<25}".format("Usuario: ", name + " "+l_name))
    print ("{:<15} {:<25}".format("Correo:",correo))

    print ("{:<15} {:<25}".format("cooperativa:",cooperative))
    print ("{:<15} {:<25}".format("cedula cafetera:",cedula_cafetera))
    print()


def filtros():
    opciones = {
        'a': ('Mes', filtro_Mes),
        'b': ('Año', filtro_Ano),
        'c': ('Tipo de Cafe', filtro_cafe),
        'd': ('Precio mayor a', precio_Mayor),
        'e': ('Peso mayor a', peso_mayor),
        'f': ('quitar todos los filtros', quitarFiltros),
        'g': ('volver', salirfiltros)

    }

    generar_menu(showFiltre(), opciones, 'g')  # indicamos el nombre del submenú



filtro_complete= {"mes":"","ano":"","tca":"","pmn":"","pmy":""}

def showFiltre():
    print()
    print("Filtros")
    msg = "[mes: {} año: {} Tipo de cafe: {} Peso Meyor a {}  precio Mayor a {}\n]".format(filtro_complete["mes"],filtro_complete["ano"],filtro_complete["tca"],filtro_complete["pmn"],filtro_complete["pmy"])
    return msg
def filtro_Mes():
    global filtro_complete
    print('Escriba el mes (numero del mes ex: 1 )')
    res = input()
    filtro_complete["mes"]= res



def filtro_Ano():
    global filtro_complete

    print('Escriba el año (numero del mes ex: 2012 )')
    res = input()
    filtro_complete["ano"]= res

def filtro_cafe():
    global filtro_complete

    print('Escriba el tipo de cafe')
    res = input()
    filtro_complete["tca"]= res

def precio_Mayor():
    global filtro_complete

    print('Escriba el precio base')
    res = input()
    filtro_complete["pmy"]= res

def peso_mayor():
    global filtro_complete
    print('Escriba el peso base')
    res = input()
    filtro_complete["pmn"]= res

def quitarFiltros():
    global filtro_complete
    print()
    print("Todos los filtros se quitaron")
    print()

    filtro_complete = {"mes":"","ano":"","tca":"","pmn":"","pmy":""}

def salir():
    print('Saliendo')

def salirfiltros():
    print(showFiltre())
    mostrar_Tabla3(user)

def funcion2():
    return True
if __name__ == '__main__':
    menu_principal() # iniciamos el programa mostrando el menú principal
