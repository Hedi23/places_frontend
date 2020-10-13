from rest_framework import serializers
from .models import Branch, Partner

# Branch Serializer
class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'


# Partner Serializer
class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = '__all__'

# # BranchDetail Serializer
# class BranchDetailSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Branch
#         fields = '__all__'


# PartnerDetail Serializer
class PartnerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'
        lookup_field = 'partner_short_name'
