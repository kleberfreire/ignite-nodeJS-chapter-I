const fs = require('fs');
const path = require('path');

const getData = (pathIsData) => {
  const dataFile = fs.readFileSync(path.resolve('./src/data/', 'teste.txt'), {
    encoding: 'utf8',
    flag: 'r',
  });
  return dataFile;
};

console.log(JSON.stringify(getData()));

const setData = (newData) => {
  const data = getData();

  const concatData = `${data} ${newData}\n`;

  fs.writeFileSync(path.resolve('./src/data/', 'teste.txt'), concatData);
};

setData();

// fs.writeFile(
//   path.join(__dirname, 'data', 'tetsteste.json'),
//   data,
//   (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(data);
//   },
// );
