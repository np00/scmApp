var data = [
['Hyva Germany GmbH', 'Georg Hydraulik GmbH', 1],
['Georg Hydraulik GmbH', 'Hyva Germany GmbH', 1],
];

var colors = {
"Hyva Germany GmbH": "#da4480",
"Georg Hydraulik GmbH": "#5ab449",
};

var sortOrder = [
"Hyva Germany GmbH",
"Georg Hydraulik GmbH",
];

function sort(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)); }

var ch = viz.ch().data(data)
      .padding(.01)
      .sort(sort)
	  .innerRadius(330)
	  .outerRadius(350)
	  .duration(1000)
	  .chordOpacity(0.3)
	  .labelPadding(.03)
      .fill(function(d){ return colors[d];});

var width=1200, height=1100;

var svg = d3.select("body").append("svg").attr("height",height).attr("width",width);

svg.append("g").attr("transform", "translate(600,550)").call(ch);

// adjust height of frame in bl.ocks.org
d3.select(self.frameElement).style("height", height+"px").style("width", width+"px");  