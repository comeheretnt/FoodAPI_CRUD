const express = require('express');
const app = express();
const connectDB = require('./configs/database');								
const bodyParser = require('body-parser');		
const router = require('./routes/index'); // Import the routes
const { getFoods } = require('./controllers/food.controller'); // Import the getFoods controller

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');								

app.use(express.static('public')); // Serve static files (CSS, JS)

router(app);
connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});