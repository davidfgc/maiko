from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',

    url(r'^$', 'web.views.index', name='index'),
    
    url(r'^partials/home$', 'web.views.partials_home', name='home'),
    url(r'^partials/quienes-somos$', 'web.views.partials_quienesSomos', name='quienesSomos'),
)
