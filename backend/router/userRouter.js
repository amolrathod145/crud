const express = require("express")
const { addNewUSer, getAllUsers, updateUser, deleteUser, getSearchData } = require("../controller/user")

const router = express.Router()

router.route("/add-user").post(addNewUSer)
router.route("/getall-user").get(getAllUsers)
router.route("/delete-user/:id").delete(deleteUser)
router.route("/update-user/:id").put(updateUser)
router.route("/search-Data").post(getSearchData)


module.exports = router