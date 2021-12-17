const fs = require('fs');
const path = require('path');

const getData = (pathIsData, file) => {
  const dataFile = fs.readFileSync(path.resolve('./src/data/', 'teste.txt'), {
    encoding: 'utf8',
    flag: 'r',
  });
  return dataFile;
};

const setData = (newData) => {
  const data = getData();

  const concatData = `${data}${newData}\n`;

  fs.writeFileSync(path.resolve('./src/data/', 'teste.txt'), concatData);
};

module.exports = {
  getData,
  setData,
};
