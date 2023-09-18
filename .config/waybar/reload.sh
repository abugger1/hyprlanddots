#!/bin/sh

#
#
#
#
#
#
killall waybar

# ----------------------------------------------------- 
# Loading the configuration based on the username
# ----------------------------------------------------- 
if [[ $USER = "sshep" ]]
then
    waybar -c ~/.config/waybar/config.jsonc & -s ~/.config/waybar/style.css  
else
    waybar &
fi 

