// Scatter.js

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    svgWidth = 460 - margin.left - margin.right,
    svgHeight = 400 - margin.top - margin.bottom;

var svg = d3.select("svg")
    .attr("width", svgWidth + margin.left + margin.right)
    .attr("height", svgHeight + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Reading the data
d3.csv("https://vizhub.com/curran/datasets/auto-mpg.csv", function(data) {
   // Add x-axis   
   var xScale = d3.scaleLinear()
      .domain([0, 240])
      .range([0, svgWidth]);
   
   var x_axis = d3.axisBottom().scale(xScale);

   svg.append("g")
      .attr("transform", "translate(0," + svgHeight + ")")
      .call(x_axis);

   // Add y-axis
   var yScale = d3.scaleLinear()
      .domain([0, 5500])
      .range([svgHeight, 0]);

   var y_axis = d3.axisLeft().scale(yScale);

   svg.append("g")
      .call(y_axis);

   var weightMean = d3.mean(data, function(d) {
      return d.weight;
   });
   var horsepowerMean = d3.mean(data, function(d) {
      return d.horsepower;
   });

   // Add dots
   svg.append("g")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function(d) {
         return xScale(d.horsepower);
      })
      .attr("cy", function(d) {
         return yScale(d.weight);
      })
      .attr("r", 1.5)
      .attr("fill", "none")
      .attr("stroke", function(d) {
         if(d.horsepower > horsepowerMean && d.weight > weightMean) {
            return "red";
         } else return "blue";
      });
});