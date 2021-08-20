const Client = require("../model/client");

module.exports.createClient = async (req, res) => {
  try {
    const newClient = await new Client({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_img: req.body.profile_img,
    });

    newClient.save();

    return {
      code: 200,
      data: newClient,
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

module.exports.getAllClients = async () => {
  try {
    const Clients = await Client.find();

    return {
      code: 200,
      data: Clients,
    };
  } catch (error) {
    return {
      code: 500,
      data: {
        error: "Problem retrieving data",
      },
    };
  }
};

module.exports.getClientById = async (id) => {
  try {
    const clientFound = await Client.findById(id);
    if (!clientFound) return { code: 404, data: { error: "No client found" } };

    return {
      code: 200,
      data: clientFound,
    };
  } catch (error) {
    return {
      code: 500,
      data: {
        error: "Problem retrieving data",
      },
    };
  }
};

module.exports.updateClientById = async (idClient, req) => {
  try {
    let name = "Moby-Geek 3";
    const client = await Client.updateOne(
      { _id: idClient },
      {
        $set: {
          name: name
        },
      }
    );

    if (!client) return { code: 404, data: { error: "No client found" } };

    return {
      code: 200,
      data: updatedClient,
    };
  } catch (error) {
    return {
      code: 500,
      data: {
        error: "Problem retrieving data",
      },
    };
  }
};

module.exports.deleteClientById = async (id) => {
  try {
    const clientFound = await Client.findByIdAndDelete(id);
    if (!clientFound) return { code: 404, data: { error: "No client found" } };

    return {
      code: 200,
      data: clientFound,
    };
  } catch (error) {
    return {
      code: 500,
      data: {
        error: "Problem retrieving data",
      },
    };
  }
};
