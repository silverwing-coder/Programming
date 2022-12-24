<h6>ver. Dec. 2022</h6>
<h2> VNC server setup on Kali Linux</h2>

1. Client setup
    - Download RealVNC viewer from [REALVNC(Windows10)](https://www.realvnc.com/en/connect/download/viewer/windows/) and install
2. Server setup
    - Refer to [Kali Linux VNC setup (TightVNC)](https://www.kali.org/tools/tightvnc/)

```sh

# install vncpasswd and vncserver
sudo apt install tightvncpasswd
sudo apt install tightvncserver

# set password
vncpasswd

# run vnc server
vncserver -geometry 1920x1080 :1  # 1 : session number

# run vnc client
xxx.xxx.xxx.xxx:5901

# stop vnc server
vncserver -kill :1

```

<h5><em>If gray screen appears revise "~/.vnc/xstartup"</em></h5>

```sh
#!/bin/sh
unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS
startxfce4 &

[ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
[ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
xsetroot -solid grey
vncconfig -iconic &

```
