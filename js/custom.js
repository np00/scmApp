$(function() {  // load when DOM ready
  $('.selectedCompanyDetails').hide();
  $('.ui.accordion').accordion(); //--- load company details accordion
  //--- autocomplete ---
  var options = {
	  url: "js/data.json",
    getValue: "label",
     list: {
      maxNumberOfElements: 10,
		  match: {
			  enabled: true
		  },
		  onSelectItemEvent: function() {
			  var companyValue = $("#companyName").getSelectedItemData().id;
        $("#companyID").text(companyValue);
        var supplierValue = $("#supplierName").getSelectedItemData().id;
        $("#supplierID").text(supplierValue);
        var recipentValue = $("#recipentName").getSelectedItemData().id;
        $("#recipentID").text(recipentValue);
		  },
		  showAnimation: {
			  type: "fade", //normal|slide|fade
        time: 300,
        callback: function() {}
		  },
      hideAnimation: {
			  type: "fade", //normal|slide|fade
        time: 300,
        callback: function() {}
		  },
		  sort: {
			  enabled: true
		  }
	  },
    theme: "plate-dark"
  };
  $("#companyName").easyAutocomplete(options);
  $("#supplierName").easyAutocomplete(options);
  $("#recipentName").easyAutocomplete(options);
  //--- autocomplete ---
  //--- put random int into edges div ---
  function randomInt() {
    var randomNumber = parseInt((Math.random() * (100000 - 50 + 1)), 10) + 50;
    $('#edgeID').text(randomNumber);
  }
  randomInt();
  //--- put random int into edges div ---

  //--- file upload ---
  function readSingleFile(evt) {
    var f = evt.target.files[0]; 
    if (f) {
      var r = new FileReader();
      r.onload = function(e) {
        $("#data").html('');
        var uploadContents = e.target.result;
        //alert(contents);
        var startContent = 'digraph {node [shape=dot fontsize=15] edge [length=100, color=blue, fontcolor=black] ';
        //contents = startContent + uploadContents + "}";
        contents = uploadContents;
        $("#data").val(contents);
        draw();
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
  }
  document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
  //--- file upload ---
  //--- supplier add textfiled ---
  $("#supplierAdd").click(function(){
    var selectedSupplier = $('#debugCompanyName').html();
    selectedSupplier = selectedSupplier.replace(/\&amp;/g,'&');
    $('#supplierName').val(selectedSupplier);
    $('#supplierID').text($('#debugCompanyID').text());
    
  });
  //--- supplier add textfiled ---
  //--- recipent add textfield ---
  $("#recipentAdd").click(function(){
    var selectedRecipent = $('#debugCompanyName').html();
    selectedRecipent = selectedRecipent.replace(/\&amp;/g,'&');
    $('#recipentName').val(selectedRecipent);
    $('#recipentID').text($('#debugCompanyID').text());
  });
  //--- recipent add textfield ---
  }); // load when DOM ready

  //--- vis graph ---
  var nodes, edges, network;
  function toJSON(obj) {
      return JSON.stringify(obj, null, 4);
  }
  function addNode() {
    try {
      nodes.add({
        id: $('#companyID').text(),
        label: $('#companyName').text()
      });
    }
    catch (err) {
      alert(err);
    }
    $("#companyID").val("");
  }
  function addNodeWithLabel(id, label) {
    if(nodes.get(id) == undefined) {
      try {
        nodes.add({
          id: id,
          label: label
        });
      }
      catch (err) {
        console.log(err);
      }
    } 
    else {
      console.log("node exists already");
    }    
    $("#companyID").val("");
  }
  function updateNode() {
    try {
      nodes.update({
        id: document.getElementById('node-id').value,
        label: document.getElementById('node-label').value
      });
    }
    catch (err) {
      alert(err);
    }
  }
  function removeNode() {
    try {
      nodes.remove({id: document.getElementById('node-id').value});
    }
    catch (err) {
      alert(err);
    }
  }
  function addEdge() {
    try {
      var edgeId = $('#supplierID').text() + "_" + $('#clientID').text();
      edges.add({
        id: edgeId,
        from: $('#supplierID').text(),
        to: $('#clientID').text()
      });
    }
    catch (err) {
      alert(err);
    }
  }
  function addEdgeLong(id, from, to) {
    if(edges.get(id) == undefined) {
      try {
        edges.add({
          id: id,
          from: from,
          to: to
        });
      }
      catch (err) {
        alert(err);
      }
    }
    else {
      console.log("edge already exists");
    }
  }
  function updateEdge(id, from, to, label) {
    console.log("update edge");
    if(edges.get(id) == undefined) {
      console.log("edge with id: " + id + " doesn't exist");
      var edgesArray = network.view.body.edges; // --- get edges of graph ---
      $.each( edgesArray, function( key, value ) {
        //console.debug( key + ": " + value );
        console.log(edgesArray[key].id);
      });
    }
    try {
      edges.update({
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
  function removeEdge() {
    try {
      edges.remove({id: document.getElementById('edge-id').value});
    }
    catch (err) {
      alert(err);
    }
  }
  function draw() {
    nodes = new vis.DataSet();  // nodes array
    nodes.on('*', function () {
      document.getElementById('nodes').innerHTML = JSON.stringify(nodes.get(), null, 4);
    });
    /*
    nodes.add([
      {id: 'DEFH655EHJ22', label: 'Audi AG'},
      {id: 'DEHAJ0BMSH92', label: 'AB Auto Büsgen GmbH & Co. KG'},
      {id: 'DE0ECV5NKG14', label: 'Limbacher Bremsbelag GmbH'},
      {id: 'DE3AXFM5V484', label: 'DAT Dräxlmaier Automotivtechnik GmbH'},
      {id: 'DE181EDU2L53', label: 'Schlegl Fahrzeugkomponenten e.K.'},
      {id: 'DEBBZ6V91H79', label: 'Hyva Germany GmbH'},
      {id: 'DEUEUHCEZX39', label: 'TRIDUM Automotive GmbH & Co. Electronics KG'}
    ]);
    */
    edges = new vis.DataSet();  // edges array
    edges.on('*', function () {
        document.getElementById('edges').innerHTML = JSON.stringify(edges.get(), null, 4);
    });
    /*
    edges.add([
        {id: '1', from: 'DEHAJ0BMSH92', to: 'DEFH655EHJ22'},
        {id: '2', from: 'DE0ECV5NKG14', to: 'DEFH655EHJ22'},
        {id: '3', from: 'DE3AXFM5V484', to: 'DEFH655EHJ22'},
        {id: '4', from: 'DE181EDU2L53', to: 'DE3AXFM5V484'},
        {id: '5', from: 'DEUEUHCEZX39', to: 'DE3AXFM5V484'},
        {id: '6', from: 'DEFH655EHJ22', to: 'DEBBZ6V91H79'}
    ]);
    */

    // create a network
    var container = document.getElementById('network');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
    //clickToUse: true,
    //Edges
      edges:{
        arrows: {
          to:     {enabled: true, scaleFactor:1},
          middle: {enabled: false, scaleFactor:1},
          from:   {enabled: false, scaleFactor:1}
        },
        arrowStrikethrough: true,
       "color": {
          "color": "#0000ff",
          "highlight": "#006400",
          "inherit": false
        },
        dashes: false,
        font: {
          color: '#343434',
          size: 14, // px
          face: 'arial',
          background: 'none',
          strokeWidth: 2, // px
          strokeColor: '#ffffff',
          align:'horizontal'
        },
        hidden: false,
        hoverWidth: 1.5,
        label: undefined,
        labelHighlightBold: true,
        length: undefined,
        physics: true,
        scaling:{
          min: 1,
          max: 15,
          label: {
            enabled: true,
            min: 14,
            max: 30,
            maxVisible: 30,
            drawThreshold: 5
          },
          customScalingFunction: function (min,max,total,value) {
            if (max === min) {
              return 0.5;
            }
            else {
              var scale = 1 / (max - min);
              return Math.max(0,(value - min)*scale);
            }
          }
        },
        selectionWidth: 1,
        selfReferenceSize:20,
        shadow:{
          enabled: false,
          color: 'rgba(0,0,0,0.5)',
          size:10,
          x:5,
          y:5
        },
        smooth: {
          enabled: true,
          type: "dynamic",
          roundness: 0.5
        },
        title:undefined,
        width: 1,
        value: undefined
      },
    //Edges
    //Groups
      groups:{
        useDefaultGroups: true,
        myGroupId:{
          /*node options*/
        }
      },
    //Groups
    //Interaction
      interaction:{
        dragNodes:true,
        dragView: true,
        hideEdgesOnDrag: false,
        hideNodesOnDrag: false,
        hover: false,
        hoverConnectedEdges: true,
        keyboard: {
          enabled: false,
          speed: {x: 10, y: 10, zoom: 0.02},
          bindToWindow: true
        },
        multiselect: false,
        navigationButtons: true,
        selectable: true,
        selectConnectedEdges: true,
        tooltipDelay: 300,
        zoomView: true
      },
    //Interaction
    //Layout
      layout: {
        randomSeed: undefined,
        improvedLayout:true,
        hierarchical: {
          enabled:true,
          levelSeparation: 450,
          nodeSpacing: 100,
          treeSpacing: 400,
          blockShifting: true,
          edgeMinimization: true,
          parentCentralization: true,
          direction: 'LR',        // UD, DU, LR, RL
          sortMethod: 'directed'   // hubsize, directed
        }
      },
    //Layout
    //Manipulation
      
    //Manipulation
    //NOdes
      nodes:{
        borderWidth: 1,
        borderWidthSelected: 2,
        brokenImage:undefined,
        color: {
          border: '#000000',
          background: '#0083ff',
          highlight: {
            border: '#000000',
            background: '#006400'
          },
          hover: {
            border: '#000000',
            background: '#006400'
          }
        },
        fixed: {
          x:false,
          y:false
        },
        font: {
          color: '#343434',
          size: 14, // px
          face: 'arial',
          background: 'none',
          strokeWidth: 0, // px
          strokeColor: '#ffffff',
          align: 'center'
        },
        group: undefined,
        hidden: false,
        image: undefined,
        label: undefined,
        labelHighlightBold: true,
        level: undefined,
        mass: 1,
        physics: true,
        scaling: {
          min: 1,
          max: 30,
          label: {
            enabled: false,
            min: 14,
            max: 30,
            maxVisible: 30,
            drawThreshold: 5
          },
          customScalingFunction: function (min,max,total,value) {
            if (max === min) {
              return 0.5;
            }
            else {
              //let scale = 1 / (max - min);
              return Math.max(0,(value - min)*scale);
            }
          }
        },
        shadow:{
          enabled: false,
          color: 'rgba(0,0,0,0.5)',
          size:10,
          x:5,
          y:5
        },
        shape: 'dot',
        shapeProperties: {
          borderDashes: false, // only for borders
          borderRadius: 6,     // only for box shape
          interpolation: false,  // only for image and circularImage shapes
          useImageSize: false,  // only for image and circularImage shapes
          useBorderWithImage: false  // only for image shape
        },
        size: 15,
        title: undefined,
        value: undefined
      }
    //Nodes
    //Physics
    
    //Physics
  };
  network = new vis.Network(container, data, options);
  console.debug(network.view.body.nodes);
  console.debug(network.view.body.edges);
 
  network.on("click", function (params) {  
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h5>Click event:</h5>' + JSON.stringify(params, null, 4);
    var companyVal = JSON.stringify(params, null,0);
    dataJson = JSON.parse(companyVal);
    //console.debug(dataJson.edges);
    $('#debugCompanyID').html(dataJson.nodes);
    $('#selectedCompanyName').html(dataJson.nodes);
    var edgesArray = network.view.body.edges; // --- get edges of graph ---
    var edgesArrayInt = []; // --- calculate biggest int in edges array --
    $.each( edgesArray, function( key, value ) {
      //console.debug( key + ": " + value );
      edgesArrayInt.push(key);
      return edgesArrayInt;
    });
    var maxValueInArray = Math.max.apply(Math, edgesArrayInt);
    console.debug('Largest int in Array: ' + maxValueInArray);  // --- calculate biggest int in edges array --
    var nextEdge = maxValueInArray + 1;
    $('#edgeID').text(nextEdge);

    //--- parse json file to get company info ---
    $.getJSON( "js/data.json").then(function(data) {
      $.each( data, function( key, val ) {
        if (val.id == dataJson.nodes ){
          $('.selectedCompanyDetails').show();
          $('#debugCompanyName').text(val.label);
          $('#td711').text(val.score);
        }
      });
    })
    .fail(function() {
      console.debug('Error loading js/data.json');
    });
    $.getJSON( "js/dataplus.json").then(function(data) {
      $.each( data, function( key, val ) {
        //console.debug(dataJson.nodes);
        if (val.id == dataJson.nodes ){
          $('#map').remove();
          $('#title12').append('<div id="map"></div>');
            var map = L.map('map', {
            center : [val.geo.lat,val.geo.lon],
            zoom : 16
          });
          L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'
          }).addTo(map);
          L.control.scale({
            'imperial': false
          }).addTo(map);
          L.marker([val.geo.lat,val.geo.lon]).addTo(map)
          .bindPopup('<b>'+val.name+'</b><br><b>'+val.street+'</b><br><b>'+val.zip+'</b><b>'+val.city+'</b>').openPopup();

          $("#td72 ul").empty();
          $("#td32 ul").empty();
          $("#td11").empty().append(val.name);
          $("#td12").empty().append(val.url);
          $("#td21").empty().append(val.street);
          $("#td22").empty().append(val.email);
          $("#td31").empty().append(val.zip + ' ' + val.city);
          $.each( val.socialMedia, function( key, val ) {
            $("#td32 ul").append('<li><span class="capizalize">' + key + '</span>: ' + val + '</li>');
          });
          
          $("#td41").empty().append(val.phone);
          $("#td42").empty().append('');
          $("#td51").empty().append(val.fax);
          $("#td52").empty().append('');
          $("#td61").empty().append(val.legalForm);
          $("#td62").empty().append(val.externalIds.hr.court + ' ' + val.externalIds.hr.type + ' ' + val.externalIds.hr.number);
          $("#td71").empty().append(val.capital);
          $.each( val.industries.nace, function( key, val ) {
            $("#td72 ul").append('<li>' + val.title + '</li>');
          });
          
          $("#td81").empty().append('Jahr: ' + val.revenue.year + ' Gesamt: ' + val.revenue.code);
          $("#td82").empty().append('Jahr: ' + val.employees.year + ' Gesamt: ' + val.employees.code);
          $("#td91").empty().append('');
          $("#td92").empty().append('');
      
          //$('#selectedCompanyDetailsContent').text(val.street);
          
        }
      });
    })
    .fail(function() {
      console.debug('Error loading js/dataplus.json');
    });
     $.getJSON( "js/events.json").then(function(data) {
      $.each( data, function( key, val ) {
        //console.debug(dataJson.nodes);
        if (val.id == dataJson.nodes ){
          $.each( val.events, function( key, val ) {
            $("#td101").append('<section class="profile event hrb_other" id=""><header><svg class="icon-news" style="width:20px !important;height:20px !important;"><use xlink:href="#icon-news"></use></svg><time></time>'+val.value+'</header><main></main><footer></footer></section> ');
      
          });
         
        }
      });
    })
    .fail(function() {
      console.debug('Error loading js/events.json');
    });

    //--- parse json file to get company info ---
    //--- draw circleGraph below companyDetails ---
    $('svg').remove();
    if (dataJson.nodes == 'DE3AXFM5V484'){
      $.getScript( "js/DE3AXFM5V484.js" )
        .done(function( script, textStatus ) {
          console.log( textStatus );
        })
        .fail(function( jqxhr, settings, exception ) {
          $( "div.log" ).text( "Triggered ajaxError handler." );
      });
    } else if (dataJson.nodes == 'DE9WNYUSMP94'){
      $.getScript( "js/DE9WNYUSMP94.js" )
        .done(function( script, textStatus ) {
          console.log( textStatus );
        })
        .fail(function( jqxhr, settings, exception ) {
          $( "div.log" ).text( "Triggered ajaxError handler." );
      });
    } else if (dataJson.nodes == 'DEA1ES9N0148'){
      $.getScript( "js/DEA1ES9N0148.js" )
        .done(function( script, textStatus ) {
          console.log( textStatus );
        })
        .fail(function( jqxhr, settings, exception ) {
          $( "div.log" ).text( "Triggered ajax Error handler." );
      });
    } else if (dataJson.nodes == 'DEBBZ6V91H79'){
      $.getScript( "js/DEBBZ6V91H79.js" )
        .done(function( script, textStatus ) {
          console.log( textStatus );
        })
        .fail(function( jqxhr, settings, exception ) {
          $( "div.log" ).text( "Triggered ajaxError handler." );
      });
    } else if (dataJson.nodes == 'DEFH655EHJ22'){
      $.getScript( "js/DEFH655EHJ22.js" )
        .done(function( script, textStatus ) {
          console.log( textStatus );
        })
        .fail(function( jqxhr, settings, exception ) {
          $( "div.log" ).text( "Triggered ajaxError handler." );
      });
    } else if (dataJson.nodes == 'DEJTTYJWPJ09'){
      $.getScript( "js/DEJTTYJWPJ09.js" )
        .done(function( script, textStatus ) {
          console.log( textStatus );
        })
        .fail(function( jqxhr, settings, exception ) {
          $( "div.log" ).text( "Triggered ajaxError handler." );
      });
    } else if (dataJson.nodes == 'DES02NCLGB62'){
      $.getScript( "js/DES02NCLGB62.js" )
        .done(function( script, textStatus ) {
          console.log( textStatus );
        })
        .fail(function( jqxhr, settings, exception ) {
          $( "div.log" ).text( "Triggered ajaxError handler." );
      });
    }
    //--- draw circleGraph below companyDetails ---
  });
}
//--- vis graph ---
  
//--- scm-app.js ---

var url_server = "https://lucid-dataplatform.eccenca.com/";
var user = "x";
var pw = "x";
var access_token = "";

function getAccessToken(url_server, user, pw) {
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

var executeMetric = function (metric) {
  readFile("queries/delivery_in_full.rq", "query");
}
var drawSupplyChain = function () {
  console.log("draw supply chain");
  readFile("queries/getSupplyChain.rq", "supplyChain");
}
var getSuppliers_2 = function () {
  readFile("queries/getCompanies.rq", "getSuppliers");
}
function readFile(fileName, processType) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", fileName, true);
  rawFile.overrideMimeType('text/plain');
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if(rawFile.status === 200 || rawFile.status == 0) {
        var response = rawFile.responseText;
        switch(processType) {
          case "query": runSparqlQuery(response);
          break;
          case "getSuppliers": processSuppliers(response);
          break;
          case "supplyChain": getProcesses(response);
          break;  
          default: console.log("readFile failed: " + rawFile.responseText)
        }
      }
    }
  }
  rawFile.send();
}
var runSparqlQuery = function(query) {
  var sparql_query = "query=" + encodeURIComponent(query);
  // var sparql_query = "query=" + encodeURIComponent("SELECT ?s WHERE {?s ?p ?o} LIMIT 10");
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
      // addEdge(11, "Limbacher Bremsbelag GmbH", "Albrecht Auto-Zubehör GmbH", metricResult)
    }
  });
  xhr.send(sparql_query);
}
function processSuppliers(query) {
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

var getProcesses = function(query) {
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
        $.each(processes, function(i, v) {   // for each process
          var processArray = processes[i];
          // read process value, supplier and client
          $.each(processArray, function(j, v) {
            console.log(processArray[j]);
            var supplierVatID = processArray[j].supplierVatID.value;
            var supplierName = processArray[j].supplier.value;
            var clientVatID = processArray[j].clientVatID.value;
            var clientName = processArray[j].client.value;
            addNodeWithLabel(supplierVatID, supplierName);
            addNodeWithLabel(clientVatID, clientName);
            var edgeId = supplierVatID + "_" + clientVatID ;
            addEdgeLong(edgeId, supplierVatID, clientVatID);
            // addNode(processArray[j].supplier.value, s_longName);
            // addNode(processArray[j].client.value, c_longName); 
            // addEdge(j, processArray[j].supplier.value, processArray[j].client.value, "");
          });
        });
      }
    });
  }
  var updateQuery = function(query) {
  // DELETE DATA { GRAPH <test1> { <http://lucid.implisense.com/companies/DE2FFGESNX37> a <http://schema.org/Corporation> .}}; 

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
    // executeMetric();
    // getProcesses();
    // runMetric();
  });
