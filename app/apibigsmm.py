import requests
from bs4 import BeautifulSoup

key = 'bca5704435e8bb6cfe4fcc1590446ce4'

def get_balance(key):
	response = requests.get('https://bigsmm.ru/api/?method=balance&api_key=' + key)
	return response.json()['balance']

def new_order(service_id, quantity, order_link):
	if order_link.startswith("https://"):
		order_link = order_link[8:]
	elif order_link.startswith("http://"):
		order_link = order_link[7:]
	key = 'bca5704435e8bb6cfe4fcc1590446ce4'
	'''
	key - сам ключ, который передал заказчик

	service_id - это можно посмотреть в API у услеги, чуть позже объясню

	quantity - это количество подписок(просмотров, лайков)

	order_link - это ссылка на аккаунт юзера (вписывать без 'http://' или  без 'https://' )
	'''
	response = requests.get('https://bigsmm.ru/api/?method=add_order&api_key='+ key +'&service_id='+ str(service_id) + '&quantity=' + str(quantity) + '&order_link=' + order_link)
	
	return response.json()
	#return {"errorcode":"0","msg":"Успешно","order_id":"7307","order_service_id":"27307"}
