const express = require('express');
const db = require('./models/index'); // import from db -> models

const app = express();
const PORT = 3004;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); // req.body from html forms
app.use(express.json()); // get data from req.body NOT from html forms

// import routers + controllers
const DrummerRouter = require('./routers/drummerRouter');
const ReservationRouter = require('./routers/reservationRouter');
const DrummerController = require('./controllers/drummerController');
const ReservationController = require('./controllers/reservationController');

// Init Controllers
const drummerController = new DrummerController(db.drummer);
const reservationController = new ReservationController(db.reservation, db);

// init routers
const drummerRouter = new DrummerRouter(drummerController).router();
const reservationRouter = new ReservationRouter(reservationController).router();

app.get('/', (req, res) => res.redirect('/drummers'));
app.use('/drummers', drummerRouter);
app.use('/reservations', reservationRouter);

app.listen(PORT, () => console.log(`App running on PORT: ${PORT}`))