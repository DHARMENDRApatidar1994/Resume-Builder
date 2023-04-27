var express = require('express');
var router = express.Router();
const User = require("../models/userSchema")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'resume' });
});

/* GET createresume page. */
router.get('/createresume', function(req, res, next) {
  res.render('createresume');
});

router.get('/resume',async function(req, res, next) {
  const data = await User.find({})
  res.render('resume',{ title: "Resume", data });
});

router.get('/detail/:id',async function(req, res, next) {
  const data = await User.findById(req.params.id)
  res.render('detail',{ title: "detail", data});
});

router.post('/createresume', async function(req, res, next) {
  // res.json(req.body);
  await User.create({
    name:req.body.name,
    email:req.body.email,
    contact:req.body.contact,
    profile:req.body.profile,
    skill:req.body.skill,
    education:req.body.education,
    experience: req.body.experience,
    hobbies: req.body.hobbies,
    language: req.body.language,
    birth: req.body.birth,
    

  })
  res.redirect("/resume")
});

/* GET delete account page. */
router.get("/delete/:id", async function(req, res, next) {
  const data = await User.findByIdAndDelete(req.params.id, req.body)
  res.redirect("/resume");
});

/* GET update page. */
router.get('/update/:id',async function(req, res, next) {
 await  User.findById(req.params.id)
  res.render('update', {id:req.params.id});
});

// post update/:id page
router.post("/createupdate/:id",async function(req, res, next){
  //  await User.findByIdAndUpdate (req.params.id, req.body);   
  console.log(req.body)
  const data = await User.findByIdAndUpdate(req.params.id ,{name:req.body.name,education:req.body.education});
  await data.save()
  res.redirect(`/detail/${data._id}`);
  // }catch(error){
  //   res.send(err);
  // } 
//  res.redirect("/resume");
    
  });




module.exports = router;
