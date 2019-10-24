const express = require('express');
const router = express.Router();
const User = require('../models/User');


///////////get user by id
router.get('/:id', (req, res) => {
    User.findById(req.params.id).then(user => {
        res.status(200).json({
            message:'User fetched',
            user: user
        })
    }).catch(err => console.log(err))

})

////////////get all users
router.get('/', (req, res) => {
        User.find().then(users => {
            res.status(200).json({
              message: 'Users fetched',
              users: users
            });
          });

})

///////////create new user
router.post('/', (req, res) => {
    const newUser = new User({
        Name: req.body.Name,
        Surname: req.body.Surname,
        City: req.body.City,
        Address: req.body.Address,
        Phone: req.body.Phone,
        CreatedDate: req.body.Date
    });
    newUser.save()
    .then(data => {
        res.json(data)
       
    })
    .catch(err => console.log(err))
})

//////////update user
router.post('/:id', (req,res) => {
    const newUser = new User({
        _id:req.params.id,
        Name: req.body.Name,
        Surname: req.body.Surname,
        City: req.body.City,
        Address: req.body.Address,
        Phone: req.body.Phone,
        CreatedDate: req.body.Date
    });
    User.updateOne({_id:req.params.id}, newUser)
    .then(result => res.status(200).json({ message: 'Updated user'}))
    .catch(err => console.log(err))
})

/////////delete user
router.delete('/:id', (req,res) => {
    User.deleteOne({_id:req.params.id})
    .then(result => res.status(200).json({message: 'Deleted user'}))
    .catch(err => console.log(err))
})

module.exports = router;