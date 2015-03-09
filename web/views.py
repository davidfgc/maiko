from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from web.models import Contact

import json, traceback

#problema con los csrf desde el cliente
@ensure_csrf_cookie

def index(request):
	return render(request, 'web/index.html')

def partials_contacto(request):
	response = "entra"
	try:
		if request.method == "GET":
			response = render(request, 'web/partials/contacto.html')
		elif request.method == "POST":
			info = json.loads(request.body)
			contact = Contact()
			contact.mail = info['mail']
			contact.name = info['name']
			contact.phone = info['phone']
			contact.query = info['query']
			contact.role = info['role']
			contact.save()
			
			response = {}
			response["id"] = contact.id
			response = JsonResponse(response, safe=False)
		
	except Exception, e:
		traceback.print_exc()
		raise
	finally:
		return response

def partials_home(request):
	return render(request, 'web/partials/home.html')

def partials_quienesSomos(request):
	return render(request, 'web/partials/quienes-somos.html')

def partials_servicios(request):
	return render(request, 'web/partials/servicios.html')