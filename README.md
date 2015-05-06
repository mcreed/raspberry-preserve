# raspberry-preserve
Raspberry Preserve, bittorrent sync client for Raspberry Pi

	sudo apt-get update
	sudo apt-get upgrade

# Install latest Node.js

	sudo wget http://node-arm.herokuapp.com/node_latest_armhf.deb
	sudo dpkg -i node_latest_armhf.deb

# Install NPM

	sudo apt-get npm

# add btsync repo manually

https://melgrubb.wordpress.com/2014/08/03/raspberry-pi-home-server-part-14-bittorrent-sync/

	sudo apt-get btsync

# create project directory

	create npm package
	npm init
	sudo npm install onoff —save (two dashes option)
	touch index.js
	nano index.js

	npm install bittorrent-sync —save
	//npm install btsync —save
	sudo npm install btsync -g
	sudo npm install forever -g

