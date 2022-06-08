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

class DrummerRouter {
  constructor (controller) {
    this.controller = controller;
  }

  router(){
    router.get('/:id', this.controller.getOneDrummer.bind(this.controller));
    router.get('/', this.controller.getAllDrummers.bind(this.controller));
    return router;
  }
}

module.exports = DrummerRouter;