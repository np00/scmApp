// see https://www.npmjs.com/package/github-client
// and http://getbootstrap.com/css/ (styles for prettiness)
// and http://codemirror.net/ (text editor with syntax highlighting)
// and https://github.com/RubenVerborgh/N3.js (Turtle parser)


define(['jquery', 'lib/rdfstore', 'logger', 'lib/vis.min'],

  function($, rdfstore, logger, vis) {

  // HTML elements ------------------------------------------------------------

  var buttonAnalytics = $("#button-analytics");
  var container = document.getElementById('supplyChainNetwork');

  // viz container
  var nodes, edges, network;

  nodes = new vis.DataSet();
  edges = new vis.DataSet();


  var getProcesses = function() 
  {
      var query = "query=%20CONSTRUCT%20%7B%3Fs%20%3Fp%20%3Fo%7D%20WHERE%20%20%20%20%7B%20%3Fs%20a%20%3Chttp%3A%2F%2Fpurl.org%2Feis%2Fvocab%2Fscor%23Process%3E%20.%20%20%20%20%3Fs%20%3Fp%20%3Fo%7D";

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.open("POST", "https://lucid.eccenca.com/dataplatform/proxy/default/sparql?access_token=4248770c-e540-48b7-9191-365e8bd4e62b");
      xhr.setRequestHeader("accept", "application/ld+json");
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("referer", "https://lucid.eccenca.com/");
      xhr.setRequestHeader("connection", "keep-alive");
      xhr.send(query);

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);

          var data = JSON.parse(this.responseText);

          var processes = data["@graph"]


          $.each(processes, function(i, v) 
          {
            console.log(processes[i].hasClient)

            var longName = processes[i].hasClient

            var short = longName.substring(longName.length-11, longName.length);

            addNode(processes[i].hasClient, short);

            addEdge(i, processes[i].hasClient, processes[i].hasSupplier, processes[i]["hasCommitDate"]);

          });


        }
      });

//  var edges = new vis.DataSet([
//    {from: 1, to: 8, arrows:'to', },
 


  }

    var createGraph = function () {

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


        function addNode(id, label) {
            try {
                nodes.add({
                    id: id,
                    label: label
                });
            }
            catch (err) {
                alert(err);
            }

           createGraph();
        }


        function addEdge(id, from, to, label) {
            try {
                edges.add({
                    id: id,
                    from: from, 
                    to: to,
                    label: label
                });
            }
            catch (err) {
                alert(err);
            }
        }
     


// button clicks
buttonAnalytics.bind("click", getProcesses);



// onload
$(document).ready(function() {


   });

});
