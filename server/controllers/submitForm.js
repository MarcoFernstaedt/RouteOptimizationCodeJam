const { SERVER_ERROR } = require('../utils/errors')
// Import required modules
const pythonRunner = require('../utils/pythonRunner');

// Controller for form submission
module.exports.submitFormController = async (req, res) => {
    try {
        // Extract data from the request body
        const formData = req.body;

        // Call the pythonRunner function to execute the Python script
        const pythonResult = await pythonRunner(formData);

        // Handle the result as needed
        res.json({ result: pythonResult });
    } catch (error) {
        console.log(error)
        res.status(error.statusCode || SERVER_ERROR).json({ error: error.message || 'Internal Server Error' });
    }
};
