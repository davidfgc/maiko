from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',

    url(r'^$', 'web.views.index', name='index'),
    
    url(r'^partials/blog$', 'web.views.partials_blog', name='blog'),
    url(r'^partials/contacto$', 'web.views.partials_contacto', name='contacto'),
    url(r'^partials/home$', 'web.views.partials_home', name='home'),
    url(r'^partials/quienes-somos$', 'web.views.partials_quienesSomos', name='quienesSomos'),
    url(r'^partials/servicios$', 'web.views.partials_servicios', name='servicios'),
)
