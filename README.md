Astro
=============

This is a project to create a predictive dialler using node and mongoDB.  

### Features

- Workflow
- Full API
- Call recording
- Conferencing
- Call backs and reminders
- Campaign management
- Custom entities and fields
- Multi-language / currency
- Import / export tools
- Customizable reporting
- KPI dashboard
- Task management
- Scaleable (supports load balancing)


### Prerequisites

- [MongoDB](https://www.mongodb.org/downloads)
- [Node.js 6.0+](http://nodejs.org)


### How do I install it?

1. Install MongoDB (https://www.mongodb.org/downloads)
2. Install Node.js (https://nodejs.org)
3. From the command line (in the same folder as the source code is running)
  `$ sudo npm install`

### How do I run it?

*   Start MongoDB
    `$ mongod`
*   To start the local process
    `$ node app.js`
    or
    `$ nodemon app.js` (with nodemon)

### Other useful commands

*   To stop the local process
    `$ killall node`


Testing & Debugging
----------

### Unit testing
Mocha (https://mochajs.org) is a test framework running on Node.js making asynchronous testing simple.
*   To install nodemon `$ sudo npm install -g mocha`.  
*   To run it `$ mocha` (all tests are in the 'test' folder)

### Logging

Winston (https://github.com/winstonjs/winston) is used for logging.

### Load balancing
There is an interesting article here:
https://www.keithcirkel.co.uk/load-balancing-node-js/

### Nodemon

Nodemon (https://github.com/remy/nodemon) automatically restart the server when you make changes to the files.  
*   To install nodemon `$ sudo npm install -g nodemon`.  
*   Once installed start node with `$ nodemon app.js` (with nodemon).


Deployment
----------

Once you are ready to deploy your app, you will need to create an account with
a cloud platform to host it. These are not the only choices, but they are my top
picks.

# Heroku

- Download and install [Heroku Toolbelt](https://toolbelt.heroku.com/)
- In terminal, run `heroku login` and enter your Heroku credentials
- From *your app* directory run `heroku create`
- Run `heroku addons:create mongolab`.  This will set up the mLab add-on and configure the `MONGOLAB_URI` environment variable in your Heroku app for you.
- Lastly, do `git push heroku master`.  Done!

*   To view the live logs
    `$ heroku logs`
*   To link the project from git to heroku
    `$ git remote add heroku git@heroku.com:YOURPROJECTNAME.git`


# Google Cloud Platform

- [Download and install Node.js](https://nodejs.org/)
- [Select or create](https://console.cloud.google.com/project) a Google Cloud Platform Console project
- [Enable billing](https://support.google.com/cloud/answer/6293499#enable-billing) for your project (there's a $300 free trial)
- Install and initialize the [Google Cloud SDK](https://cloud.google.com/sdk/docs/quickstarts)
- Create an `app.yaml` file at the root of your `hackathon-starter` folder with the following contents:

    ```yaml
    runtime: nodejs
    vm: true
    manual_scaling:
      instances: 1
    ```
- Make sure you've set `MONGODB_URI` or `MONGOLAB_URI` in `.env.example`
- Run the following command to deploy the app:

    ```bash
    gcloud app deploy
    ```
- [Monitor your deployed app](https://console.cloud.google.com/appengine) in the Cloud Console
- [View the logs](https://console.cloud.google.com/logs/viewer) for your app in the Cloud Console


Changelog
---------

### 1.0.0 (Septeber 15, 2016)
Initial build


Got a question?
---------

Say hello **@johnstone_stu** on twitter.  

FAQs
---------
### How do I update node?

- Clear NPM's cache:
sudo npm cache clean -f
- Install a little helper called 'n'
sudo npm install -g n
- Install latest stable NodeJS version
sudo n stable
- Alternatively pick a specific version
sudo n 0.8.20

### How do I update node components?
sudo npm update npm -g

Useful links
---------
http://realfavicongenerator.net/
http://fa2png.io/
http://html2jade.org/

License
-------

The MIT License (MIT)

Copyright (c) 2015-2017 Stuart Johnstone

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
