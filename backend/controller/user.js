const user = require("../model/userModel")
exports.addNewUSer = async (req, res) => {
    try {
        const result = await user.create(req.body)
        res.json({
            success: true,
            message: "User Created Successfully",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Unable to create user ${error}`
        })
    }
}
exports.getAllUsers = async (req, res) => {
    try {
        const result = await user.find()
        res.json({
            success: true,
            message: "All  User Data Fatched Successfully",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Unable to get all users ${error}`
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const result = await user.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({
            success: true,
            message: "User Updated Successfully",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Unable to update user ${error}`
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const result = await user.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: "User Deleted Successfully",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Unable to delete user ${error}`
        })
    }
}
exports.getSearchData = async (req, res) => {
    try {
        // console.log(req.body);
        const { search } = req.body
        const result = await user.find({ $or: [{ city: search }, { state: search }, { email: search }] })
        res.json({
            success: true,
            message: "Search successfully...!!!",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Unable to delete user ${error}`
        })
    }
}