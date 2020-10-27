// load libraries, require('express') returns a function
const express = require('express');
const handlebars = require('express-handlebars')

// configure the environment
const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000

// create an instance of express
const app = express()

// configure handlebars
app.engine('hbs', 
    handlebars({ defaultLayout: 'default.hbs'})
)
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views');

// configure the application
app.use(
    express.static(__dirname + '/static')
)

// dice roll clicked
app.get('/rolled', 
    (req, resp) => {
        resp.status(200)
        resp.type('text/html')
        resp.render('rolled')
        
    }
)




// error redirect back to landing page
app.use(
    (req, resp) => {
        resp.status(404)
        resp.type('text/html')
        resp.sendFile(__dirname + '/index.html')
       
    }
)














// start the server
app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`)
})

