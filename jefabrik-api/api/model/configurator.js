const mongoose = require("mongoose");

const ConfiguratorSchema = new mongoose.Schema(
  {
    urlVerge3D: {
      type: String,
      required: [true, "urlVerge3D is required"],
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    version: {
      type: String,
      required: [true, "version is required"],
    },
	piètements: {
		type: Array,
		reuquired: [true, "piètements is required"]
	}
  },
  { timestamps: true }
);

const Configurator = mongoose.model("Configurateurs", ConfiguratorSchema);
module.exports = Configurator;

// piètements = [
//   { image1: "Pietements1", image2: "Ultimate" },
//   { prix1: "100", prix2: "150" },
//   { couleur1: "noir", couleur2: "jaune" }
// ];

// piètements[0].image1 = "Piètements1"
// piètements[1].prix1 = "100"
// piètements[2].couleur1 = "noir"
