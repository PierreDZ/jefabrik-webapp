
module.exports.getAllClients = /* async */ () => {
    try {
        //const clientFound = await Client.find();

        const data = [
            {
                id : 10,
                name: "Company 1"
            },
            {
                id : 11,
                name: "Company 2"
            }];

        return {
            code:200,
            data: data
        }
    }catch(error){
        return {
            code:500,
            data: {
                error:"Problem retrieving data"
            }
        }
    }
};

module.exports.getClientById = /* async */ (id) => {
    try {
        //const clientFound = await Client.findById(id);
        //if (!clientFound) return {code:404,data:{error:"No client found"}}

        if (id == 'notfound') 
            return {
                code:404,
                data:{
                    error:"No client found"
                }
            };

        const data = {
            id : id,
            name: "Company "+id
        };

        return {
            code:200,
            data: data
        };
    }catch(error){
        return {
            code:500,
            data: {
                error:"Problem retrieving data"
            }
        };
    }
};