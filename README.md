#This program recreates the game scattergories using prism, express api, and ngrok.
##Repo created by: MST 
##Collaborators: LIGIA & STACEYANN
##AI disclosure: We used Chatgpt to help debug and understand new code that we researched for this project.
HOW TO RUN
install yarn using yarn install 
and start the server using node index.js
Use Insomnia using the site http://localhost:3000
In insomnia you use the GET and POST 
GET /games to list all roomcodes 
POST /games to create a roomcode and get a letter and category
POST /answers and post an existing roomcode, a username, and a word that matches the category (at the moment we only have the answers first letter to match the letter given)
