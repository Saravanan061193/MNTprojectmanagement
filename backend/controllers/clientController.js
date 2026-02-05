const Client = require('../models/Client');

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });
        res.json(clients);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.createClient = async (req, res) => {
    try {
        const { companyName, contactPerson, email, phone, projectType, website, notes } = req.body;
        const newClient = new Client({
            companyName,
            contactPerson,
            email,
            phone,
            projectType,
            website,
            notes,
            createdBy: req.user.id
        });
        const client = await newClient.save();
        res.json(client);
    } catch (err) {
        console.error("Create Client Error:", err.message);
        res.status(500).json({ msg: err.message });
    }
};

const Asset = require('../models/Asset');

exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) return res.status(404).json({ msg: 'Client not found' });

        const assets = await Asset.find({ client: req.params.id }).sort({ createdAt: -1 });

        res.json({ client, assets });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// ... add update/delete
