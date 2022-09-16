const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (hasil) => {
  const filmIXX = await promiseTheaterIXX();
  const filmVGC = await promiseTheaterVGC();
  const Joinfilm = [...filmIXX, ...filmVGC];
  const newarr = [];

  return new Promise((resolve) => {
    for (film of Joinfilm) {
      if (film.hasil == hasil) {
        newarr.push(film);
      }
    }
    resolve(newarr.length);
  });
};

module.exports = {
  promiseOutput,
};
