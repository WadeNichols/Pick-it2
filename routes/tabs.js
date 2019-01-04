const express = require("express")
const { Router } = express

//tab model
const Tab = require("../models/tabs");

const tabRouter = Router();

tabRouter.route("/")
//to get all tabs
.get((req, res, next) => {
    Tab.find({}, (err, tabs) => {
        if (err) {
            res.status(400);
            next(err);
        } else {
            res.status(200).send(tabs);
        }
    })
})
.post((req, res, next) => {
    const newTab = new Tab(req.body);
    newTab.save((err, savedTab) => {
        if (err) {
            res.status(400);
            next(err);
        } else {
            res.status(201).send(savedTab);
        }
    })
})
tabRouter.route("/:id")
.delete ((req, res) => {
    Tab.findByIdAndDelete(req.params.id, (err, deletedTab) => {
        if (err) {
            res.status(400);
            next(err);
        } else {
            res.status(200).send({_id: deletedTab._id});
        }
    });
})
    module.exports = tabRouter;