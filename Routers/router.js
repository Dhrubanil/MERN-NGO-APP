const express = require("express")
require("dotenv").config();
const Form = require("../Model/model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../middeware/auth")
// require("./db/conect")
const router = new express.Router();




// *** using Async-Await ***

router.post('/registration', async (req, res) => {
    try {
        let { email, password, passwordcheck, displayname } = req.body;
        if (!email || !password || !passwordcheck) {
            return res.status(401).json({ msg: "Not all field entered" });
        }
        if (password !== passwordcheck) {
            return res.status(402).json({ msg: "Password not same" });
        }
        const findUser = await Form.findOne({ email: email.toLowerCase() });
        if (findUser) {
            return res.status(403).json({ msg: "User Already Exists" });
        }
        if (!displayname) {
            displayname = email.substr(0, 6).toLowerCase()
        }
        const salt = await bcrypt.genSalt();
        const passwordhash = await bcrypt.hash(password, salt)
        const user = new Form({
            email: email.toLowerCase(),
            password: passwordhash,
            displayname: displayname.substr(0, 6),
        });
        const databaseuser = await user.save();
        res.status(200).send(databaseuser);
    } catch (e) {
        res.status(404).send(e.message);
    }
})
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) {
            return res.status(401).json({ msg: "Enter the email" })
        }
        if (!password) {
            return res.status(401).json({ msg: "Enter the password" })
        }
        const findUser = await Form.findOne({ email: email.toLowerCase() });
        if (!findUser) {
            return res.status(402).json({ msg: "User Not Exists" });
        }
        const passwordmatch = await bcrypt.compare(password, findUser.password);
        if (!passwordmatch) {
            return res.status(403).json({ msg: "password Invalid" });
        }
        console.log(process.env)
        const token = jwt.sign({ id: findUser._id }, process.env.SECRET_KEY);
        res.status(200).json({
            token, user: {
                id: findUser._id,
                // email: findUser.email,
                displayname: findUser.displayname,

            }
        })
    } catch (e) {
        console.log(e);
        res.status(500).send(e.message)
    }
})

router.post("/tokenIsValid", async (req, res) => {
    const token = req.header("x-auth-token");
    if (!token) {
        return res.json(false);
    }
    const authtoken = jwt.verify(token, process.env.SECRET_KEY)
    if (!authtoken) {
        return res.json(false);
    }
    const verifiedusr = await Form.findById(authtoken.id);
    if (!verifiedusr) {
        return res.json(false);
    }
    return res.json(true)
})

router.get("/registration", async (req, res) => {
    try {
        const databaseresult = await Form.find();
        res.status(200).send(databaseresult)
    } catch (err) {
        res.status(400).send(err);
    }
})
router.get("/", auth, async (req, res) => {
    try {
        const getuser = await Form.findById(req.user);
        res.json(
            {
                displayname: getuser.displayname,
                id: getuser._id
            }
        )
    } catch (err) {
        res.status(400).send(err);
    }
})

router.patch("/registration/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const databasedeleteIdresult = await Form.findByIdAndUpdate(_id, req.body, { new: true });
        if (!databasedeleteIdresult) {
            res.status(404).send("404 Id not found")
        }
        else {

            res.status(200).send(databasedeleteIdresult)
        }
    } catch (err) {
        res.status(400).send(err);
    }
})
router.delete("/delete", auth, async (req, res) => {

    try {
        const deleteuser = await Form.findByIdAndDelete(req.user);
        res.status(200).send(deleteuser)
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;