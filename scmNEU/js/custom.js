$(function() {  // load when DOM ready
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
      edges.add({
        id: $('#edgeID').text(),
        from: $('#supplierID').text(),
        to: $('#recipentID').text()
      });
    }
    catch (err) {
      alert(err);
    }
  }
  function updateEdge() {
    try {
      edges.update({
        id: document.getElementById('edge-id').value,
        from: document.getElementById('edge-from').value,
        to: document.getElementById('edge-to').value
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
    nodes.add([
      {id: 'DEFH655EHJ22', label: 'Audi AG'},
      {id: 'DEHAJ0BMSH92', label: 'AB Auto Büsgen GmbH & Co. KG'},
      {id: 'DE9WNYUSMP94', label: 'Karosseriewerk Heinrich Meyer GmbH'},
      {id: 'DEA1ES9N0148', label: 'MC Syncro Supply GmbH'},
      {id: 'DEKOJEEVVG32', label: 'Kunststofftechnik Mittelhäuser GmbH & Co. KG'}
    ]);
    edges = new vis.DataSet();  // edges array
    edges.on('*', function () {
        document.getElementById('edges').innerHTML = JSON.stringify(edges.get(), null, 4);
    });
    edges.add([
        {id: '1', from: 'DEFH655EHJ22', to: 'DEA1ES9N0148'},
        {id: '2', from: 'DEFH655EHJ22', to: 'DE9WNYUSMP94'},
        {id: '3', from: 'DEHAJ0BMSH92', to: 'DEKOJEEVVG32'},
        {id: '4', from: 'DEHAJ0BMSH92', to: 'DEA1ES9N0148'}
    ]);

    // create a network
    var container = document.getElementById('network');
    var data = {
        nodes: nodes,
        edges: edges
    };
     var options = {
    //Configure
      configure: {
        enabled: false,
        filter: 'nodes,edges',
        container: network,
        showButton: true
      },
    //Configure
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
          treeSpacing: 200,
          blockShifting: true,
          edgeMinimization: true,
          parentCentralization: true,
          direction: 'LR',        // UD, DU, LR, RL
          sortMethod: 'hubsize'   // hubsize, directed
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
    //console.log(dataJson.edges);
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
    $.getJSON( "js/data.json", function( data ) {
      var items = [];
      $.each( data, function( key, val ) {
        if (val.id == dataJson.nodes ){
          $('#debugCompanyName').text(val.label);
        }
      });
      
      $( "<ul/>", { //--- list all comapanies ---
        "class": "companyList",
        html: items.join( "" )
      }).appendTo( "body" );  //--- list all comapanies ---
    });
    //--- parse json file to get company info ---
  });
}
  //--- vis graph ---