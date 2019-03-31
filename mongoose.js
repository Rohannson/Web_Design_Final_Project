var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/profile';




const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(DB_URL, option).then(function(){
    //connected successfully
}, function(err) {
    //err handle
});




/**
 * 连接
 */
// mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;
