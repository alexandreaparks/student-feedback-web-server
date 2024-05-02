// routing is used to figure out what code will run for what request

const express = require('express')  // import express library
const router = express.Router()  // this router object does the routing - based on URL and method

// get request to home page /
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


// get request to student feedback form page
router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})

// get request to thank you page when the form is submitted
router.get('/submit-feedback', function (req, res, next) {
    // access form data
    const formData = req.query
    console.log(formData)

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']
         })
})



module.exports = router  // return router object to wherever it's required

