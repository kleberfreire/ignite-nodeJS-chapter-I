const dataTest =  require


const getEntries = (request, response) => {
  return response.json('Entries ok');
};
const postEntries = (request, response) => {
  const { empresa, CPF, tipo, descrição, valor } = request.body;
  console.log(empresa, CPF, tipo, descrição, valor);
  
  return response.json('successfully created entry');
};

module.exports = {
  getEntries,
  postEntries,
};
