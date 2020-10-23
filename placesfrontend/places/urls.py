#urls.py

from django.conf.urls import url
from places import views

urlpatterns = [
    url(r'^api/places$', views.branch_list),
    url(r'^api/placescount$', views.branch_count),
    url(r'^api/latestimport/(?P<contributor>\D+)$', views.latest_import),
    url(r'^api/partners$', views.partner_list),
    url(r'^api/partners/(?P<partner_short_name>[0-9]+)$', views.partner_detail),
    url(r'^api/places/(?P<branch_short_name>[0-9]+)$', views.branch_detail),
    url(r'^api/places/(?P<branch_short_name>[0-9]+)/(?P<contributor>\D+)$' , views.branch_from_contributor),
]