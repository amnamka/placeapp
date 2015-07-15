Place app
=====
File Structure
-----
The app is still in the development mode. Current structure is: 

    public/
        js/
          lib/			--> 3p
          controller.js	--> app controller
        css/
          lib/			--> 3p
          app.css		--> app styles
    views/
        index.html		--> main page for the app
    app.js				--> app config
    package.json		--> node config


Launching the app steps:
-----
Install node dependencies:

    $ npm install

Run app

    $ node app

Open URL ```http://localhost:3000/```