const express = require('express');
const router = express.Router();

const Blog = require('../models/Blog');

router.route('/')
.get((req,res) => {
  Blog.find({},(err,blogs) => {
    res.status(err? 400:200).send(err||blogs)
    }
  )
})
.post((req,res) => {
  Blog.create(req.body)
  .then(blog => {
    res.send(blog)
  })
  .catch(() => {
    res.status(400).send(err)
  })
})

router.route('/:id')
 .put((req,res) => {
   Blog.findByIdAndUpdate(req.params.id, {$set: req.body})
   .then(() => {
     res.send();
   })
   .catch(() => {
     res.status(400).send(err)
   })
 })
 .delete((req,res) => {
   Blog.findByIdAndRemove(req.params.id)
   .then(() => {
     res.send("removed!");
   })
   .catch(() => {
     res.status(400).send(err)
   })
 })
module.exports = router;
