const express = require("express");

const router = express.Router();

const db = require("./data/dbConfig");

router.get('/', (req,res)=> {
    db('accounts')
    .then( accounts => {
        res.status(200).json(accounts)
    })
    .catch( err => {
        res.status(500).json({ error : err.message})
    })

})

router.get('/:id', (req, res)=> {
    const {id} = req.params

    db('accounts').where({id})
    .then( account => {
        if(account.length){
            res.status(200).json(account)
        } else {
            res.status(404).json({ message: 'Could not find user with that ID'})
        }
    })
    .catch( err => {
        res.status(500).json({ error : err.message})
    })
})

router.post('/', (req, res)=> {
    db('accounts').insert(req.body)
    .then( newAccount => {
        res.status(200).json({ inserted: newAccount})
    })
    .catch( err => {
        res.status(500).json({ error : err.message})
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    db('accounts').update(req.body).where({id})
    .then( up => {
        if(up){
            res.status(200).json({updated : up})
        } else {
            res.status(404).json({ message: 'Could not find user with that ID'})
        }
    })
    .catch( err => {
        res.status(500).json({ error : err.message})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params

    db('accounts').where({id}).del()
    .then( rm => {
        if(rm){
            res.status(200).json({deleted : `Account with the id of ${id}`})
        } else {
            res.status(404).json({ message: 'Could not find user with that ID'})   
        }
    })
    .catch( err => {
        res.status(500).json({ error : err.message}) 
    })
})




















module.exports = router;