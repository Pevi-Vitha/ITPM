const router = require("express").Router();
const { response, request } = require("express");
let Admin = require("../models/admin");
const Backup = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');

// Fetch Backups
router.route("/backups").get((req, res) => {
  Backup.find()
      .then(backups => {
          res.json(backups);
      })
      .catch(err => {
          res.status(500).json({ message: err.message });
      });
});


//Create User
router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const role = req.body.role;
    const email = req.body.email;
    const userName = req.body.userName;
    const password = req.body.password;

    const newAdmin = new Admin({

        name,
        role,
        email,
        userName,
        password

    })

    newAdmin.save().then(()=>{
        res.json("New User Created")
    }).catch((err)=>{
        console.log(err)
    })

})

//View Users
router.route("/").get((req,res)=>{

    Admin.find().then((admins)=>{
        res.json(admins)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res) =>{
    let userId = req.params.id;
    const {name, role, email,userName, password} = req.body;

    const updateAdmin = {
        name,
        role,
        email,
        userName,
        password
    }

    const update = await Admin.findByIdAndUpdate(userId, updateAdmin)
    .then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})

//Delete User by ID
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Admin.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error:err.message})
    })
})

//View user by ID
router.route("/get/:id").get(async(req, res) =>{
    let userId = req.params.id;
    const user = await Admin.findById(userId)
    .then((admin)=>{
        res.status(200).send({status: "user fetched", admin})
    }).catch(()=>{ 
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message})
    })
})

//Search 

router.get('/search/:searchInput', async (req, res) => {
    try {
      const { searchInput } = req.params;
      const users = await Admin.find({
        $or: [
          { name: { $regex: searchInput, $options: 'i' } },
          { role: { $regex: searchInput, $options: 'i' } },
          { email: { $regex: searchInput, $options: 'i' } },
          { userName: { $regex: searchInput, $options: 'i' } },
        ],
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }); 

  //login

router.use(bodyParser.json());

router.post('/login', async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await Admin.findOne({ userName: userName });
    if (user && user.password === password) {
      res.send('Exist');
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;