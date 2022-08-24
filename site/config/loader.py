# locale imports
from .settings import EMAIL_LOGIN, EMAIL_PASSWORD

from services.mail import EmailClient

email_client = EmailClient(EMAIL_LOGIN, EMAIL_PASSWORD)
