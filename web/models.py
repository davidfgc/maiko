from django.db import models

# Create your models here.
class Contact(models.Model):
	"""docstring for Contacto"""
	
	date = models.DateField(auto_now_add=True)
	mail = models.EmailField(max_length=30)
	name = models.CharField(max_length=50)
	phone = models.CharField(max_length=10)
	query = models.CharField(max_length=255)
	role = models.CharField(max_length=50)

	def __unicode__(self):
		return self.mail
		