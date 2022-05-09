---
title: "Connection - HMV"
date: "August 20 2021"
excerpt: "Writeup of Faust machine from HackMyVM platform"
---

# Connection

## Descubrimiento de IP
Lo primero de todo es descubrir la IP de la máquina victima. Para esta ocasión usaremos arp-scan. Filtrando por "PCS", descubrimos que la IP es 192.168.0.189
![](images/arp-scan.png)


## Fase de reconocimiento
### Primer escaneo de puertos
Una vez sabemos la IP de la maquina, lo siguiente es ver que puertos estan abiertos: 
![](images/1escaneo.png)

Tras descubrir los puertos abiertos, el siguiente es versionar estos puertos:
![](images/2escaneo.png)

Encontramos un puerto 22, correspondiente al servicio ssh, un puerto 80, correspondiente al servicio http, un Apache en este caso, y dos puertos que corren bajo el servicio SMB.

Haciendo uso de la herramienta whatweb nos damos cuenta de que es la pagina por defecto del servidor Apache. 

Antes de realizar un fuzzing web, vamos a probar a ver que encontramos dentro de los servicios SMB. 

Nos conectamos al servicio SMB haciendo uso de la herramienta smbclient: 
![](images/smbclient.png)

Vemos un directorio que llama la atención : share. Vamos a ver que hay dentro:
![](images/shareDirectory.png)

Dentro del directorio html vemos un archivo index.html. Todo apunta a que este directorio
es el directorio raiz que maneja el servidor web. Por tanto, una posible intrusion seria tratar de subir una "reverse shell" a través de Samba y acceder mediante la web.

Vamos a ello❗

## Intrusión

El primer paso es subir la reverse shell, evidentemente. Para ello vamos a hacer uso de la existente en la pagina de [pentestMonkey](https://github.com/pentestmonkey/php-reverse-shell). Podemos copiarnos el raw a mano y editarlo o hacer uso de la herramienta wget para descargarlo desde la terminal. 

Tras descargarla, editamos el campo IP para poner nuestra IP y el campo puerto para usar el puerto que queramos. 
![](images/reverseShell.png)

Tras editar el archivo, nos ponemos en escucha haciendo uso de netcat, por el puerto que hayamos decidido. En este caso, ha sido el 1234.
![](images/nc.png)

Ahora, para subir el fichero a traves de samba, nos situamos el directorio html y con put subimos el archivo. Para que esto funcione, debes estar situado en el mismo directorio donde tienes el archivo php antes de conectarte mediante samba.
![](images/sambaUpload.png)

Como paso final de la intrusion, accedemos a esta direccion desde la web, y si todo ha salido bien, tendremos conexion con la maquina victima.
![](images/conecctionEstablished.png)

El siguiente paso es hacer un tratamiento de la tty puesto que no es una tty interactiva al uso.

Los pasos a seguir son los siguientes:
```
script /dev/null -c bash
[ctrl^z]
#stty raw -echo;fg 
[ENTER]
reset
xterm
export TERM=xterm
export SHELL=bash
```
Proporción tamaño de la terminal:
- Abrimos una nueva terminal en nuestra máquina y escribimos: stty -a
![](images/stty%20-a.png)
- Desde la terminal donde hemos realizado el tratamiento tty: stty rows 42 columns 187


## PrivEsc
como usuario www-data que somos, vamos a ver que privilegios tenemos haciendo uso de sudo -l, ver si alguna rchivo tiene permisos SUID, tareas cron, etc...

1. el comando sudo -l nos devuelve un command not found. Por tanto, primer descarte. 
2. En la busqueda de permisos SUID encontramos los siguientes binarios:
![](images/findCommand.png)

Vemos que el binario gbd tiene permisos SUID, asique haciendo uso de la pagina [GTFOBins](https://gtfobins.github.io/) vamos a tratar de explotarlo:

La idea es tratar de obtener una shell como usuario root haciendo uso de: `./gdb -nx -ex 'python import os; os.execl("/bin/sh", "sh", "-p")' -ex quit`

Resultado: 
![](images/root.png)

Por último, visualizamos las flags de user y de root y tarea terminada💯