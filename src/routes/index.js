const { Router } = require("express");
const checkCreate = require("../middlewares/checkCreate");
const checkUpdate = require("../middlewares/ckeckUpdate");
const checkUser = require("../middlewares/checkUser");

const UsersList = require("../controllers/UsersListController");
const UserList = require("../controllers/UserListController")
const CreateUser = require("../controllers/CreateUserController");
const UpdateUser = require("../controllers/UpdateUserController");
const DeleteUser = require("../controllers/DeleteUserController");
const DeleteUsers = require("../controllers/DeleteUsersController");

const router = Router();

const createUser = new CreateUser();

const updateUser = new UpdateUser();

const usersList = new UsersList();

const userList = new UserList();

const deleteUsers = new DeleteUsers();

const deleteUser = new DeleteUser();

router.get("/api/v1/users", usersList.handle);

router.get("/api/v1/users/:user_id", checkUser, userList.handle);

router.post("/api/v1/users", checkCreate, createUser.handle);

router.put("/api/v1/users/:user_id", checkUser, checkUpdate, updateUser.handle);

router.delete("/api/v1/users", deleteUsers.handle);

router.delete("/api/v1/users/:user_id", checkUser, deleteUser.handle);

module.exports = router;