import requests

key = "bca5704435e8bb6cfe4fcc1590446ce4"
base_url = "https://bigsmm.ru/api/"


def get_balance(key):
    response = requests.get(f"{base_url}?method=balance&api_key={key}")
    return response.json()["balance"]


def new_order(service_id, quantity, order_link):
    if order_link.startswith("https://"):
        order_link = order_link[8:]
    elif order_link.startswith("http://"):
        order_link = order_link[7:]
    key = "bca5704435e8bb6cfe4fcc1590446ce4"
    """
    key - сам ключ, который передал заказчик

    service_id - это можно посмотреть в API у услеги, чуть позже объясню

    quantity - это количество подписок(просмотров, лайков)

    order_link - это ссылка на аккаунт юзера (вписывать без "http://" или  без "https://" )
    """
    response = requests.get(f"{base_url}?method=add_order&api_key={key}&service_id={service_id}&quantity={quantity}&order_link={order_link}")

    return response.json()
