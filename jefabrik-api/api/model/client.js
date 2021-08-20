const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Client name is required'],
		},
		email: {
			type: String,
			required: [true, 'Client email is required'],
		},
		phoneNumber: {
			type: String,
			required: [true, 'Client phone number is required'],
		},
		password: {
			type: String,
			required: [true, 'Client password is required'],
		},
		profile_img: {
			type: String,
			required: [true, 'Client profile image is required'],
		},
		// configurateurs: {
		// 	type: Array,
		// 	required: true
		// }
	},
	{ timestamps: true }
);

const Client = mongoose.model('Client',ClientSchema);
module.exports = Client;