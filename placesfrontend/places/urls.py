from rest_framework import routers
from .views import BranchViewSet, PartnerViewSet, PartnerDetailViewSet

router = routers.DefaultRouter()
router.register('api/places', BranchViewSet, 'places')
router.register('api/partners', PartnerViewSet, 'partners')
router.register('api/partners/<str:partner_short_name>/', PartnerDetailViewSet, 'partner')

urlpatterns = router.urls