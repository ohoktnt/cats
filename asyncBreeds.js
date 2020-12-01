// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToCallwhenThingsAreDone) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    // console.log("In readFile's Callback: it has the data.");
    if (!error) functionToCallwhenThingsAreDone(data);
    if (error) functionToCallwhenThingsAreDone(data);
  });
};

const printDescription = (breed) => {
  console.log('Return Value: ', breed); // => will NOT print out details, instead we will see undefined!=
};


breedDetailsFromFile('Bombay', printDescription);

module.exports = breedDetailsFromFile;