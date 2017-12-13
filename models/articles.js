const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticlesSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Name field is required']
	},
	descr: {
		type: String,
		required: [true, 'Name field is required']
	},
	image: {
		type: String,
		required: [true, 'Name field is required']
	}
});

const Articles = mongoose.model('articles', ArticlesSchema);

module.exports =Articles;