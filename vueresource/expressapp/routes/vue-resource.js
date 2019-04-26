var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/vue-resource', function (req, res, next) {
    res.render('vueresource', {title: 'Express', layout: null});
});
/* Axios home page. */
router.get('/vue-axios', function (req, res, next) {
    res.render('axios', {title: 'Express', layout: null});
});

// get请求,传参
router.get('/getLogin/:email/:password', function (req, res, next) {
    let email = req.params.email;
    let password = req.params.password;

    res.json({
        status: "200",
        data: {
            email: email,
            password: password
        }
    });
});

// get请求,传参
router.get('/queryLogin', function (req, res, next) {
    let email = req.query.email;
    let password = req.query.password;
    console.log(email+"--"+password);
    res.json({
        status: "200",
        data: {
            email: email,
            password: password
        }
    });
});


// post请求,传参  post请求多用query
router.post('/postLogin', function (req, res, next) {
    // post请求是从body体中获取数据,所以要修改为req.body.[params]
    let email = req.body.email;
    let password = req.body.password;
    console.log(email+"--"+password);
    res.json({
        status: "200",
        data: {
            email: email,
            password: password
        }
    });
});


module.exports = router;
