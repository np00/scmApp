// see https://www.npmjs.com/package/github-client
// and http://getbootstrap.com/css/ (styles for prettiness)
// and http://codemirror.net/ (text editor with syntax highlighting)
// and https://github.com/RubenVerborgh/N3.js (Turtle parser)


define(['jquery', 'lib/rdfstore', 'logger', 'lib/vis.min'],

  function($, rdfstore, logger, vis) {

  // HTML elements ------------------------------------------------------------

  var buttonAnalytics = $("#button-analytics");
  var container = document.getElementById('supplyChainNetwork');

  var createGraph = function () {

  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: 1, label: 'Iron Mine ZZ', title: '...'},
    {id: 2, label: 'GigaLab X1', color: {background:'pink', border:'purple'}},
    {id: 3, label: 'GigaLab F4'},
    {id: 4, label: 'Global Manufacturing'},
    {id: 5, label: 'Press Logistics MML'},
    {id: 6, label: 'Volkswagen'},
    {id: 7, label: 'Infineon'},
    {id: 8, label: 'Daimler'}
  ]);

  // create an array with edges

   // {from: 2, to: 5, arrows:'to, middle, from'},
   // {from: 5, to: 6, arrows:{to:{scaleFactor:2}}},
   // {from: 6, to: 7, arrows:{middle:{scaleFactor:0.5},from:true}}

  var edges = new vis.DataSet([
    {from: 1, to: 8, arrows:'to', label: '70%',},
    {from: 1, to: 3, arrows:'to'},
    {from: 1, to: 2, arrows:'to'},
    {from: 2, to: 4, arrows:'to'},
    {from: 2, to: 5, arrows:'to'},
    {from: 5, to: 6, arrows:'to'},
    {from: 6, to: 7, arrows:'to'}
  ]);

  // create a network

  //var container = document.getElementById('supplyChainNetwork');
  //var container = $("#supplyChainNetwork");
  //$("#supplyChainNetwork").css("width", "60000px");
  //$("supplyChainNetwork").css("height", "40000px");
  //$("supplyChainNetwork").css("border", "1px solid lightgray");
  
  var data = {
    nodes: nodes,
    edges: edges
  };

  var input = 'RL';
  var options = {  layout: {
                      hierarchical: {
                        direction: 'LR'}},
                   nodes:{  
                        color: {
                            background: 'pink',
                            border: 'purple'}},
                  edges:{
                  font: {
      color: 'green',
      size: 18, // px
      face: 'arial',
      background: 'white',
      strokeWidth: 2, // px
      strokeColor: '#ffffff',
      align:'horizontal'
    }}

                };
  var network = new vis.Network(container, data, options);

   network.on("click", function (params) {
        params.event = "[original event]";
    })

};



  var runAnalytics = function() 
  {
    var uri = "xxx"';

    $.get( uri, function( data ) {
      alert( "Data Loaded: " + data);
          logger.debug("response", data);
    });
   


  };


    /*
   resultTable.children().remove();

   vocabulary = editor.getValue();
   queryString = sparqlEditor.getValue();

      // create graph store
      rdfstore.create(function(err, store) 
      {
        store.load("text/turtle", vocabulary, function(err, results) 
        {   
          if(err)
          {
            logger.debug("store load error", err);
            logger.error("Could not Run SPARQL Query:", err.message);
          }else
          {
            // run query
            store.execute(queryString, function(err, results)
            {
              // build first row
              var listOfSelects = Object.keys(results[0]);

              var firstRow = "<tr>";
              for(var key in listOfSelects)
              {
                firstRow += "<th>" + listOfSelects[key] + "</th>";
              }
              firstRow += "</tr>";
              resultTable.append(firstRow); 

              // print results
              for (var i = 0; i < results.length; i++) 
              {
                var resultSet = results[i];
                console.log("resultSet: " + resultSet);
                var newRow = "<tr>";
                for(var key in resultSet)
                { 
                  newRow += "<td>" + resultSet[key].value + "</td>";
                }
                newRow += "</tr>";
                resultTable.append(newRow)
              };
            });
          };
        });
});
*/

buttonAnalytics.bind("click", runAnalytics);

$(document).ready(function() {

  createGraph();
     // start possible init methods
   });

});
