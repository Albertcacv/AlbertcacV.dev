---
title: "Noob - HMV"
date: "August 01 2021"
excerpt: "Writeup of Noob machine from HackMyVM platform"
---

# Fase de reconocimiento

En primer lugar, lanzamos una traza ICMP a la máquina para comprobar que esta activa.
![](images/traza_ICMP.png)

Debido al ttl, sabemos que estamos ante una máquina Windows.

## 1. Enumeración

![](images/1nmap.png)

Para un primer reconicimento hacemos uso de la herramienta nmap seguida de los siguientes parametros:
- -p- : Para escanear todo el rango de puertos, es decir, los 65535 puertos.
- --open : Para filtrar por aquellos puertos que esten abiertos.
- -T5 : Para acelerar el tiempo de escaneo. Recuerda que este parámetro admite valores desde el 0-5. Para este caso, dado que estamos en un entorno controlado, el uso de este parámetro tan alto es seguro. 
- -v : Indica verbosidad, es decir, nos reporta por consola los matches para no tener que esperar a que finalice el proceso.
- -n : Para evitar la resolución de DNS


Si resulta que el escaneo es demasiado lento, en algunos casos es lo normal, podemos hacer uso de un escaneo llamado "SyncPort Scan". Para ello, empleamos `-sS --min-rate 500` y como paso final exportamos las evidencias a un archivo de nombre nmap por ejemplo.
 
![](images\2nmap.png)

Como resultado de este escaneo, obtenemos el puerto 22(SSH) y el puerto 65530.
Una vez obtenidos estos puertos, vamos a proceder a conocer su version y y mediante una serie de scripts básicos de enumeracion ver que servicios corresponden a esos puertos:

![](images/targetedPorts.png)

Vemos que el puerto 22 corresponde a un servicio ssh y el puerto 65530, el cual, antes no sabiamos que servicio tenia, descubrimos que corresponde aun servidor http.

A partir de aqui, podemos usar herramientas como whatweb y wfuzz o gobuster para el fuzzing de directorios. En mi caso, utilizaré gobuster pero puedes utilizar aquella con la que mas agusto te encuentres.

![](images/whatweb.png)

Como whatweb no nos reporta nada interesante, vamos a probar a fuzzear directorios de la web.

Podemos usar los scripts de nmap para un primer fuzzeo, es posible que con este escaneo sea suficiente y si no, empleamos gobuster.

![](images/httpEnum.png)
Los scripts de nmap tampoco nos reportan nada interesante asi que es momento de aplicar gobuster.

![](images/gobuster.png)

con el reporte de gobuster vemos un directorio que resulta atractivo => nt4share.
Una buena idea sería realizar un segundo fuzzzing sobre este directorio para ver si oculta algo importante que nos sea útil.
No obstante, si entramos en la web vemos un directory listing donde encontramos algo bastente relevante:

![](images/n4tshare.png)

Dentro encontramos una clave id_rsa y una clave id_rsa.pub.
Si entramos en cada uno de estos fichero encontraremos una id_rsa y un nombre de usuario respectivamente.

![](images/id_rsa.png)
![](images/userFound.png)

## 2. Explotación

Para poder hacer uso de la clave id_rsa, vamos a descargarla y darle los permisos necesarios.

Con curl vamos a proceder a descargar la clave y la guardamos en un archivo con nombre sshkey:
![](images/curl.png)

Una vez tenemos la clave descargada y hemos proporcionado los permisos necesarios(600), vamos a proceder a conectarnos por ssh y como usuario sabemos que existe un usario adela:

![](images/adelassh.png)

Tenemos acceso a la máquina víctima por ssh. 

## 3. Escalada de privilegios

Como usuario adela debemos hacernos con el usuario root.

Veamos que procesos estan corriendo bajo el usuario root, encontrando dos que son de gran interés:
![](images/psaux.png)

Como sabemos que podemos leer archivos en /home/adela podemos crear un enlace simbolico hacia otro archivo y despues, tratar de leerlo. En este caso, la idea es hacer un enlace simbolico de la id_rsa del usuario root para poder leerla.

![](images/id_rsaRoot.png)

Ahora podemos leer la clave id_rsa desde el usuario Adela. Ahora solo queda repetir el proceso anterior y podriamos completar la escalada. Vamos a ello!

Descargamos la clave id_rsa con curl:
![](images/rootKey.png)

Damos los permisos necesarios(600) y nos conectamos por ssh:

![](images/rootSession.png)

También nos podriamos haber conectado desde la sesión de adela si nos hubiesemos copiado la clave id_rsa como un archivo en nano y hubiesemos procedido de la misma manera. 

Como usuario root que somos, ya podemos entrar el directorio root y ver la flag.

![](images/rootKeys.png)

