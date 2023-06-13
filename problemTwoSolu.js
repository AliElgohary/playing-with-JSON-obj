const fs = require('fs');

// Read the file
const jsonData = fs.readFileSync('problem2.json');

//parse it
const data = JSON.parse(jsonData);

// Convert the dates to the format
data.accidents.forEach(accident => {
  const dateParts = accident.date.split('/');
  const formattedDate = `${dateParts[2]}-${dateParts[0].padStart(2, '0')}-${dateParts[1].padStart(2, '0')}`;
  accident.date = formattedDate;
});

// Write the modified data to result.json
const result = JSON.stringify(data, null, 2);
fs.writeFileSync('result.json', result);
