// Piechart.js

var data = [
    {"age": "Ages 18-19", "percentage": 33}, 
    {"age": "Ages 20-21", "percentage": 30.7},
    {"age": "Ages 22-24", "percentage": 19.3},
    {"age": "Ages 25-29", "percentage": 9},
    {"age": "Other ages", "percentage": 8}
];

var svgWidth = 1000, svgHeight = 600, radius = Math.min(svgWidth, svgHeight) / 2;
var svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var color = d3.scaleOrdinal(d3.schemeCategory20);

var pie = d3.pie().value(function(d) {
    return d.percentage;
});

var path = d3.arc().outerRadius(radius).innerRadius(0);

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");
arc.append("path")
    .attr("d", path)
    .attr("fill", function(d) {
        return color(d.data.percentage);
    });

var label = d3.arc().outerRadius(radius).innerRadius(0);

arc.append("text")
    .attr("transform", function(d) {
        return "translate(" + label.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function(d) {
        return d.data.age + ": " + d.data.percentage + "%";
    });