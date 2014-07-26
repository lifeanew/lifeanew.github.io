# The TorqueWorx Website

This website is hosted using [Github pages](#) and built using static html and minimal javascript.

That should make it easy for anybody with access to update and work on development.

## Dev Requirements

* Nodejs

All you need to get a copy of the site up and running is node. Node is really easy to install locally.

Read the [directions on their site](http://nodejs.org/download/) to get it up and running in less than 15 minutes.

## Installation Instructions

Just a warning. You will need to use the command line to get the site running on your local computer.

Navigate to the folder that you would like to download the project to. This is usually ~/Sites on a mac.

Open your favorite terminal and then type the following commands:

```shell
$ cd ~/Sites
$ git clone https://github.com/torqueworx/torqueworx.github.io
```

This will clone the project into the `torqueworx.github.io` directory on your computer.
Navigate inside it to install your dependancies.

```shell
$ cd torqueworx.github.io
```

Now use npm (which came installed with nodejs) to install the needed project files.

```shell
$ npm install
```

And then use gulp to fire up a local server. You will be able to access the site on your local machine and from an ip address inside your local network.

```shell
$ gulp serve
```

Tada!

You should now be running a local copy of the website. 
