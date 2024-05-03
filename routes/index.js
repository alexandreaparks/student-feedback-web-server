// routing is used to figure out what code will run for what request

const express = require('express')  // import express library
const router = express.Router()  // this router object does the routing - based on URL and method

// GET request to home page /
// parameters - request, response, next
// if function can't handle a request, next is used to pass the request elsewhere
router.get('/', function (req, res, next) {

    // render - combine template with data
    // arguments - name of Handlebars file (name of a template) and optional object with data for template
    res.render('index', {
        title: 'Feedback Application',
        author: 'Alexandrea',
        timePageLoadedAt: new Date()
    })
})


// GET request to student feedback form page
router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})

// POST request used when the feedback form is submitted
// redirects to thank you page when the form is submitted
router.post('/submit-feedback', function (req, res, next) {
    // access form data
    // const formData = req.query  // for a GET request - read the URL query
    const formData = req.body  // POST request - data is in the body
    console.log(formData)

    // next, could save to a database
    // or automatically email someone when feedback is submitted
    // etc...

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']  // have to use square bracket notation - current-student not valid
         })
})



module.exports = router  // return router object to wherever it's required

