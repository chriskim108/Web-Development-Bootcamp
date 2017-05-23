# Databases

## Intro to Databases
* What is a database?
    * A collection of information/data  
    * Has an interface
* SQL(Relational Databases) vs NoSQL(Non-Relational Databases)
    * 
* We should install MongoDB
    * "sudo apt-get install -y mongodb-org"


#Intro to MongoDB
* What is MongoDB?
    * MongoDB is a NoSQL database
* Why are we using it?
    * Because it is usually best with Node
    * "MEAN" Stack
        * Mongo Express Angular Node stack
    * It has good tools to use in an express app
* Let's install it

# Our First Mongo Commands (To use open the shell)
* mongod
    * This will start the server
* mongo
    * To open the python shell for us to write our code
* help
    * Give a list of things to help out
* show dbs
    * Show database names
    * We will make a seperate database for every app we make
* use
    * Stating which database we are going to use
    * This could also make new databases
* insert (Create)
    * Example:
        * db.dogs.insert({name: "Rusty", breed: "Mutt"});
    * This will allow us to insert within our database
* find (Read)
    * Example:
        * db.dogs.find()
            * To find all dogs
        * db.dogs.find({name: "Rusty"})
            * This will locate the dogs that has the name of rusty 
    * This will help us find our data
* update (Update)
    * Example:
        * db.dogs.update({name: "Lulu"}, {breed: "Labradoodle"});
            * This will find the name "Lulu" and update the breed to the Labradoodle
            * This will delete the name "Lulu"
        * db.dogs.update({name: "Rusty"}, {$set:{name: "Tater", isCute: true}});
            * This will update the values 
    * This will update the value
* remove (Destroy)
    * Example:
        * db.dogs.remove({breed: "Labradoodle"});
            * This will remove one dogs with the breed of Labradoodle
        * This will remove everything that has been provided
* show dbs
    * Will show the databases     
* show collections
    * Allowing us to view in our collections

* CRUD
    * Create Read Update Destroy