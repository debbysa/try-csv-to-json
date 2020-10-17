const csvtojson = require("csvtojson");
const fs = require("fs");
const csvFilePath = "national-population.csv";

csvtojson()
  .fromFile(csvFilePath)
  .then((json) => {
    console.log(json);
    fs.writeFileSync(
      "output-national-population.json",
      JSON.stringify(json),
      "utf-8",
      (err) => {
        console.log(err);
      }
    );
  });
