const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3030

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', "ejs")
app.use(express.static('public'))

const User = require('./models/user')

mongoose.connect('mongodb://127.0.0.1:27017/supero-exam', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/', async (req, res) => {
    console.log(req.body)
    // const tempUser = new User()

    // tempUser.name = req.body.name
    // tempUser.email = req.body.email

    // for (var key in req.body) {
    //     if (key === "name" || key === "email")
    //         continue;

    //     if (key[0] === 'm') {
    //         var arr = [];
    //         if (typeof (req.body[key]) === "string") {
    //             arr.push(req.body[key])
    //         }
    //         else {
    //             for (var i = 0; i < req.body[key].length; i++) {
    //                 arr.push(req.body[key][i])
    //             }
    //         }

    //         const temp = {
    //             number: key.substring(2),
    //             answer: arr
    //         }
    //         tempUser.multipleCorrect.push(temp)
    //     }
    //     else if (key[0] === 'p') {
    //         var arr = [];
    //         arr.push(req.body[key]);
    //         const temp = {
    //             number: key.substring(2),
    //             answer: arr
    //         }
    //         tempUser.paragraph.push(temp)
    //     }
    //     else {
    //         var value = req.body[key];
    //         const temp = {
    //             number: key,
    //             answer: value
    //         }
    //         tempUser.singleCorrect.push(temp)
    //     }
    // }
    // await tempUser.save();
    // res.redirect('/')
    res.send("Exam Time is over!")
})


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
