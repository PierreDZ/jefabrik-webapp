const mongoose = require('mongoose');

const ConfiguratorSchema = new mongoose.Schema(
	{
		urlVerge3D: {
			type: String,
			required: [true, 'urlVerge3D is required'],
		},
        name: {
			type: String,
			required: [true, 'name is required'],
		},
	},
	{ timestamps: true }
);

const Configurator = mongoose.module('Client',ConfiguratorSchema);
module.exports = Configurator;