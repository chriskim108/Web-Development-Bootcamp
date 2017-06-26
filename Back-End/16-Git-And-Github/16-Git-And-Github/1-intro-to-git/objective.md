#Git

##Intro
* What is Git?
    * Technology 
* What is Github?
    * A website that works with Git
* Why should you care? 
    * Very useful
* Novel Writing Analogy

##Git Basics
* Git init
    * Initialize git
        * "git init"
    * A .git file will appear and it will be used to have all the important data
        * ls -a 
            * Will show all the files and hidden files
* Git status
    * Ask git what is the current status is
        * Anything added, ready to be committed?
    * Untracked Files
* Git add
    * Select the checkpoint
    * Make the files trackable 
    * Example:
        * "git add app.js"
        * "git add ."
            * This will git add all the files that are either modified or new
* Git commit
    * A checkpoint in time
    * "git commit -m "add app file" "

##Git Checkout
* Git log
    * This will give all the history or logs we have made in the repo
    * Looking at the "commit" and copy the id value
* Git Checkout
    * Going to check out something else or branch
    * "git checkout (id Value)"
    * "HEAD"
        * This is a pointer 
    * Example:
        Head    
        0 -> 0 -> 0 -> 0
                       Master  
    * How to go back to git master
        * "git checkout master"
    * git revert --no-commit 0766c053..HEAD
        * 


##Cloning and Github Intro
* What is Github?


