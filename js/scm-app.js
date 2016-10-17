// see https://www.npmjs.com/package/github-client
// and http://getbootstrap.com/css/ (styles for prettiness)
// and http://codemirror.net/ (text editor with syntax highlighting)
// and https://github.com/RubenVerborgh/N3.js (Turtle parser)



//var url_server = "https://lucid.implisense.com/dataplatform/"
//var user = "implisense";
//var pw = "4nAQCULrpNJqeB9yGiVd";


var url_server = "https://lucid-dataplatform.eccenca.com/";
var user = "extern.npetersen";
var pw = "HahthohmahK3";


var access_token = "";



//define(['jquery', 'lib/rdfstore', 'logger', 'lib/vis.min'],

 // function($, rdfstore, logger, vis) {

  // HTML elements ------------------------------------------------------------
//  var buttonAnalytics = $("#button-analytics");

//  var buttonModify = $("#button-modify");
//  var buttonSuppliers = $("#button-suppliers");


  //var container = document.getElementById('mynetwork');

  // viz container
  //var nodes, edges, network;
  //nodes = new vis.DataSet();
  //edges = new vis.DataSet();
  //var request = "https://lucid.eccenca.com/dataplatform/proxy/default/sparql?access_token=" + access_token;


  function getAccessToken(url_server, user, pw) 
  {
      var request = url_server + "oauth/token?grant_type=password&username=" + user + "&password=" + pw + "&client_id=eldsClient&client_secret=secret";

      var xhr = new XMLHttpRequest();

      xhr.open("POST", request);

         xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            this.responseText;

            var response = JSON.parse(this.responseText);

            access_token = response.access_token;
            console.log("get access token succeeded: " + response.access_token);
        }
      });
      xhr.send();
  }

  var executeMetric = function (metric)
  {
      readFile("queries/delivery_in_full.rq", "query");
  }

  var drawSupplyChain = function ()
  {
    console.log("draw supply chain");
      readFile("queries/getSupplyChain.rq", "supplyChain");
  }

  var getSuppliers_2 = function ()
  {
      readFile("queries/getCompanies.rq", "getSuppliers");
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
                  case "getSuppliers":
                      processSuppliers(response);
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

  var runSparqlQuery = function(query) 
  {
      var sparql_query = "query=" + encodeURIComponent(query);
   //   var sparql_query = "query=" + encodeURIComponent("SELECT ?s WHERE {?s ?p ?o} LIMIT 10");
 
      var request = url_server + "proxy/default/sparql?access_token=" + access_token;

      var xhr = new XMLHttpRequest();
      xhr.open("POST", request);
      xhr.setRequestHeader("accept", "application/sparql-results+json");
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      xhr.withCredentials = true;
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

           console.log(this.responseText);

            var data = JSON.parse(this.responseText);
            var results = data["results"];
 
            var metricResult = results.bindings[0].metricResult.value

           console.log(metricResult);

           var edgeId = "DEFH655EHJ22_DEA1ES9N0148";

          updateEdge(edgeId, "DEFH655EHJ22", "DEA1ES9N0148", metricResult);


         //   addEdge(11, "Limbacher Bremsbelag GmbH", "Albrecht Auto-Zubehör GmbH", metricResult)
        }
      });

      xhr.send(sparql_query);
  }

  function processSuppliers(query) 
  {
      console.log("start process");
     var sparql_query = "query=" + encodeURIComponent(query);
  
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
      

            console.log(results);
        
        }
      });

      xhr.send(sparql_query);
  }

  var getProcesses = function(query) 
  {
    console.log("get processes");
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

          console.log(this.responseText);
          var processes = data["results"]

          console.log(processes);

          // for each process
          $.each(processes, function(i, v) 
          {
              var processArray = processes[i];
          
              // read process value, supplier and client
              $.each(processArray, function(j, v) 
              {
                console.log(processArray[j]);
                
                var supplierVatID = processArray[j].supplierVatID.value;
                var supplierName = processArray[j].supplier.value;

                var clientVatID = processArray[j].clientVatID.value
                var clientName = processArray[j].client.value

                addNodeWithLabel(supplierVatID, supplierName);
                addNodeWithLabel(clientVatID, clientName);

                var edgeId = supplierVatID + "_" + clientVatID ;
                addEdgeLong(edgeId, supplierVatID, clientVatID);


               // addNode(processArray[j].supplier.value, s_longName);
               // addNode(processArray[j].client.value, c_longName);

               // addEdge(j, processArray[j].supplier.value, processArray[j].client.value, "");

              } );
          });
        }
      });
  }


  var updateQuery = function(query) 
  {

//    DELETE DATA { GRAPH <test1> { <http://lucid.implisense.com/companies/DE2FFGESNX37> a <http://schema.org/Corporation> .}}; 

    query = "INSERT DATA { GRAPH <http://purl.org/eis/vocab/scor#> { <http://lucid.implisense.com/companies/DE555>  a <http://dbpedia.org/ontology/Company> . <http://lucid.implisense.com/companies/DE555>  <http://www.w3.org/2000/01/rdf-schema#comment> \"Some Special Company Nilkas\" .}}";

   var sparql_query = "update=" + encodeURIComponent(query) + "&comment=lalala&graph=http://purl.org/eis/vocab/scor#";

    var request = url_server + "proxy/default/update";

    console.log(access_token);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", request, true);
    xhr.setRequestHeader("accept", "application/sparql-update");
    xhr.setRequestHeader("authorization", ("Bearer " + access_token))
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {

         console.log(this);
       }
    });

      xhr.send(sparql_query);
  }



    // button clicks
  //buttonAnalytics.bind("click", executeMetric);
  
  //buttonModify.bind("click", updateQuery);
  //buttonSuppliers.bind("click", getSuppliers);
  // onload
  $(document).ready(function() {

        getAccessToken(url_server, user, pw);


        var buttonBuildGraph = $("#button-buildGraph");
        buttonBuildGraph.bind("click", drawSupplyChain);


        var buttonBuildGraph = $("#button-analytics");
        buttonBuildGraph.bind("click", executeMetric);

      //  executeMetric();
        //getProcesses();
        //runMetric();
     });
  //});









/*



// xhr.setRequestHeader("Allow-Control-Allow-Origin", ".*");
    
      /*
      xhr.withCredentials = true;
      xhr.setRequestHeader("Allow-Control-Allow-Credentials", "true");
      xhr.setRequestHeader("Allow-Control-Allow-Headers", "Authorization, X-Requested-With, Content-Type, Content-Length");
      xhr.setRequestHeader("Allow-Control-Allow-Methods", "OPTIONS, HEAD, GET, POST, PUT, DELETE");
      xhr.setRequestHeader("Allow-Control-Allow-Origin", "https://lucid-datamanager.eccenca.com");
      xhr.setRequestHeader("Allow-Control-Allow-Headers", "WWW-Authenticate, Link, ETag");
      xhr.setRequestHeader("Allow-Control-Max-Age", "3600");
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
*/
