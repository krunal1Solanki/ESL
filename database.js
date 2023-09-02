const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
let connection
// const mongoURL = `mongodb://localhost:27017/localDB`;
// const mongoURL =`mongodb+srv://${config.dbConnection.user}:${config.dbConnection.password}@${config.dbConnection.url}/?retryWrites=true&w=majority`
const mongoURL = `mongodb+srv://Sumit:Sumit%402004@mycluster.paejrmj.mongodb.net/ecom`;
//console.log(mongoURL) 
connection = mongoose.createConnection(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true }) // database name
connection.on('error', (err) => {
    console.log('err', err)
    //permittedCrossDomainPolicies.log(err)
})
//console.log('connection', connection)
module.exports = connection