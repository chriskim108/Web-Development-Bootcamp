
# Rendering HTML and Templates

* Use res.render() to render HTML(from an EJS file)
    * This will live on the "respond" object
    * Syntax
        * res.render(<fileName>)
* Explain what EJS is and why we use it
    * EJS = Emboded JavaScript
    * When making an "EJS" file we typically make it a new directory called "views"
    * We would have to install ejs 
        * npm install ejs --save
    * This will allow us to have "dynamic" templates 
* Pass variables to EJS templates
    * <%= ... %>
        * In the EJS file anything between the 2 brackets will be
        * treated as javascript 



