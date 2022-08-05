const Users = require("../models/user");

const newUser = async(user) => {
    try {
        const createduser = await Users.create(user);
        if(!createduser) return {error: {message: "Not created, try again", code: 500}};
        return {createduser};
    } catch (error) {
        console.log(error);
        return {error: {message: error , code: 500}};
    }
};

const getUsers = async() => {
    try {
        const user = await Users.findAll();
        if(!user) return {error: {message: "No user find, try again", code: 500}};
        return {user};
    } catch (error) {
        console.log(error);
        return {error: {message: "Something went wrong to find , try again", code: 500}};
    }
};

const getuserById = async(id) => {
    try {
        const user = await Users.findAll({where:{id}});
        if(!user) return {error: {message: "no user found against this id, try again", code: 500}};
        return {user};
    } catch (error) {
        console.log(error);
        return {error: {message: "Something went wrong to find user against id, try again", code: 500}};
    }
};

const updateuser = async(user, id) => {
    try {
        const updateduser = await Users.update( user , {where: { id}});
        if(!updateduser) return {error: {message: "Not updated, try again", code: 500}};
        console.log(updateduser);
        return {updateduser};
    } catch (error) {
        console.log(error);
        return {error: {message: "Something went wrong in update user, try again", code: 500}};
    }
};

const deleteuser = async( id) => {
    try {
        const updateduser = await Users.destroy({where:{id}});
        if(updateduser !== 1) return {error: {message: "Not deleted, try again", code: 500}};
        console.log(updateduser,"hll");
        return {updateduser};
    } catch (error) {
        console.log(error);
        return {error: {message: "Something went wrong to delete , try again", code: 500}};
    }
};

module.exports = {
    newUser,
    getUsers,
    getuserById,
    updateuser,
    deleteuser
}