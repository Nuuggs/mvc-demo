class DrummerController {
  constructor (model){
    this.model = model;
  }

  async getAllDrummers (req, res) {
    console.log("GET Request: /drummers");
    try {
      const allDrummers = await this.model.findAll();
      res.render('main', {allDrummers})
    } catch (error) {console.log(error)}
  }

  async getOneDrummer (req, res) {
    console.log('GET Request: /drummer/:id');
    const drummerId = req.params.id;

    try {
      const singleDrummer = await this.model.findOne({
        where: { id: drummerId },
      });
      console.log(singleDrummer)
      res.render('drummer', {singleDrummer});
    } catch (error) { console.log(error) }
  }
}

module.exports = DrummerController