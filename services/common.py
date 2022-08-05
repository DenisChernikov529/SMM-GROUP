import random


def randomlink(num):
    symbols = "abcdefghijklmnopqrstuvwxyz1234567890"
    return "".join(random.choice(symbols) for i in range(num))
