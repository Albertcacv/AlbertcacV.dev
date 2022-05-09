---
title: "Faust - HMV"
date: "September 02 2021"
excerpt: "Writeup of Faust machine from HackMyVM platform"
---


# Faust - HMV

## Descubrimiento de IP
Para el descubirmiento de IP de la maquina victima usaremos la herramienta arp-scan para detectar los dispositvos en red local.

```bash
arp-scan -l | grep "PCS"
```

![](/Faust/arp-scan.png)

Una vez descubierta la IP  podemos proceder con la metodologia correspondiente.

## Reconicimiento

### Primer escaneo
Haciendo un ping a la ip de la maquina, esta nos responde y con ello observamos que el ttl es 64, es decir, no escontramos ante una maquina Linux.

Vamos a proceder con el escaneo de puertos:

```bash
sudo nmap -sS --min-rate 5000 -p- --open -n -Pn -vvv 192.168.0.35 -oG allPorts 
```

![](/Faust/allPorts.png)

Tras el primer escaneo, obtenemos los puertos 22 y 80. El siguiente es paso es ver la version y servicios que corren en estos puertos. Para ello: 

```bash
sudo nmap -sV -sC -p22,80 192.168.0.35 -oN targeted
```

![](/Faust/targeted.png)

Tras ejecutar whatweb y consultar la web, descubrimos que la pagina principal del servidor web corre bajo un CMS, concretamente, el CMS made simple.



## Intrusion
El primer paso es realizar un fuzzeo de directorios para ver si existe alguna via potencial para explotar.

```bash
gobuster dir -u http://192.168.0.35 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,html,zip,bak -t 40
```

![](/Faust/gobuster.png)

Con gobuster corriendo vemos ciertos directorios llamativos, entre ellos, admin.

Al entrar en el directorio admin nos encontramos ante un panel de login
![](/Faust/panel-login.png)

La primera opcion es buscar credenciales por defecto, no suelen funcionar pero nunca se sabe. 
Al buscar en google, nos dice que las credenciales se pueden encontrar en un MariaDB pero claro, no tenemos acceso.

La segunda opcion es un ataque de fuerza bruta contra el panel de login. En este caso, usaremos hydra pero puedes usar burpsuite tambien.

Para ello primero tenemos que saber como se tramita la peticion contra el panel.

1. Tramitamos una peticion con un usuario y contraseña de ejemplo solo para ver que formato tiene la peticion.
   ![](/Faust/network.png)

2. haciendo uso de hydra y sabiendo que admin es un usuario válido:

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt 192.168.0.35 http-post-form "/admin/login.php:username=^USER^&password=^PASS^&loginsubmit=Submit:Incorrect" -I -f -t 30
```

![](/Faust/hydra-login.png)

## PrivEsc