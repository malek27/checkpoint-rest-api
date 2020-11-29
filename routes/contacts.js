const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const controllers = require("../controllers/contact.controllers");

//Routing Methods


//Method POST
//post a contact
//Path :http://localhost:5000/api/contact
//Params Body
router.post("/", controllers.postContact);


//Method GET
//get all contact
//Path :http://localhost:5000/api/contact
router.get("/", controllers.getAllContacts);


//Method GET
//get a contact by id
//Path :http://localhost:5000/api/contact/:id
//params id
router.get("/:id", controllers.getContactById);


//Method DELETE
//delete a contact by id
//Path :http://localhost:5000/api/contact/:id
//params id
router.delete("/:id", controllers.deleteContact);


//Method PUT
//update a contact by id
//Path :http://localhost:5000/api/contact/:id
//params id and body
router.put("/:id", controllers.updateContact);

module.exports = router;
