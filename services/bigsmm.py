import requests

from typing import Union

# locale imports
from types.bigsmm import OrderResponse

base_url = "https://bigsmm.ru"


def get_balance(key: str) -> int:
    """Find out your account balance.

    Parameters
    ----------
    key : str
        API Access Key.

    Raises
    ------
    ValueError
        If one of the parameters does not match its type.

    Returns
    -------
    float
        Number of rubles on the account.

    """

    # validate
    if not isinstance(key, str):
        raise ValueError("Parameter key should be str")

    response = requests.get(
        f"{base_url}/api/",
        params={
            "method": "balance",
            "api_key": key
        }
    )
    return response.json()["balance"]


def create_new_order(
    key: str,
    service_id: Union[str, int],
    quantity: Union[str, int],
    order_link: str,
) -> OrderResponse:
    """Sends a request to create an order.

    Parameters
    ----------
    key : str
        API Access Key.
    service_id : str, int
        Service ID.
    quantity : str, int
        Number of subscribers.
    order_link : str
        Link to the page.

    Raises
    ------
    ValueError
        If one of the parameters does not match its type.

    Returns
    -------
    OrderResponse
        Received response.

    """
    if order_link.startswith("https://"):
        order_link = order_link[8:]
    elif order_link.startswith("http://"):
        order_link = order_link[7:]

    response = requests.get(
        f"{base_url}/api/",
        params={
            "method": "add_order",
            "api_key": key,
            "add_order": service_id,
            "quantity": quantity,
            "order_link": order_link,
        }
    )

    return OrderResponse.parse_obj(response.json())


if __name__ == "__main__":
    print(get_balance(key))
