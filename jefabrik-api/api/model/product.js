const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Client name is required'],
		},
        type: {
			type: String,
			required: [true, 'type is required'],
		},
	},
	{ timestamps: true }
);

const Product = mongoose.module('Client',ProductSchema);
module.exports = Product;