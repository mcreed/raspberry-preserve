# Raspberry Preserve
A Raspberry Pi based BitTorrent Sync client.

Once you have a clean install of a Raspberry Pi running Noobs update it by running the commands below.

	sudo apt-get update
	sudo apt-get upgrade


## Install latest Node.js

	sudo wget http://node-arm.herokuapp.com/node_latest_armhf.deb
	sudo dpkg -i node_latest_armhf.deb

## Install NPM

	sudo apt-get npm

## Create a project directory and initialize it

	create npm package
	npm init
	touch index.js
	nano index.js

## Add btsync repo manually and install

Follow these instruction https://melgrubb.wordpress.com/2014/08/03/raspberry-pi-home-server-part-14-bittorrent-sync/

	sudo apt-get btsync

## Install node packages

	sudo npm install bittorrent-sync —-save
	sudo npm install onoff --save

## Install Forever globally

	sudo npm install forever -g

## Fire up index.js with forevereverytime your boot up the pi

	crontab -u pi -e
	@reboot /usr/bin/sudo -u pi -H /usr/local/bin/forever start /home/pi/projects/preserve/index.js
	sudo reboot -h 0
