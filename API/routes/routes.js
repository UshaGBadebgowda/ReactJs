const controller = require('./../controllers/controller.js');

module.exports = function(api){
api.route('/getemployees').get(controller.getemployees);
api.route('/').get(controller.getdefault);
api.route('/addnewemployee').post(controller.addnewemployee);
api.route('/addnewweight').put(controller.addnewweight);

}