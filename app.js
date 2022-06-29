const prompt = require('prompt-sync')();
const fs = require("fs");
const filepath = prompt('Please enter file path:');
let data = fs.readFileSync(filepath, "utf8");
data = data.split("\r\n");
let orders = [];
let popularBrands = {};
let totalBrands = {}; 
for (let i of data) { 
    const order = i.split(',');
    orders.push(order);

    if(!totalBrands[order[2]]) totalBrands[order[2]] = 0;
    totalBrands[order[2]] = totalBrands[order[2]] + parseInt(order[3]);

    if(!popularBrands[order[2]]) popularBrands[order[2]] = {};

    if(popularBrands[order[2]] && !popularBrands[order[2]][order[4]]) popularBrands[order[2]][order[4]] = 0;
    popularBrands[order[2]][order[4]] = popularBrands[order[2]][order[4]] + 1;
};


// console.log(totalBrands);
// console.log(popularBrands);
const totalOrders = orders.length;
let avgStr = "";
let popularStr = "";
for (const product in totalBrands) {
    if(avgStr.length != 0) avgStr = avgStr + "\r\n";
    avgStr = avgStr + product + "," + (totalBrands[product]/totalOrders);
}
// console.log(avgStr);

for (const product in popularBrands) {
    if(popularStr.length != 0) popularStr = popularStr + "\r\n";
    let popularBrand = Object.keys(popularBrands[product])[0];
    let popularBrandNumber = Object.values(popularBrands[product])[0];
    for (const brand in popularBrands[product]) {
        if(popularBrandNumber < popularBrands[product][brand]) {
            popularBrandNumber = popularBrands[product][brand];
            popularBrand = brand;
        }
    }
    popularStr = popularStr + product + "," + popularBrand;
}

// console.log(popularStr);
const filepathArr = filepath.split('/');
const filename = filepathArr[filepathArr.length - 1];
fs.writeFile('0_'+ filename, avgStr, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});
  
fs.writeFile('1_'+ filename, popularStr, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});