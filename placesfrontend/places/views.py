from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Branch, Partner
from .serializers import BranchSerializer, PartnerSerializer, PartnerDetailSerializer

# Branch Viewset
class BranchViewSet(viewsets.ModelViewSet):
    queryset = Branch.objects.all()[:10]
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BranchSerializer # for list view
    model = Branch


    # Anzahl Places im System
    # def get_num_places (self):
    #     numPlaces = Branch.objects.values('branch_short_name').distinct().count()
    #     return numPlaces

    # def partnerPlaces(request, id):
    #     try:
    #         partnerPlaces = Places.objects.filter(partner_short_name=id)
    #         serializer = PartnerSerializer(partner)
    #         place_data = serializer.data
    #     except Place.DoesNotExist:
    #         place_data = {}
    #     # The magic happens in our _react_render helper function
    #     return _react_render({'place': place}, request)



# Partner Viewset
class PartnerViewSet(viewsets.ModelViewSet):
    queryset = Partner.objects.all()[:10]
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PartnerSerializer
    # detail_serializer_class = PartnerDetailSerializer
    model = Partner

class PartnerDetailViewSet(viewsets.ModelViewSet):

    serializer_class = PartnerDetailSerializer
    lookup_field = 'partner_short_name'

    # def get_queryset(self):
    #     partner = self.request.partner.partner_short_name
    #     print(partner)
    #     return Branch.objects.filter(partner_short_name=partner)