const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/Weights',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const weightSchema = new mongoose.Schema({
  empWeight: Number,
  weighedOn: {type: Date, default: Date.now }
});
const empSchema = new mongoose.Schema({
  empName: String,
  empPass: String,
  employeeWeights:[weightSchema],
  createdOn: {type: Date, default: Date.now }
},{
    collection:'Employee'
  }
);
module.exports = mongoose.model('Employee', empSchema);
