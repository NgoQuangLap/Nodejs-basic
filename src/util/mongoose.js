// xu ly loi bao mat version cua mongoose
module.exports = {
    multipleMongooseToObject: (mongooses) => {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose
    }
}