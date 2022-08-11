python manage.py makemigrations authentication balance cabinet main news
python manage.py makemigrations

python manage.py migrate
python manage.py collectstatic --noinput

python manage.py loaddata faq service

gunicorn config.wsgi -b 0.0.0.0:8080
