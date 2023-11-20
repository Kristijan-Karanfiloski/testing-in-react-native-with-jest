async function convert(base, destination) {
  try {
    const accessKey = "054d80ea6e35e57412bd1622ff61850f";
    // const url = `https://api.exchangeratesapi.io/v1/latest?access_key=${accessKey}&base=${base}`;
    const url = `https://api.exchangeratesapi.io/v1/latest?base=${base}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // return data.rates[destination];
  } catch (e) {
    return null;
  }
}

export { convert };
