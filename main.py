import os #interact with the operating system. The os module lets you perform tasks like managing files, directories, and environment variables

import eel

eel.init("www") #Initializes Eel and sets the "www" folder as the location for your front-end files.When you run your Python script, Eel will serve files from this folder in a browser or a desktop app window.
os.system('start chrome --app="http://localhost:8000/index.html"') #start the webpage in chrome in app mode
eel.start('index.html', mode=None, host='localhost',block=True) #launches index.html in the default browser using Eel, runs a local server on localhost, and blocks further Python execution until the browser window is closed. 
