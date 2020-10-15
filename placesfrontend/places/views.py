from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Branch, Partner
from .serializers import BranchSerializer, PartnerSerializer

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
    serializer_class = BranchSerializer

    # def get_queryset(self):
    #     user = self.request.user
    #     partner = Branch.objects.filter(partner_short_name=self.kwargs['partner_short_name'])
    #     return partner
    
    def retrieve(self, request, pk=None):
        queryset = Branch.objects.all()
        partner = get_object_or_404(queryset, pk=partner_short_name)
        serializer = BranchSerializer(partner)
        return Response(serializer.data)