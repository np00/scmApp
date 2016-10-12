// see https://www.npmjs.com/package/github-client
// and http://getbootstrap.com/css/ (styles for prettiness)
// and http://codemirror.net/ (text editor with syntax highlighting)
// and https://github.com/RubenVerborgh/N3.js (Turtle parser)




var url_server = "https://lucid.eccenca.com/dataplatform/"
//var user = "xx";
//var pw = "xx";


//var url_server = "https://lucid.implisense.com/dataplatform/"
var user = "xx";
var pw = "xx";


var access_token;



define(['jquery', 'lib/rdfstore', 'logger', 'lib/vis.min'],

  function($, rdfstore, logger, vis) {

  // HTML elements ------------------------------------------------------------
  var buttonAnalytics = $("#button-analytics");
  var buttonBuildGraph = $("#button-buildGraph");


  var container = document.getElementById('supplyChainNetwork');




  // viz container
  var nodes, edges, network;
  nodes = new vis.DataSet();
  edges = new vis.DataSet();
  //var request = "https://lucid.eccenca.com/dataplatform/proxy/default/sparql?access_token=" + access_token;



  var getAccessToken = function (url_server, user, pw) 
  {
      var request = url_server + "oauth/token?username=" + user + "&password=" + pw + "&client_id=eldsClient&client_secret=secret&grant_type=password";

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            this.responseText;

            var response = JSON.parse(this.responseText);

            access_token = response.access_token;
            console.log("get access token succeeded: " + response.access_token);
        }
      });

      xhr.open("POST", request);
      xhr.send();
  }

  var executeMetric = function (metric)
  {
      readFile("queries/delivery_in_full.rq", "query");
  }

  var drawSupplyChain = function ()
  {
      readFile("queries/getSupplyChain.rq", "supplyChain");
  }

  function readFile(fileName, processType)
  {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", fileName, true);
      rawFile.overrideMimeType('text/plain');
      rawFile.onreadystatechange = function ()
      {
          if(rawFile.readyState === 4)
          {
              if(rawFile.status === 200 || rawFile.status == 0)
              {
                var response = rawFile.responseText;
               
                switch(processType)
                {
                  case "query":
                      runSparqlQuery(response);
                  break;
                  case "supplyChain":
                      getProcesses(response);
                  break;  
                  default: 
                      console.log("readFile failed: " + rawFile.responseText)
                }
              }
          }
      }
      rawFile.send();
  }

  var runSparqlQuery = function (query) 
  {
      var sparql_query = "query=" + encodeURIComponent(query);
      var sparql_query = "query=" + encodeURIComponent("SELECT ?s WHERE {?s ?p ?o} LIMIT 10");
 
      var request = url_server + "proxy/default/sparql?access_token=" + access_token;

      var xhr = new XMLHttpRequest();
      xhr.open("POST", request);
      xhr.setRequestHeader("accept", "application/sparql-results+json");
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      xhr.withCredentials = true;
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

            var data = JSON.parse(this.responseText);
            var results = data["results"];
            console.log(this.responseText);
            var metricResult = results.bindings[0].metricResult.value



            addEdge(11, "Albrecht Auto-Zubehör GmbH", "Karosseriewerk Heinrich Meyer GmbH", metricResult)
        }
      });

      xhr.send(sparql_query);
  }


  var drawGraph = function (supplyChain)
  {
    console.log(supplyChain);

  }


  var getProcesses = function(query) 
  {
     // var getProcesses_query = "query=%20CONSTRUCT%20%7B%3Fs%20%3Fp%20%3Fo%7D%20WHERE%20%20%20%20%7B%20%3Fs%20a%20%3Chttp%3A%2F%2Fpurl.org%2Feis%2Fvocab%2Fscor%23Process%3E%20.%20%20%20%20%3Fs%20%3Fp%20%3Fo%7D";

      console.log(query);

      var request = url_server + "proxy/default/sparql?access_token=" + access_token;
      var sparql_query = "query=" + encodeURIComponent(query);


      var xhr;
      xhr = new XMLHttpRequest();
      xhr.open("POST", request);
      xhr.setRequestHeader("accept", "application/sparql-results+json");
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      xhr.send(sparql_query);

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

          var data = JSON.parse(this.responseText);

          console.log(data);
          var processes = data["results"]

          // for each process
          $.each(processes, function(i, v) 
          {
              var processArray = processes[i];
          

              // read process value, supplier and client
              $.each(processArray, function(j, v) 
              {
                console.log(processArray[j]);
                
                var s_longName = processArray[j].supplier.value
                var s_shortName = s_longName.substring(s_longName.length-11, s_longName.length);

                var c_longName = processArray[j].supplier.value
                var c_shortName = c_longName.substring(c_longName.length-11, c_longName.length);


                addNode(processArray[j].supplier.value, s_longName);
                addNode(processArray[j].client.value, c_longName);

                addEdge(j, processArray[j].supplier.value, processArray[j].client.value, "");

              } );
          });
        }
      });
  }

/*

  var runMetric = function() 
  {
      var bla = readTextFile("queries/delivery_in_full.rq")


      console.log(bla);


        var delivery_in_full_query = "query=PREFIX%20%3A%20%3Chttp%3A%2F%2Fpurl.org%2Feis%2Fvocab%2Fscor%23%3E%0APREFIX%20xsd%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0ASELECT%20(((%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23double%3E(%3Fvalue1))%20%2B%20(%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23double%3E(%3Fvalue2)))%20%2F%202%20AS%20%3FmetricResult)%20FROM%20%3CsupplyChain%3E%0AWHERE%20%7B%0A%20%20%3Forder%20%3Chttp%3A%2F%2Fpurl.org%2Feis%2Fvocab%2Fscor%23hasMetricRL_33%3E%20%3Fvalue1.%0A%20%20%3Forder%20%3Chttp%3A%2F%2Fpurl.org%2Feis%2Fvocab%2Fscor%23hasMetricRL_50%3E%20%3Fvalue2.%0A%7D%0ALIMIT%2010";

        var test = "PREFIX : <http://purl.org/eis/vocab/scor#>PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>SELECT (((<http://www.w3.org/2001/XMLSchema#double>(?value1)) + (<http://www.w3.org/2001/XMLSchema#double>(?value2))) / 2 AS ?metricResult) FROM <supplyChain>WHERE {  ?order <http://purl.org/eis/vocab/scor#hasMetricRL_33> ?value1.  ?order <http://purl.org/eis/vocab/scor#hasMetricRL_50> ?value2.}LIMIT 10";
        var someVariable = "query=" + encodeURIComponent(test);


        console.log(someVariable);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.open("POST", requsect)
        xhr.setRequestHeader("accept", "application/sparql-results+json");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");   
        xhr.send(someVariable);

        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            console.log(this.responseText);
          }
        });
    }

    */



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
        // console.log(err);
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
          //  console.log(err);
      }
  }

    // button clicks
  buttonAnalytics.bind("click", executeMetric);
  buttonBuildGraph.bind("click", drawSupplyChain);
  // onload
  $(document).ready(function() {

        getAccessToken(url_server, user, pw);

      //  executeMetric();
        //getProcesses();
        //runMetric();
     });
  });