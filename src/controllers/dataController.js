const Data = require('../models/Data');
const dataInsert = require('../dataInsert.json');

exports.getData = async (req, res) => {
    try {
     
        console.log(dataInsert);

        const data = await Data.find({}).limit(30);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.addData = async (req, res) => {
    try {
        const newDataArray = dataInsert;
        
        if (!Array.isArray(newDataArray)) {
            return res.status(400).json({ message: 'Request body should be an array' });
        }

        const savedData = await Data.insertMany(newDataArray);
        res.status(201).json(savedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
