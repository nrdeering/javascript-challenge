
var tableData = data;
console.log(data);

var tbody = d3.select("tbody");

data.forEach(function(filteredData) {
  var button = d3.select("#filter-btn");

button.on("click", function() {
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");
console.log(inputValue);
console.log(tableData);

var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
console.log(filteredData);
});
  var row = tbody.append("tr");
  Object.entries(filteredData).forEach(function([key, value]) {
   console.log(key, value);
   var cell = row.append("td");
   cell.text(value);
 });
});






