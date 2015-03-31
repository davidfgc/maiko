from django.http import JsonResponse
from django.core.mail import EmailMultiAlternatives
from django.shortcuts import render
from django.template.loader import render_to_string
from django.views.decorators.csrf import ensure_csrf_cookie

from maiko import settings
from web.models import Contact

import json, traceback

mail = {
	"subject": "[MAIKO-ADMIN] Mensaje de contaco",
	'template': 'web/email/contacto.html',
}

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
			# guardar contacto en BD
			contact = Contact()
			contact.mail = info['mail']
			contact.name = info['name']
			contact.phone = info['phone']
			contact.query = info['query']
			contact.role = info['role']
			contact.save()
			
			# send to mail
			data = {
				'name': contact.name,
				'role': contact.role,
				'mail': contact.mail,
				'phone': contact.phone,
				'query': contact.query,
				'id': contact.id
			}
			html = render_to_string(mail['template'], data)
			msg = EmailMultiAlternatives(mail["subject"], "", settings.EMAIL_HOST_USER, [settings.EMAIL_HOST_USER])
			msg.attach_alternative(html, "text/html")
			msg.send()

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