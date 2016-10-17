var data = [
['IndiKar Individual Karosseriebau GmbH', 'Welp Holding GmbH', 2],
['Welp Holding GmbH', 'IndiKar Individual Karosseriebau GmbH', 2],
['Welp Holding GmbH', 'Farmingtons Automotive GmbH', 4],
['Farmingtons Automotive GmbH', 'Welp Holding GmbH', 4],
['Welp Holding GmbH', 'Farmingtons Property GmbH', 4],
['Farmingtons Property GmbH', 'Welp Holding GmbH', 4],
['IndiKar Individual Karosseriebau GmbH', 'Farmingtons Automotive GmbH', 3],
['Farmingtons Automotive GmbH', 'IndiKar Individual Karosseriebau GmbH', 3],
['Farmingtons Automotive GmbH', 'Welp Holding GmbH', 4],
['Welp Holding GmbH', 'Farmingtons Automotive GmbH', 4],
['Farmingtons Automotive GmbH', 'Farmingtons Property GmbH', 4],
['Farmingtons Property GmbH', 'Farmingtons Automotive GmbH', 4],
['IndiKar Individual Karosseriebau GmbH', 'Farmingtons Property GmbH', 2],
['Farmingtons Property GmbH', 'IndiKar Individual Karosseriebau GmbH', 2],
['Farmingtons Property GmbH', 'Welp Holding GmbH', 4],
['Welp Holding GmbH', 'Farmingtons Property GmbH', 4],
['Farmingtons Property GmbH', 'Farmingtons Automotive GmbH', 4],
['Farmingtons Automotive GmbH', 'Farmingtons Property GmbH', 4],
['IndiKar Individual Karosseriebau GmbH', 'IGP Trading GmbH', 1],
['IGP Trading GmbH', 'IndiKar Individual Karosseriebau GmbH', 1],
['IndiKar Individual Karosseriebau GmbH', 'Trabant nT GmbH', 1],
['Trabant nT GmbH', 'IndiKar Individual Karosseriebau GmbH', 1],
];

var colors = {
"IndiKar Individual Karosseriebau GmbH": "#da4480",
"Farmingtons Automotive GmbH": "#5ab449",
"Farmingtons Property GmbH": "#7f5acd",
"IGP Trading GmbH": "#aab740",
"Trabant nT GmbH": "#ce58c0",
"Welp Holding GmbH": "#50a26e",
};

var sortOrder = [
"IndiKar Individual Karosseriebau GmbH",
"Farmingtons Automotive GmbH",
"Farmingtons Property GmbH",
"IGP Trading GmbH",
"Trabant nT GmbH",
"Welp Holding GmbH",
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