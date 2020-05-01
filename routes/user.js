'use strict';
const express = require('express');
const router = new express.Router();
const control = require('../controller/user');

router.get('/:publicAddress', async (req,res) => {
    try {
        console.log(req.params.publicAddress);
        const check = await control.findPublicAddress(req.params.publicAddress).catch(error => {
            throw new Error(error);
        });
        res.send({response: {result:check,description:'sucess',staus:200}});
    } catch (error) {
        res.send({response: {result:error.toString(),description:'faliure',staus:'500'}});
    }
});


router.post('/signature', async (req,res) => {
    try {
        const info = await control.checkSignature(req.body).catch(error => {
            throw new Error(error);
        });
        res.send({response: {result:info,description:'sucess',staus:200}});
    } catch (error) {
        res.send({response: {result:error.toString(),description:'faliure',staus:500}});
    }
});


module.exports = router;