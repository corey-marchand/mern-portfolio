const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongooseSchema = require('./mongoose.schema');
const PORT = 3000;
const formRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());

app.use('/form', formRoutes);

formRoutes.route('/').get(function(req, res) {
    mongooseSchema.find(err, form) {
        if(err) {
            console.log(err);
        } else {
            res.json(form)
        }
    }
})

formRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    console.log(id);
})
mongoose.connect('mongodb://127.0.0.1:27017/form', {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
})