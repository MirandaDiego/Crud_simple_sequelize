
const { where, json, Op } = require('sequelize');
const UserRepository = require('../models/users.js')




async function findAll(req, res){
 
    const users = await UserRepository.findAll();
    res.json(users)
};

async function create(req, res){
    const {cpf, name, phone, email} = req.body;

    const users = await UserRepository.create({cpf:cpf, name:name, phone:phone, email:email});
    console.log(cpf, name, phone, email)
    res.json(users)
}

async function del(req, res){
    const {id} = req.params;

    const users = await UserRepository.destroy({where:{id}});

    res.json(users)
}

async function update(req, res){
    const {id} = req.params
    let { phone, email } = req.body

    const pesquisa = await UserRepository.findOne({where:{id}})

    phone = phone?phone:pesquisa.phone
    email = email??pesquisa.email

    const users = await UserRepository.update({ phone:phone, email:email}, {
        where:{id}

    })
   
    res.json(users)
}

async function find(req, res){
    const { name } = req.params

    const users = await  UserRepository.findAll({where: {name:{[Op.like]: `%${name}%`}}})

    res.json(users)
}

module.exports = {findAll, create, del, update, find};

