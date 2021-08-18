const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Client name is required'],
		},
	},
	{ timestamps: true }
);

const Client = mongoose.module('Client',ClientSchema);
module.exports = Client;