## Project Overview

  -  For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

## Steps to bulid the Project

1.  clone the project
2.  how  to run the project
3.  to add map to the project
4.  responsive web designing
5.  Web Accessibility
6.  To Add Service Worker

#clone the project

   - Starter code clone /Download  project from git repository(https://github.com/udacity/mws-restaurant-stage-1)
  - Extract the Zip file

##how to run the project

  - We can run it on both Windows & Linux Operating Systems

### With Help of Python Server

#### Step1: Windows Operating System

  -  We have to Install Python
  -  Download the latest version of Python to click on link [Python](https://www.python.org/downloads/)
  -  after download the python we will do install python we are using windows operating system
  -  go to python commad prompt  if you have time to check the version of the python
  -  command is python -V and processed to command line interface to run the local server we have to  - establish the local server using the command
  -   python -m http.server
  -   run the project by establishing the server connection with localhost:8000
  -   go to any browser type on localhost:8000, Google Chrome is the best browser to run the project
  -  ** anthor way to run Project on Windows
  - We have to  add Google Web Server addon to Google Chrome Browser Extension.go to this link to get a addon [Web-Server-Link](https://github.com/kzahel/web-server-chrome).
  - go to web Applications or extensions lanuch the Google Web Server 200 ok
  -  Select the root folder and open index.html file, we have to change few things in restaurant Reviews project go to Js folder open the dbhelper.js file.In that folder,change port module in DBHelper change.put it in comment the line const port = 8000 and uncomment the next line shown below.

           <!-- static get DATABASE_URL() { -->
             <!-- const port = 8000 // Change this to your server port -->
             <!-- return `http://localhost:${port}/data/restaurants.json`; -->
           <!-- } -->

  -  Now,Refresh the page in google chrome that you previously opened.we will
   get all data in the webpage.

#### Step2:Linux operating system

  -  Install the python if you don't have installed already
  -  For Installing python on linux platform run this command:
  -  sudo apt-get-install python (Latest Version)

  -  To check the python version run this command
              python -v
  -  Open the terminal on root folder, run this command
  -      python -m SimpleHTTPServer 8000

  - run the project by establishing the server connection with localhost:8000
  - go to any browser type on localhost:8000, Google Chrome is the best browser to run the project

# To add map to the project using mapbox

## Leaflet.js and Mapbox:

- This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

# Responsive Web Designing:

-   Responsive Web design is a aproach  to create  the web pages responsively  depending on the devices like Mobile, Desktop,Tab devices and Ipad etc,.
  - we have to set the viewport in head section of the html file, either  using media queriesor or  Bootstrap Framework
  -  by using flexbox module , i fullfilled the requirements of  Mobile View, Tab View and Desktop View in  styles.css file

# Web Accessibility:

  -   The unread persons can access easily the web page when we used web accessibility like alt tag from images
  -   and also added aria role.

# Added Service Worker:

## Service Worker for offline functionality
  - register the service worker
  - add the links to both index.html and restaurant.html
  - created the cache  to store data when online
  - fetch data from cache when the page is in offline
  - created service.js file file and swreg.js file
  - swreg.js file register the service worker in index.html file and restaurant.html file
  - service.js file contains install service worker , activate server worker  and fetch event.


