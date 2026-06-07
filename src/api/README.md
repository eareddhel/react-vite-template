# INSTRUCCIONES PARA USAR EN LA CREACIÓN DE APIS

## Estructura de archivos orientada a funcionalidades:

1. Organización por módulos y funcionalidades
Crear un archivo independiente para cada funcionalidad específica, el cual debe alojarse dentro de su carpeta correspondiente según su propósito. Por ejemplo:

- Autenticación: 
  src/api/auth/login.php
  src/api/auth/logout.php
  src/api/auth/register.php
  src/api/auth/reset_password.php
  src/api/auth/verify_email.php
  src/api/auth/forgot_password.php
- Contacto:
  src/api/contact/send_message.php
  src/api/contact/get_messages.php
  src/api/contact/delete_message.php

2. Principio de responsabilidad única:
Cada archivo debe contener únicamente el código relacionado con su funcionalidad específica, evitando mezclar distintas responsabilidades o lógicas de negocio en un mismo lugar.