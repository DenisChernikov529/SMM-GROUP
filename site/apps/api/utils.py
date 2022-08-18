from apps.cabinet.models import DiscountServiceModel
from apps.cabinet.models import ServiceModel
from apps.cabinet.models import SocialNetworkModel


def get_price(
    social_network: str,
    service: str,
    quantity: str,
) -> float:
    social_network = SocialNetworkModel.objects.get(
        title=social_network,
    )
    service = ServiceModel.objects.get(
        name=service,
        social_network=social_network,
    )
    discount = DiscountServiceModel.objects.filter(
        quantity__lte=quantity,
        service=service,
    ).order_by("quantity")

    price = service.price * float(quantity)
    if discount:
        price = price - price * discount.last().discount / 100
    return price
