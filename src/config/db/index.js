const mongoose = require('mongoose');

const connect = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_dev');
        console.log('thanh cong!!!')
    } catch (error) {
        console.log(error, 'Failed')
    }
}

module.exports = { connect }