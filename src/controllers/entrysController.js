const createData = require('../model/createData');

const getEntries = (request, response) => {
  const data = JSON.stringify(createData.getData())
    .replaceAll('"', '')
    .split('\\n');
  const dataArrayObject = data.map((item) => {
    const convertArry = item.split(';');

    const [empresa, CPF, tipo, descrição, valor] = convertArry;
    return { empresa, CPF, tipo, descrição, valor };
  });
  console.log(dataArrayObject);
  return response.json(dataArrayObject);
};
const postEntries = (request, response) => {
  try {
    const { empresa, CPF, tipo, descrição, valor } = request.body;
    const data = `${empresa};${CPF};${tipo};${descrição};${valor}`;
    createData.setData(data);
  } catch (error) {
    return response.status(500).json({ error: error });
  }
  return response.json('successfully created entry');
};

module.exports = {
  getEntries,
  postEntries,
};
