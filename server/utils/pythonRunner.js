const { spawn } = require('child_process');

// function to run python scripts
const pythonRunner = (data) => {
    return new Promise((resolve, reject) => {
        const pythonScriptPath = '../scripts/script.py';
        console.log(data)
        const pythonProcess = spawn('python3', [pythonScriptPath, data]);
    
        let dataToSend = '';
    
        pythonProcess.stdout.on('data', (data) => {
          dataToSend  += data.toString();
        });
    
        pythonProcess.stderr.on('data', (data) => {
          reject(data.toString());
        });
    
        pythonProcess.on('exit', (code) => {
          if (code === 0) {
            resolve(JSON.parse(dataToSend ));
          } else {
            reject(`Python script exited with code ${code}`);
          }
        });
      });
}

module.exports = pythonRunner;
