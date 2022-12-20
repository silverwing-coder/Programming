<h6>ver. Dec. 2022</h6>
<h2> Docker Container Management</h2>

1. Lab environment: Kali-Linux or Ubuntu on VirtualBox
2. This page introduces
    - How to create docker container and images
    - How to manage docker container(s)

---

```sh

### list docker images
sudo docker images # or
sudo docker image ls

# filter installed docker images on reference, before, since, label, dangling,
# sudo docker images --filter "<key>=<value>"
sudo docker images --filter "dangling=true"
sudo docker images --filter "before=debian:8"
sudo docker images --filter "since=ubuntu"

# listing and formatting docker images on .ID, .Repository, .Tag, .Size, .CreatedSince, .Digest
sudo docker images --format "{{.Repository}} has the following {{.ID}}"
sudo docker images --quiet

### Docker Exec command
# sudo docker exec <options> <container> <command>
sudo docker ps
sudo docker exec 4859xxxxxxxx ls

# interactive operation: -it
sudo docker exec -it juice-shop ls
sudo docker exec -it juice-shop sh
> ls
> exit
```

![Docker interactive](./DataFiles/docker_it.png)

```sh
# docker exec as root: "-u 0"
sudo docker exec -u 0 juice-shop whoami
# docker exec multiple commands: sudop docker exec <bontainer> bash -c "command1 ; command2 ; command3"
sudo docker exec juice-shop sh -c "ls ; cat server.js"
# docker exec in a specific directory"
sudo docker exec -w /juice-shop/logs juice-shop cat access.log.2022-12-20
## nothing logged yet

### docker run vs. docker exec
## docker run: creates a temporary container and execute the command
docker run -it ubuntu:18.4 sh
> exit
## docker exec: executes a command on a running container
docker exec -it juice-shop sh
> exit

```

```sh
### docker logs
# docker daemon logs:   debian distributions - /var/log/daemon.log
#                       windows OS - AppData/Local

# inspect docker daemon logs
tail -f -n 100 /bar/log/daemon.log | grep --color docker
sudo journalctl -u docker.service | less
# use the log option
sudo docker logs juice-shop
sudo docker logs --since 10h juice-shop
sudo docker logs --since 2022-10-10T10:00:00 juice-shop
sudo docker logs --until 10h juice-shop
sudo docker logs --since 2022-12-20T11:00:00 juice-shop

```
