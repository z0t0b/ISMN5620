// Barchart.js

var dataset = [{"country": "United States", "gdp": 20513, "population": 330, "abbreviation": "U.S."},
            {"country": "China", "gdp": 13457, "population": 1430, "abbreviation": "China"},
            {"country": "Japan", "gdp": 5070, "population": 130, "abbreviation": "Japan"},
            {"country": "Germany", "gdp": 4029, "population": 80, "abbreviation": "Germany"},
            {"country": "United Kingdom", "gdp": 2808, "population": 70, "abbreviation": "U.K."}];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
const barWidth = svgWidth / dataset.length;
var svg = d3.select('svg') // Set up the canvas that will hold the barchart
    .attr('width', svgWidth)
    .attr('height', svgHeight);

var barchart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', function(d) { // y is where you start drawing the bar, i.e. how many pixels to move down vertically from the top of the canvas
        return svgHeight - Math.ceil(d.gdp / d.population) * 3;
    })
    .attr('height', function(d) { // bar height varies based on bar's underlying value
        return Math.ceil(d.gdp / d.population) * 3;
    })
    .attr('width', barWidth - barPadding) // bar width is fixed
    .attr('class', 'bar')
    .attr('transform', function(d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    })
    .attr('fill', function(d) {
        if(Math.ceil(d.gdp / d.population) > 50) return "green"; else return "red";
    });

var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d.abbreviation + ": " + Math.ceil(d.gdp / d.population);
    })
    .attr("y", function(d) {
        return svgHeight - Math.ceil(d.gdp / d.population) * 3 - 2;
    })
    .attr("x", function(d, i) {
        return barWidth * i;
    })
    .attr("fill", "black");