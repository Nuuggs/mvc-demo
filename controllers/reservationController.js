class DrummerController {
  constructor (model, db){
    this.model = model; // === db.reservation
    this.db = db; // === db => db.reservation && db.drummer
  }

  async getReservations (req, res) {
    console.log('GET Request: /reservations/:drummer_id');

    const specifiedDrummerId = req.params.drummer_id;

    try {
      const singleDrummerReservations = await this.model.findAll({
        where: { drummerId: specifiedDrummerId },
      });
      const singleDrummer = await this.db.drummer.findOne({
        where: { id: specifiedDrummerId },
      });
      const { id, name } = singleDrummer;
      const ejsObj = {
        reservations: singleDrummerReservations,
        drummerId: id,
        drummerName: name,
      }
      res.render('drummer-reservations', ejsObj);
    } catch (error) { console.log(error) }

  }

  async postReservation (req, res) {
    console.log('POST Request: /reservations/:drummerId');
    const specifiedDrummerId = req.params.drummer_id;
    const {reservation_name} = req.body;

    try {
      await this.model.create({
        name: reservation_name,
        drummerId: specifiedDrummerId,
      });

      res.redirect(`/reservations/${specifiedDrummerId}`);
    } catch (error) { console.log(error)}
  }
}

module.exports = DrummerController