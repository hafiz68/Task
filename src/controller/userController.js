const userServices = require("../services/userSevices");

const createUser = async (req, res) => {
  const { firstName, lastName, gender, country, age, date } = req.body;
  try {
    let data = {
      firstName,
      lastName,
      gender,
      country,
      age,
      date,
    };
    const user = await userServices.newUser(data);
    if (user.error)
      return res.status(401).send(user.error);
      res.status(200).send({ user, message: "User created sucessfuly" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong. Please try again");
  }
};

const allUsers = async (req, res) => {
  try {
    const user = await userServices.getUsers();
    if (user.error)
      return res.status(401).send(user.error);
      res.status(200).send(user.user );
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong. Please try again");
  }
};

const deleteUsers = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await userServices.deleteuser(id);
    if (user.error)
      return res.status(401).send(user.error);
      res.status(200).send("delete successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong. Please try again");
  }
};

const updateUser = async (req, res) => {
  try {
    const {id} = req.params;
    const { firstName, lastName, gender, country, age, date } = req.body;
    let data = {
      firstName,
      lastName,
      gender,
      country,
      age,
      date,
    };

    const user = await userServices.updateuser(data,id);
    if (user.error)
      return res.status(401).send(user.error);
    const updatedUser = await userServices.getuserById(id);
    if (updatedUser.error)
      return res.status(401).send(updatedUser.error);
      res.status(200).send(updatedUser.user[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong. Please try again");
  }
};

module.exports = {
  createUser,
  allUsers,
  deleteUsers,updateUser
};
