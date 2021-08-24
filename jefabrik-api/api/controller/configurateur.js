const Config = require('../model/configurator');

module.exports.getAllConfigs = async () => {
    try {
      
      const Configs = await Config.find();
  
      return {
        code: 200,
        data: Configs,
      };
    } catch (error) {
      return {
        code: 500,
        data: {
          error: "Problem creating client",
        },
      };
    }
  };

  module.exports.getConfigById = async (id) => {
    try {
      const configFound = await Config.findById(id);
      if (!configFound) return { code: 404, data: { error: "No configurator found" } };
  
      return {
        code: 200,
        data: configFound,
      };
    } catch (error) {
      return {
        code: 500,
        data: {
          error: "Problem retrieving Configurateur",
        },
      };
    }
  };

  module.exports.createConfig = async (req, res) => {
    try {
      const newConfig = await new Config({
        urlVerge3D: req.body.verge,
        name: req.body.name,
        version: req.body.version,
        piètements: req.body.piètements
      });
  
      newConfig.save();
  
      return {
        code: 200,
        data: newConfig,
      };
    } catch (error) {
      return {
        code: 500,
        data: {
          error: "Problem creating config",
        },
      };
    }
  };