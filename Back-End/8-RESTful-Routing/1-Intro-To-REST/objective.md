# RESTful Routing

## Introduction 
* Define REST and Why is matters
    * REST
        * Representational State Transfer
        * A pattern for finding our routes
    * A mapping between HTTP route and CRUD (Create Read Update Destroy)
    * A pattern in defing our routes that we can follow
    * The reason why we use REST is because we dont do whatever we want, we have to follow a pattern
    * This is conventional and reliable

* List all 7 RESTful routes
    * Index 
        * Ex: List all the dogs
    * New
        * Ex: Show new dog
        * Corresponds with Create
    * Create
        * Ex: Create a new dog, then redirect somewhere
        * Corresponds with New
    * Show
        * Ex: Show info about one specific dog
    * Edit
        * Ex: Show edit form for one dog
        * Corresponds with Update and Destroy
    * Update
        * Ex: Update a particular dog, then redirect somewhere
        * We gather the new data from the form and have to find the old data and update it
    * Destroy
        * Ex: Delete a particular dog, then redirect somewhere
        * Single route 

* Show example of RESTful routing in practice (Creating BLOG app)
    * Create  
    * Read    /allBlogs 
    * Update  /updateBlog/:id
    * Destroy /destroyBlog/:id




REST - a mapping between HTTP routes and CRUD 
If something is RESTFUL, it follows a particular pattern




