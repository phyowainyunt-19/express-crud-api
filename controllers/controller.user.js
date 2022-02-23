import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  // add id to current user from req.body
  const userWithID = { ...user, id: uuidv4() };

  users.push(userWithID);
  res.send(`User ${user.firstName} was added!`);
};

export const getSpecificUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteSpecificUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} was an imposter!`);
};

export const updateSpecificUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const userToBeUpdated = users.find((user) => user.id === id);

  if (firstName) userToBeUpdated.firstName = firstName;
  if (lastName) userToBeUpdated.lastName = lastName;
  if (age) userToBeUpdated.age = age;

  res.send(`User with the id ${id} was updated!`);
};
