const express = require("express")
const Form = require("../Model/model")
// require("./db/conect")
const router = new express.Router();




// *** using Async-Await ***

router.post('/form', async (req, res) => {
    try {
        const { email, password, passwordcheck, displayname } = req.body;
        if (!email || !password || !passwordcheck) {
            return res.status(400).json({ msg: "Not all field entered" });
        }
        if (password !== passwordcheck) {
            return res.status(400).json({ msg: "Password not same" });
        }
        const user = new Form(req.body);
        const databaseuser = await user.save();
        res.status(200).send(databaseuser);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.get("/form", async (req, res) => {
    try {
        const databaseresult = await Form.find();
        res.status(200).send(databaseresult)
    } catch (err) {
        res.status(400).send(err);
    }
})
router.get("/form/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const databaseIdresult = await Form.findById(_id);
        if (!databaseIdresult) {
            res.status(404).send("404 Id not found")
        }
        else {
            res.status(200).send(databaseIdresult)
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

router.patch("/form/:id", async (req, res) => {
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
router.delete("/form/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const databasedeleteIdresult = await Form.findByIdAndDelete(_id);
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

module.exports = router;