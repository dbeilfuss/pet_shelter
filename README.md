![Project Logo](http://www.beacontech.pro/Images/Pet_Shelter_Logo.png)
# Keenesburg Animal Shelter

This is a very simple database management system and website.

It is designed for an admin user to manage a list of pets, and for standard users to be able to browse, favorite, and ultimately reserve a pet of their choice.

## Cloning Instructions
You will need to do the following:
* Run NPM Install
* Create .env in the root directory

## NPM Install
The following packages are used:
*   "axios": "^1.6.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "pg": "^8.11.3",
    "rollbar": "^2.26.2",
    "sequelize": "^6.35.1"

## .env
This project was created using Supabase for the database and Roolbar for error reporting.
Here is template copy of my .env, you will need to create your own at the root directory:
SUPABASE_URI = postgresql://xxx
SUPABASE_KEY = xxx-xxx-xxx
ROLLBAR_ACCESS_TOKEN = xxxxx
