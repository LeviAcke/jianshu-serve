const mongoose = require('mongoose')


module.exports = () => {
    mongoose.connect('mongodb://jianshu:123456@43.132.171.222:27017/jianshu', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('success');
        })
        .catch((err) => {
            console.log(err);
        })
}