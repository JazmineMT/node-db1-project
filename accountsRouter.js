const express = require("express");

const router = express.Router();

const db = require("./data/dbConfig");

router.get('/', (req,res)=> {
    db('accounts')
    .then( accounts => {
        res.json(accounts)
    })
    .catch( err => {
        res.status(500).json({ message: 'Failed to get accoutns'})
    })

})

router.get('/:id', (req, res)=> {
    const {id} = req.params

    db('accounts').where({id})
    .then( account => {
        if(account.length){
            res.json(account)
        } else {
            res.status(404).json({ message: 'Could not find user with that ID'})
        }
    })
    .catch( err => {
        res.status(500).json({ message: 'Failed to get account'})
    })
})

router.post('/', (req, res)=> {
    db('accounts').insert(req.body)
    .then( newAccount => {
        res.json(newAccount)
    })
    .catch( err => {
        res.status(500).json({ message: 'Failed to create your account'})
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    db('accounts').update(req.body).where({id})
    .then( up => {
        if(up){
            res.json(up)
        } else {
            res.status(404).json({ message: 'Could not find user with that ID'})
        }
    })
    .catch( err => {
        res.status(500).json({ message: 'Failed to update your account'})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params

    db('accounts').where({id}).del()
    .then( rm => {
        if(rm){
            res.json(rm)
        } else {
            res.status(404).json({ message: 'Could not find user with that ID'})   
        }
    })
    .catch( err => {
        res.status(500).json({ message: 'Failed to delete your account'})  
    })
})




















module.exports = router;