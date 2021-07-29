const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    //C) FIX
    // value: Number(prompt('Degrees celcius:')),
    value: 10,
  };

  //B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());
