const { spawn } = require('child_process');

// function to run python scripts
const pythonRunner = (data) => {
    return new Promise((resolve, reject) => {
        const pythonScriptPath = '../scripts/script.py';
        
        const pythonProcess = spawn('python', [pythonScriptPath]);
    
        let dataToSend = '';
    
        pythonProcess.stdout.on('data', (data) => {
          result += data.toString();
        });
    
        pythonProcess.stderr.on('data', (data) => {
          reject(data.toString());
        });
    
        pythonProcess.on('exit', (code) => {
          if (code === 0) {
            resolve(JSON.parse(result));
          } else {
            reject(`Python script exited with code ${code}`);
          }
        });
      });
}

module.exports = pythonRunner;
