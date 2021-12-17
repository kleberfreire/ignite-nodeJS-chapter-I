const getData = (pathIsData, file) => {
  const dataFile = fs.readFileSync(path.resolve('./src/data/', 'teste.txt'), {
    encoding: 'utf8',
    flag: 'r',
  });
  return dataFile;
};
