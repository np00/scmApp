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
        color: {
          color:'#0000ff',
          highlight:'#008000',
          hover: '#848484',
          inherit: 'from',
          opacity:1.0
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
          border: '#fff000',
          background: '#adadff',
          highlight: {
            border: '#fff000',
            background: '#008000'
          },
          hover: {
            border: '#2B7CE9',
            background: '#D2E5FF'
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

  }
  //--- vis graph ---
  