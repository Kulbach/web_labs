const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewsSchema = new Schema({
	message: {
		type: String,
		required: [true, 'Name field is required']
	},
	when: {
		type: String,
		required: [true, 'Name field is required']
	}
});

const Reviews = mongoose.model('reviews', ReviewsSchema);

module.exports = Reviews;