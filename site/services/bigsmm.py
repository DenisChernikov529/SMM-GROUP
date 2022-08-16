import requests

from typing import Union

param = {
    "key": "57d63d48c73c84a011e6fbd4bdd34f50",
    "action": "order_details",
    "order": "1534481",
}
url = "https://www.bigsmm.ru"
api_url = "https://bigsmm.ru/api/v2/"


def create_new_order(
    key: str,
    service_id: Union[str, int],
    quantity: Union[str, int],
    order_link: str,
):
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

    r = requests.get(
        api_url,
        params={
            "action": "add",
            "key": key,
            "service": service_id,
            "quantity": quantity,
            "link": order_link,
        },
    )
    return r.json()


def get_service(action):
    parameters = {
        "action": action
    }
    r = requests.get(api_url, params=parameters)
    return r.json()


def check_balance(action, key):
    parameters = {
        "action": action,
        "key": key,
    }
    r = requests.get(api_url, params=parameters)
    return r.json()


def get_list_of_orders(key):
    parameters = {
        "action": "orders",
        "key": key,
    }
    r = requests.get(api_url, params=parameters)
    return r.json()


def order_details(key, order):
    parameters = {
        "action": "order_details",
        "key": key,
        "order": order,
    }

    r = requests.get(api_url, params=parameters)
    return r.json()


def get_status_order(key, order):
    parameters = {
        "action": "status",
        "key": key,
        "order": order,
    }
    r = requests.get(api_url, params=parameters)
    return r.json()


def get_all_status_order(key, orders):
    parameters = {
        "action": "status",
        "key": key,
        "orders": orders
    }
    r = requests.get(api_url, params=parameters)
    return r.json()


def cancel_order(key, order):
    parameters = {
        "action": "cancel",
        "key": key,
        "order": order,
    }
    r = requests.get(api_url, params=parameters)
    return r.json()


def list_of_referrals(key):
    parameters = {
        "action": "referrals",
        "key": key
    }

    r = requests.get(api_url, params=parameters)
    return r.json()


def referrals_total(key):
    parameters = {
        "action": "referrals_total",
        "key": key,
    }

    r = requests.get(api_url, params=parameters)
    return r.json()


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
