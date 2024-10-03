const fs = require('fs');
const path = require('path');

// Define the logs directory path
const logsDir = path.join(__dirname, 'Logs');

// Check if the Logs directory does not exist
if (!fs.existsSync(logsDir)) {
    // Create the Logs directory
    fs.mkdirSync(logsDir);
}

// Change current process working directory to the Logs directory
process.chdir(logsDir);

// Create 10 log files and write content into them
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(fileName);  // Output the file names to the console
}

console.log('Log files created.');
