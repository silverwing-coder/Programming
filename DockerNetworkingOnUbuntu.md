<h6>ver. Dec. 2022</h6>
<h2> Docker Networing on Ubuntu</h2>

1. VirtualBox Setup

    - Ubuntu VM Network setup: Bridged Adapter

---

```sh
# install network management/control tools which is not a default in Ubuntu
sudo apt insatll net-tools

# NAT: Create a LAN
ip address show

# Bridged Adapter: Connect the current network
ip address show

# Update / Upgrade and install docker
sudo apt update
sudo apt upgrade -y

# install docker
sudo apt install docker.io -y
# confirm new docker interface installed
ip address show
# check the new docker network (~ LAN)
sudo docker network ls

# create a docker hosts (server)
sudo docker run -ltd --rm --name host01 busybox # sh
sudo docker run -ltd --rm --name host02 busybox # sh
sudo docker run -ltd --rm --name host03 nginx   # web

sudo docker ps
ip address show

# show newly created hosts
bridge link

# check th ip-address of docker hosts
sudo docker inspect bridge

sudo docker exec -it host01 sh
> ip add
> ping 172.17.0.3
> ping google.com
# check gateway: "ip masquerade"
> ip route
> exit

# host03 is a web server (ngnix). Let's expose to to outer network
sudo docker stop host03
sudo docker run -itd --rm -p 80:80 host03 ngnix
# check with docker-host web access (port 80) with a web browser
sudo docker ps

# create user defined bridge network
sudo docker network create network01
ip address show
sudo docker network ls

# create host on network (network01)
sudo docker run -itd --rm --network network01 --name host11 busybox
sudo docker run -itd --rm --network network01 --name host12 busybox
ip address show

bridge link
sudo docker inspect network01

# move a docker host03 to a hostv(virtual machine) which is parent node(default gateway)
sudo docker stop host03
sudo docker run -itd --rm --network host --name host03 ngnix

### create macVLAN (bridge mode): a container host is directly connected to the router
sudo docker network create -d macvlan \
> --subnet 10.7.1.0/24 \ #(home network router ip-address)
> --gateway 10.7.1.3 \
> -o parent=enp0s3 \ #(ubuntu machine)
> newnetwork01

sudo docker stop host01 host02
sudo docker run -itd --rm --network newnetwork01 \
> --ip 10.7.1.92 \
> --name host01 busybox

sudo docker exec -it host01 sh
> ip address show
> pint 10.7.1.3 #(default gateway ip-address) -> no response

# we can make a switch port to handle multiple mac addresses (promiscuous mode)
sudo ip link set enp03 promisc on
sudo docker exec -it host01 sh
> ping 10.7.1.3 # -> no response

# set vurtual machine network option to promisculus mode "Allow all"
> ping 10.7.1.3 # response returns

sudo docker run -itd --rm --network newnetwork02 \
> --ip 10.7.1.92 \
> --name host01 busybox
sudo docker exec -it host01 sh
> ping host01   # response returns

# deploy a web server on default router
sudo docker run -itd --rm --network newnetwork01 ip 10.7.1.96 --name webhost01 ngnix
# open a web browser and check the webhost01 server

# let docker host assign ip addresses to avoid ip-address conflict
docker network ls
docker network create -d macvlan --subnet 192.168.0.0/24 --gateway 192.168.0.1 --ip-range |
ip a | grep ens18

### create macVLAN (802.1Q mode)
sudo docker stop host01 host02
sudo docker stop host03
sudo docker network rm network01

sudo docker create network -d macvlan \
> --subnet 192.168.20.0/24 \
> --gateway 192.168.0.1 \
> --o parent=enp0s3.20 \ # docker will create vlan automatically
> macvaln20

ip address show

### create IPvlan (L2)
sudo docker create network -d ipvlan \
> --subnet 10.7.1.0/24 \
> --gateway 10.7.1.3 \
> --o parent=enp0s3 \ # docker will create vlan automatically
> network03

sudo docker run -itd --rm --network network03 \
> --ip 10.7.1.92
> --name host01 host02

sudo docker exec -it host01 sh
ping 10.7.1.3
ping google.com

ip address show

ping 10.7.1.92

arp -a 10.7.1.92

# remove IPvlan (L2)
sudo docker stop host01 host02
sudo docker network rm network03


## create new IPvlan (L3)
sudo docker create network -d ipvlan \
> --subnet 192.168.94.0/24 \
> --o parent=enp0s3 -o ipvlan_mode=l3 \
> --subnet 192.168.95.0/24 \ # multiple network sharing the same network card
> network03

sudo docker run -itd --rm --network network03 \
> --ip 192.168.94.7
> --name host01 busybox

sudo docker run -itd --rm --network network03 \
> --ip 192.168.94.8
> --name host02 busybox

sudo docker run -itd --rm --network network03 \
> --ip 192.168.95.7
> --name host03 busybox

sudo docker run -itd --rm --network network03 \
> --ip 192.168.95.8
> --name host04 busybox

sudo docker inspect network03

sudo docker exec -it host01 sh
ping google.com
ping host02
ping host03

## create a new router
ping google.com
ping host02
ping host03

## create NONE network
sodo docker nrun -itd -rm --network none --name host05 busybox
sudo docker exec -it host05 sh
> ip address show


```
