const fs = require('fs');
const path = require('path');

// Define the logs directory path
const logsDir = path.join(__dirname, 'Logs');

// Check if the Logs directory exists
if (fs.existsSync(logsDir)) {
    // Read all files in the directory
    fs.readdirSync(logsDir).forEach(file => {
        // Log the file name being deleted
        console.log(`delete files...${file}`);

        // Delete each file in the Logs directory
        fs.unlinkSync(path.join(logsDir, file));
    });

    // Remove the Logs directory itself
    fs.rmdirSync(logsDir);
    console.log('Logs directory deleted.');
} else {
    console.log('Logs directory does not exist.');
}


