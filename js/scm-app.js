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
      var getProcesses_query = "query=%20CONSTRUCT%20%7B%3Fs%20%3Fp%20%3Fo%7D%20WHERE%20%20%20%20%7B%20%3Fs%20a%20%3Chttp%3A%2F%2Fpurl.org%2Feis%2Fvocab%2Fscor%23Process%3E%20.%20%20%20%20%3Fs%20%3Fp%20%3Fo%7D";

      var xhr;
      xhr = new XMLHttpRequest();
      xhr.open("POST", "https://lucid.eccenca.com/dataplatform/proxy/default/sparql?access_token=cc91bbee-6739-4ba1-9bcc-006c2bd2b86e");
      xhr.setRequestHeader("accept", "application/ld+json");
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      xhr.send(getProcesses_query);

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {


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


      runMetric();
  }


   var runMetric = function() 
  {
        var delivery_in_full_query = "query=PREFIX%20%3A%20%3Chttp%3A%2F%2Fpurl.org%2Feis%2Fvocab%2Fscor%23%3E%0APREFIX%20xsd%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0ASELECT%20(((%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23double%3E(%3Fvalue1))%20%2B%20(%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23double%3E(%3Fvalue2)))%20%2F%202%20AS%20%3FmetricResult)%20FROM%20%3CsupplyChain%3E%0AWHERE%20%7B%0A%20%20%3Forder%20%3Chttp%3A%2F%2Fpurl.org%2Feis%2Fvocab%2Fscor%23hasMetricRL_33%3E%20%3Fvalue1.%0A%20%20%3Forder%20%3Chttp%3A%2F%2Fpurl.org%2Feis%2Fvocab%2Fscor%23hasMetricRL_50%3E%20%3Fvalue2.%0A%7D%0ALIMIT%2010";

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.open("POST", "https://lucid.eccenca.com/dataplatform/proxy/default/sparql?access_token=cc91bbee-6739-4ba1-9bcc-006c2bd2b86e");
        xhr.setRequestHeader("accept", "application/sparql-results+json");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");   
        xhr.send(delivery_in_full_query);

        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this.responseText);
          }
        });
    }


  function readTextFile(file)
  {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = function ()
      {
          if(rawFile.readyState === 4)
          {
              if(rawFile.status === 200 || rawFile.status == 0)
              {
                  var allText = rawFile.responseText;
                  
                  var query = htmlEscape(allText);

                  return query;
              }
          }
      }
      rawFile.send(null);
  }


  function htmlEscape(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/{/g, '&#123;')
        .replace(/}/g, '&#125;')
        .replace(/\(/g, '&#40;')
        .replace(/\)/g, '&#41;')
        .replace(/:/g, '&#58;')
        .replace(/\;/g, '&#59;')
        .replace(/\./g, '&#46;')
        .replace(/\?/g, '&#63;')
        ;
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
