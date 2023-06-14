const express = require("express");
const router = express.Router();
const db = require("../database/connection");
const signup = require("../services/signup");
const login = require("../services/login");
const {updateUserInfo, getUserInfo} = require("../services/userInfo");
const { updateEmploye, getEmploye } = require("../services/employe");
const { updateClient, getClient } = require("../services/client");
const { updateProject, getProject } = require("../services/project");
const { updateEmployeProject, getEmployeProject } = require("../services/employe-project");
router.post('/signup', async(req,res)=>{
    try {
        var signupRes = await signup(req, db);
        res.json(signupRes);
    } catch(err){
        res.status(500).json(err)
    }
})
router.post('/login', async(req,res)=>{
    try {
        var loginRes = await login(req, db);
        res.json(loginRes);
    } catch(err){
        res.status(500).json(err);
    }
})

router.post('/userInfo', async(req,res)=>{
    try {
        var updateUserInfoRes = await updateUserInfo(req, db);
        res.json(updateUserInfoRes);
    } catch(err){
        res.status(500).json(err);
    }
})

router.get('/userInfo', async(req,res)=>{
    try {
        var getUserInfoRes = await getUserInfo(req, db);
        res.json(getUserInfoRes);
    } catch(err){
        res.status(500).json(err);
    }
})

router.post('/employee', async(req,res)=>{
    try {
        var response = await updateEmploye(req, db);
        res.json(response);
    } catch(err){
        res.status(500).json(err);
    }
})
router.get('/employee', async(req,res)=>{
    try {
        var response = await getEmploye(req, db);
        res.json(response);
    } catch(err){
        res.status(500).json(err);
    }
})

router.post('/client', async(req,res)=>{
    try {
        var response = await updateClient(req, db);
        res.json(response);
    } catch(err){
        res.status(500).json(err);
    }
})
router.get('/client', async(req,res)=>{
    try {
        var response = await getClient(req, db);
        res.json(response);
    } catch(err){
        res.status(500).json(err);
    }
})

router.post('/project', async(req,res)=>{
    try {
        var response = await updateProject(req, db);
        res.json(response);
    } catch(err){
        res.status(500).json(err);
    }
})
router.get('/project', async(req,res)=>{
    try {
        var response = await getProject(req, db);
        res.json(response);
    } catch(err){
        res.status(500).json(err);
    }
})

router.post('/employ-project', async(req,res)=>{
    try {
        var response = await updateEmployeProject(req, db);
        res.json(response);
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})
router.get('/employ-project', async(req,res)=>{
    try {
        var response = await getEmployeProject(req, db);
        res.json(response);
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;