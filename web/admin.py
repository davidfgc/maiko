from django.contrib import admin

from web.models import *
# Register your models here.
class ContactAdmin(admin.ModelAdmin):
	readonly_fields = ('date',)

admin.site.register(Contact, ContactAdmin)