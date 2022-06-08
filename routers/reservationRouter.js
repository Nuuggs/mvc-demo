const express = require('express');
const router = express.Router();

/*
  drummer routes:
  GET '/' => /drummers
  GET '/drummer/:id => /drummers/:id

  reservations routes:
  GET '/reservations/:drummer_id;
  POST '/reservation/:drummer_id; => /reservations/:drummer_id
*/

class ReservationRouter {
  constructor (controller) {
    this.controller = controller;
  }

  router(){
    router.get('/:drummer_id', this.controller.getReservations.bind(this.controller));
    router.post('/:drummer_id', this.controller.postReservation.bind(this.controller));
    return router;
  }
}

module.exports = ReservationRouter;