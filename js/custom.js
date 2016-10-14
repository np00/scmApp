/**
 *  custom js functions 09/2016 Implisense GmbH
 */
$(function() {
function updateTextarea() {
    var ta = document.getElementById('data');
    ta.value = (ta.value.slice(0,-1));
    $("#data").val(ta.value);
  }
  $("#senderscm-add").click(function(){
    var myCompanyInput = $('#scmInfoNode').html();
    myCompanyInput = myCompanyInput.replace(/\&amp;/g,'&');
    $('input#sender').val("\"" + myCompanyInput + "\"");
  });
  $("#getterscm-add").click(function(){
    var myGetterInput = $('#scmInfoNode').html();
    myGetterInput = myGetterInput.replace(/\&amp;/g,'&');
    $('input#getter').val("\"" + myGetterInput + "\"");
  });
  $("#myCompany-add").click(function(){
    updateTextarea();
    var txt = $.trim($("#myCompany").val());
    $("#data").val($("#data").val() + txt + ";}");
    draw();
  });
  $("#customer-add").click(function(){
    updateTextarea();
    var txt = $.trim($("#customer").val());
    $("#data").val($("#data").val() + txt + ";}");
    draw();
  });
  $("#relationship-add").click(function(){
    updateTextarea();
    var sender = $.trim($("#sender").val());
    var getter = $.trim($("#getter").val());
    var markVal = $("#mark option:selected").text();
    if( !getter ){
      alert ('Bitte Empfänger Firma eingeben');
    }
    else if( !sender ){
      alert ('Bitte Zulieferer Firma eingeben');
    }
    else if( sender && getter ){
      $("#data").val($("#data").val() + sender + "->" + getter + ";}");
      draw();
      $("html, body").animate({
        scrollTop: 0
      }, 600);    
    }
  });
  // create a network
  var container = document.getElementById('mynetwork');
  var options = {
    //Configure
      configure: {
        enabled: false,
        filter: 'nodes,edges',
        container: mynetwork,
        showButton: true
      },
    //Configure
    //Edges
      edges:{
        arrows: {
          to:     {enabled: false, scaleFactor:1},
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
          background: '#0000ff',
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
  var data = {};
  var network = new vis.Network(container, data, options);

  $('#draw').click(draw);
  $('#myCompany-add').click(draw);
  $('#customer-add').click(draw);
  $('#relationship-add').click(draw);


  $('a.example').click(function (event) {
    var url = $(event.target).data('url');
    $.get(url)
        .done(function(dotData) {
          $('#data').val(dotData);
          draw();
        })
        .fail(function () {
          $('#error').html('Error: Cannot fetch the example data because of security restrictions in JavaScript. Run the example from a server instead of as a local file to resolve this problem. Alternatively, you can copy/paste the data of DOT graphs manually in the textarea below.');
          resize();
        });
  });

  $(window).resize(resize);
  $(window).load(draw);

  $('#data').keydown(function (event) {
    if (event.ctrlKey && event.keyCode === 13) { // Ctrl+Enter
      draw();
      event.stopPropagation();
      event.preventDefault();
    }
  });

  function resize() {
    $('#contents').height($('body').height() - $('#header').height() - 30);
  }

  function draw () {
    try {
      resize();
      $('#error').html('');

      // Provide a string with data in DOT language
      data = vis.network.convertDot($('#data').val());

      network.setData(data);
    }
    catch (err) {
      // set the cursor at the position where the error occurred
      var match = /\(char (.*)\)/.exec(err);
      if (match) {
        var pos = Number(match[1]);
        var textarea = $('#data')[0];
        if(textarea.setSelectionRange) {
          textarea.focus();
          textarea.setSelectionRange(pos, pos);
        }
      }

      // show an error message
      $('#error').html(err.toString());
    }
  }
    var network = new vis.Network(container, data, options);
    
    network.on("click", function (params) {
      
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
        var companyPre = JSON.stringify(params, null,0);
        dataJson = JSON.parse(companyPre);
        console.log(dataJson.edges);
        //alert (dataJson.nodes);
        $('#companyNamePre').html(dataJson.nodes);
        $('#scmInfoNode').html(dataJson.nodes);
        $('.scmaddrel').show();
        $('.infocompany').show();
        var json = {
    "profiles": [
        {
  "id":"DEFH655EHJ22",
  "name":"\"AUDI AG\"",
  "street":"Auto-Union-Straße 1",
  "zip":"85045",
  "city":"Ingolstadt",
  "score":"0.01",
  "geo": {
    "lat": 48.781126,
    "lon": 11.424196
  },
  "active": true,
  "phone":"+49 841 890",
  "fax":"+49 841 8932524",
  "email":"kundenbetreuung@audi.de",
  "url":"http://www.uni-zum-anfassen.de/",
  "socialMedia": {
    "facebook":"https://www.facebook.com/Audi.AG",
    "googleplus":"https://plus.google.com/+audide/posts",
    "twitter":"https://twitter.com/audi_press"
  },
  "legalForm":"Aktiengesellschaft",
  "externalIds": {
    "hr": {
      "court":"Ingolstadt",
      "type":"HRB",
      "number":"1"
    },
    "vat":"DE811115368",
    "ebid":"2500965832053"
  },
  "foundingDate": -1562806800000,
  "capital":"110080000.00 EUR",
  "timestamp": 1470337101948,
  "props":{"topics": [
    {
      "name": "Anlagen",
      "score": 0.1498919576406479
    },
    {
      "name": "Anspruch",
      "score": 0.16640402376651764
    },
    {
      "name": "Apps",
      "score": 0.17760318517684937
    },
    {
      "name": "Arbeitsklima",
      "score": 0.2334306538105011
    },
    {
      "name": "Arbeitssicherheit",
      "score": 0.09607437252998352
    },
    {
      "name": "Asien",
      "score": 0.34057825803756714
    },
    {
      "name": "Ausbildung",
      "score": 0.17558012902736664
    },
    {
      "name": "Big Data Technologien",
      "score": 0.10668696463108063
    },
    {
      "name": "Business Intelligence",
      "score": 0.24279381334781647
    },
    {
      "name": "CRM",
      "score": 0.1374492347240448
    },
    {
      "name": "Chat",
      "score": 0.16966873407363892
    },
    {
      "name": "Cloud",
      "score": 0.08628088980913162
    },
    {
      "name": "Community",
      "score": 0.16161715984344482
    },
    {
      "name": "Design",
      "score": 0.2979874908924103
    },
    {
      "name": "Dynamik",
      "score": 0.42958971858024597
    },
    {
      "name": "E-Commerce",
      "score": 0.07060132920742035
    },
    {
      "name": "ERP",
      "score": 0.10178948193788528
    },
    {
      "name": "Effizienz",
      "score": 0.29141950607299805
    },
    {
      "name": "Einfachheit",
      "score": 0.2573000490665436
    },
    {
      "name": "Emotionalität",
      "score": 0.4172077178955078
    },
    {
      "name": "Energieeffizienz",
      "score": 0.10945062339305878
    },
    {
      "name": "Erdgas",
      "score": 0.0463491752743721
    },
    {
      "name": "Erfahrungen",
      "score": 0.13755199313163757
    },
    {
      "name": "Erlebnis",
      "score": 0.17307837307453156
    },
    {
      "name": "Ethik",
      "score": 0.3613715171813965
    },
    {
      "name": "Europa",
      "score": 0.10870940238237381
    },
    {
      "name": "Expertise",
      "score": 0.32443419098854065
    },
    {
      "name": "Fabrik",
      "score": 0.18406738340854645
    },
    {
      "name": "Familienfreundlichkeit",
      "score": 0.20780029892921448
    },
    {
      "name": "Fertigung",
      "score": 0.11811571568250656
    },
    {
      "name": "Flexibilität",
      "score": 0.37987929582595825
    },
    {
      "name": "Hochwertigkeit",
      "score": 0.9922071099281311
    },
    {
      "name": "Innovation",
      "score": 0.4593687355518341
    },
    {
      "name": "Intelligenz",
      "score": 0.3958545923233032
    },
    {
      "name": "Internationalität",
      "score": 0.4266054332256317
    },
    {
      "name": "Investitionen",
      "score": 0.22110621631145477
    },
    {
      "name": "Klimaschutz",
      "score": 0.2055424004793167
    },
    {
      "name": "Kompetenz",
      "score": 0.3906082808971405
    },
    {
      "name": "Komplexität",
      "score": 0.18013711273670197
    },
    {
      "name": "Kontinuität",
      "score": 0.19684003293514252
    },
    {
      "name": "Kosten",
      "score": 0.18912383913993835
    },
    {
      "name": "Kreativität",
      "score": 0.07459895312786102
    },
    {
      "name": "Kundenorientierung",
      "score": 0.1432405263185501
    },
    {
      "name": "Lager",
      "score": 0.029099687933921814
    },
    {
      "name": "Langfristigkeit",
      "score": 0.1434309333562851
    },
    {
      "name": "Lernen",
      "score": 0.1548951268196106
    },
    {
      "name": "Loyalität",
      "score": 0.33920133113861084
    },
    {
      "name": "Luxus",
      "score": 0.061154283583164215
    },
    {
      "name": "Methodik",
      "score": 0.26133590936660767
    },
    {
      "name": "Modern",
      "score": 0.17408908903598785
    },
    {
      "name": "Nachhaltigkeit",
      "score": 0.5226171016693115
    },
    {
      "name": "Naher Osten",
      "score": 0.08333736658096313
    },
    {
      "name": "Niederlassungen",
      "score": 0.28369972109794617
    },
    {
      "name": "Nordamerika",
      "score": 0.20277778804302216
    },
    {
      "name": "Offenheit",
      "score": 0.4980722963809967
    },
    {
      "name": "Optimierung",
      "score": 0.20385070145130157
    },
    {
      "name": "Perfektionismus",
      "score": 0.10920999199151993
    },
    {
      "name": "Photovoltaik",
      "score": 0.0392872579395771
    },
    {
      "name": "Produktivität",
      "score": 0.28456661105155945
    },
    {
      "name": "Professionalität",
      "score": 0.10082913935184479
    },
    {
      "name": "Prozesse",
      "score": 0.30106285214424133
    },
    {
      "name": "Qualität",
      "score": 0.7739133834838867
    },
    {
      "name": "Regionalität",
      "score": 0.035730864852666855
    },
    {
      "name": "Schnelligkeit",
      "score": 0.02639426290988922
    },
    {
      "name": "Servicenummer",
      "score": 0.02273358218371868
    },
    {
      "name": "Sicherheit",
      "score": 0.11041080951690674
    },
    {
      "name": "Social Media",
      "score": 0.345510870218277
    },
    {
      "name": "Solaranlagen",
      "score": 0.02606819197535515
    },
    {
      "name": "Spaß",
      "score": 0.006511192303150892
    },
    {
      "name": "Standorte",
      "score": 0.44678357243537903
    },
    {
      "name": "Stellenangebote",
      "score": 0.4694618284702301
    },
    {
      "name": "Südamerika",
      "score": 0.07208507508039474
    },
    {
      "name": "Teams",
      "score": 0.34561988711357117
    },
    {
      "name": "Tradition",
      "score": 0.3548867404460907
    },
    {
      "name": "Transparenz",
      "score": 0.21479016542434692
    },
    {
      "name": "Umweltfreundlichkeit",
      "score": 0.11361807584762573
    },
    {
      "name": "Unabhängigkeit",
      "score": 0.13092637062072754
    },
    {
      "name": "Vertraulichkeit",
      "score": 0.5413267016410828
    },
    {
      "name": "Videos",
      "score": 0.10752876847982407
    },
    {
      "name": "Wachstum",
      "score": 0.25045204162597656
    },
    {
      "name": "Wagniskapital",
      "score": 0.0785255879163742
    },
    {
      "name": "Wirtschaftlichkeit",
      "score": 0.17178556323051453
    },
    {
      "name": "Zuverlässigkeit",
      "score": 0.19715163111686707
    }
  ],
  "properties": [
    {
      "superType": "Anlagen",
      "score": 0.1498919576406479
    },
    {
      "superType": "Anspruch",
      "score": 0.16640402376651764
    },
    {
      "superType": "Apps",
      "score": 0.17760318517684937
    },
    {
      "superType": "Arbeitsklima",
      "score": 0.2334306538105011
    },
    {
      "superType": "Arbeitssicherheit",
      "score": 0.09607437252998352
    },
    {
      "superType": "Asien",
      "score": 0.34057825803756714
    },
    {
      "superType": "Ausbildung",
      "score": 0.17558012902736664
    },
    {
      "superType": "Big Data Technologien",
      "score": 0.10668696463108063
    },
    {
      "superType": "Business Intelligence",
      "score": 0.24279381334781647
    },
    {
      "superType": "CRM",
      "score": 0.1374492347240448
    },
    {
      "superType": "Chat",
      "score": 0.16966873407363892
    },
    {
      "superType": "Cloud",
      "score": 0.08628088980913162
    },
    {
      "superType": "Community",
      "score": 0.16161715984344482
    },
    {
      "superType": "Design",
      "score": 0.2979874908924103
    },
    {
      "superType": "Dynamik",
      "score": 0.42958971858024597
    },
    {
      "superType": "E-Commerce",
      "score": 0.07060132920742035
    },
    {
      "superType": "ERP",
      "score": 0.10178948193788528
    },
    {
      "superType": "Effizienz",
      "score": 0.29141950607299805
    },
    {
      "superType": "Einfachheit",
      "score": 0.2573000490665436
    },
    {
      "superType": "Emotionalität",
      "score": 0.4172077178955078
    },
    {
      "superType": "Energieeffizienz",
      "score": 0.10945062339305878
    },
    {
      "superType": "Erdgas",
      "score": 0.0463491752743721
    },
    {
      "superType": "Erfahrungen",
      "score": 0.13755199313163757
    },
    {
      "superType": "Erlebnis",
      "score": 0.17307837307453156
    },
    {
      "superType": "Ethik",
      "score": 0.3613715171813965
    },
    {
      "superType": "Europa",
      "score": 0.10870940238237381
    },
    {
      "superType": "Expertise",
      "score": 0.32443419098854065
    },
    {
      "superType": "Fabrik",
      "score": 0.18406738340854645
    },
    {
      "superType": "Familienfreundlichkeit",
      "score": 0.20780029892921448
    },
    {
      "superType": "Fertigung",
      "score": 0.11811571568250656
    },
    {
      "superType": "Flexibilität",
      "score": 0.37987929582595825
    },
    {
      "superType": "Hochwertigkeit",
      "score": 0.9922071099281311
    },
    {
      "superType": "Innovation",
      "score": 0.4593687355518341
    },
    {
      "superType": "Intelligenz",
      "score": 0.3958545923233032
    },
    {
      "superType": "Internationalität",
      "score": 0.4266054332256317
    },
    {
      "superType": "Investitionen",
      "score": 0.22110621631145477
    },
    {
      "superType": "Klimaschutz",
      "score": 0.2055424004793167
    },
    {
      "superType": "Kompetenz",
      "score": 0.3906082808971405
    },
    {
      "superType": "Komplexität",
      "score": 0.18013711273670197
    },
    {
      "superType": "Kontinuität",
      "score": 0.19684003293514252
    },
    {
      "superType": "Kosten",
      "score": 0.18912383913993835
    },
    {
      "superType": "Kreativität",
      "score": 0.07459895312786102
    },
    {
      "superType": "Kundenorientierung",
      "score": 0.1432405263185501
    },
    {
      "superType": "Lager",
      "score": 0.029099687933921814
    },
    {
      "superType": "Langfristigkeit",
      "score": 0.1434309333562851
    },
    {
      "superType": "Lernen",
      "score": 0.1548951268196106
    },
    {
      "superType": "Loyalität",
      "score": 0.33920133113861084
    },
    {
      "superType": "Luxus",
      "score": 0.061154283583164215
    },
    {
      "superType": "Methodik",
      "score": 0.26133590936660767
    },
    {
      "superType": "Modern",
      "score": 0.17408908903598785
    },
    {
      "superType": "Nachhaltigkeit",
      "score": 0.5226171016693115
    },
    {
      "superType": "Naher Osten",
      "score": 0.08333736658096313
    },
    {
      "superType": "Niederlassungen",
      "score": 0.28369972109794617
    },
    {
      "superType": "Nordamerika",
      "score": 0.20277778804302216
    },
    {
      "superType": "Offenheit",
      "score": 0.4980722963809967
    },
    {
      "superType": "Optimierung",
      "score": 0.20385070145130157
    },
    {
      "superType": "Perfektionismus",
      "score": 0.10920999199151993
    },
    {
      "superType": "Photovoltaik",
      "score": 0.0392872579395771
    },
    {
      "superType": "Produktivität",
      "score": 0.28456661105155945
    },
    {
      "superType": "Professionalität",
      "score": 0.10082913935184479
    },
    {
      "superType": "Prozesse",
      "score": 0.30106285214424133
    },
    {
      "superType": "Qualität",
      "score": 0.7739133834838867
    },
    {
      "superType": "Regionalität",
      "score": 0.035730864852666855
    },
    {
      "superType": "Schnelligkeit",
      "score": 0.02639426290988922
    },
    {
      "superType": "Servicenummer",
      "score": 0.02273358218371868
    },
    {
      "superType": "Sicherheit",
      "score": 0.11041080951690674
    },
    {
      "superType": "Social Media",
      "score": 0.345510870218277
    },
    {
      "superType": "Solaranlagen",
      "score": 0.02606819197535515
    },
    {
      "superType": "Spaß",
      "score": 0.006511192303150892
    },
    {
      "superType": "Standorte",
      "score": 0.44678357243537903
    },
    {
      "superType": "Stellenangebote",
      "score": 0.4694618284702301
    },
    {
      "superType": "Südamerika",
      "score": 0.07208507508039474
    },
    {
      "superType": "Teams",
      "score": 0.34561988711357117
    },
    {
      "superType": "Tradition",
      "score": 0.3548867404460907
    },
    {
      "superType": "Transparenz",
      "score": 0.21479016542434692
    },
    {
      "superType": "Umweltfreundlichkeit",
      "score": 0.11361807584762573
    },
    {
      "superType": "Unabhängigkeit",
      "score": 0.13092637062072754
    },
    {
      "superType": "Vertraulichkeit",
      "score": 0.5413267016410828
    },
    {
      "superType": "Videos",
      "score": 0.10752876847982407
    },
    {
      "superType": "Wachstum",
      "score": 0.25045204162597656
    },
    {
      "superType": "Wagniskapital",
      "score": 0.0785255879163742
    },
    {
      "superType": "Wirtschaftlichkeit",
      "score": 0.17178556323051453
    },
    {
      "superType": "Zuverlässigkeit",
      "score": 0.19715163111686707
    }
  ],
  "inLinks": [
    {
      "id": "DEWVWCPDN723",
      "name": "!A&C Gesellschaft für Mittelstandsberatung mbH. Auxilium et Consilium-Rat und Hilfe",
      "url": "http://www.ac-mittelstand.de/"
    },
    {
      "id": "DE9WA29AUT26",
      "name": "33max.com GmbH",
      "url": "http://www.33max.de/"
    },
    {
      "id": "DE5Y4F404264",
      "name": "ABC Umformtechnik GmbH",
      "url": "http://www.abc-umformtechnik.de/"
    },
    {
      "id": "DEJPCWWQAI05",
      "name": "ABC Umformtechnik GmbH & Co. KG",
      "url": "http://www.abc-umformtechnik.de/"
    },
    {
      "id": "DEGZR4UH5F88",
      "name": "ACC AutoCentrum Carl GmbH",
      "url": "http://www.vw-audi-vogtland.de/"
    },
    {
      "id": "DEN4735F3O64",
      "name": "ADLON Intelligent Solutions GmbH",
      "url": "http://adlon.de/"
    },
    {
      "id": "DENYGXX86Z00",
      "name": "AGENTUM-Construction GmbH",
      "url": "http://www.laschet-media.de/"
    },
    {
      "id": "DE8AN11L7O79",
      "name": "Ahsa Spedition und Logistik GmbH",
      "url": "http://www.ahsa.de/"
    },
    {
      "id": "DE3DD518S300",
      "name": "AHT Autohaus GmbH Thüringen",
      "url": "http://www.aht-autohaus.de/"
    },
    {
      "id": "DEU1K8YDNL05",
      "name": "Alpenhotel München OHG",
      "url": "http://www.alpenhotel-muenchen.de/"
    },
    {
      "id": "DEPHL4LLTO74",
      "name": "AMG Intellifast GmbH",
      "url": "http://www.intellifast.de/"
    },
    {
      "id": "DEG90PJNAI73",
      "name": "ascari GmbH",
      "url": "http://www.ascari.de/"
    },
    {
      "id": "DEFH655EHJ22",
      "name": "AUDI AG",
      "url": "http://www.audi.com/"
    },
    {
      "id": "DEIWU8QZPX19",
      "name": "Audi Club Nürnberg e.V.",
      "url": "http://www.ac-n.de/"
    },
    {
      "id": "DEIV2CSL8715",
      "name": "Audi Planung GmbH",
      "url": "http://www.audi-planung.de/"
    },
    {
      "id": "DEGK1881EJ47",
      "name": "Audi Zentrum Bremen Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DEGK1881EJ47",
      "name": "Audi Zentrum Bremen Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DEBTVCG0SY31",
      "name": "Audi Zentrum Koblenz GmbH.",
      "url": "http://www.audizentrum-koblenz.de/"
    },
    {
      "id": "DECK1JRS2Z17",
      "name": "Auto Bierschneider GmbH",
      "url": "http://bierschneider.de/"
    },
    {
      "id": "DEWLXSB8DT67",
      "name": "Auto Bierschneider GmbH",
      "url": "http://bierschneider.de/"
    },
    {
      "id": "DEDAB3X3RS87",
      "name": "Auto König GmbH & Co. KG",
      "url": "http://www.autokoenig.de/"
    },
    {
      "id": "DEHU4NIDG816",
      "name": "Auto Münch GmbH",
      "url": "http://www.automuench.de/"
    },
    {
      "id": "DE97V4V0TN41",
      "name": "Auto Seidl GmbH",
      "url": "http://www.autoseidl.de/"
    },
    {
      "id": "DEVR7YMFZ887",
      "name": "Auto Service Gassen GmbH",
      "url": "http://www.autoservice-gassen.de/"
    },
    {
      "id": "DEUUZFVTV289",
      "name": "Auto-Bohrmann GmbH, Volkswagenhändler, Mannheim-Feudenheim",
      "url": "http://www.auto-bohrmann.de/"
    },
    {
      "id": "DEMG5O49TV88",
      "name": "Auto-Göller GmbH",
      "url": "http://www.auto-goeller.de/"
    },
    {
      "id": "DET787IAX002",
      "name": "Auto-Kohler KG",
      "url": "http://www.auto-kohler.de/"
    },
    {
      "id": "DEV4I7VB1652",
      "name": "Auto-Neubeck GmbH",
      "url": "http://www.neubeck-automobile.de/"
    },
    {
      "id": "DE97XGW52C88",
      "name": "Auto-Röhr Vertriebs GmbH",
      "url": "http://www.auto-roehr.de/"
    },
    {
      "id": "DEN12EBMRH63",
      "name": "Auto-Schick GmbH",
      "url": "http://www.kilian-schick.de/"
    },
    {
      "id": "DEZ7VZ64O825",
      "name": "Autocenter Neuss KG",
      "url": "http://www.neuss-autocenter.de/"
    },
    {
      "id": "DEC6MZ269E21",
      "name": "Autohaus Bauer GmbH",
      "url": "http://autohausbauer.de/"
    },
    {
      "id": "DE2BF24CWN10",
      "name": "Autohaus Baur GmbH",
      "url": "http://www.autohaus-baur.de/"
    },
    {
      "id": "DE770L5I2K26",
      "name": "Autohaus Baur GmbH & Co. Vertriebs KG",
      "url": "http://www.autohaus-baur.de/"
    },
    {
      "id": "DE770L5I2K26",
      "name": "Autohaus Baur GmbH & Co. Vertriebs KG",
      "url": "http://www.autohaus-baur.de/"
    },
    {
      "id": "DENURAIBY279",
      "name": "Autohaus Best GmbH",
      "url": "http://www.autohaus-best.de/"
    },
    {
      "id": "DEF58Y8DLU80",
      "name": "Autohaus Bunz e.K.",
      "url": "http://www.autohaus-bunz.de/"
    },
    {
      "id": "DE0MA1NFSY16",
      "name": "Autohaus Claas GmbH",
      "url": "http://www.autohaus-claas.de/"
    },
    {
      "id": "DEFWA1GUVN31",
      "name": "Autohaus Claas GmbH & Co. KG",
      "url": "http://www.autohaus-claas.de/"
    },
    {
      "id": "DEJ0P31XT056",
      "name": "Autohaus Dobner GmbH",
      "url": "http://www.auto-dobner.de/"
    },
    {
      "id": "DE9DCF4LM229",
      "name": "Autohaus Engelhardt GmbH",
      "url": "http://www.autohaus-engelhardt.de/"
    },
    {
      "id": "DEOUIXEY2Y67",
      "name": "Autohaus Ernst GmbH",
      "url": "http://ernstgruppe.de/"
    },
    {
      "id": "DEGWY322LP62",
      "name": "Autohaus Finkbeiner GmbH & Co. KG",
      "url": "http://www.autofinkbeiner.de/"
    },
    {
      "id": "DEF092BB2R44",
      "name": "Autohaus Franz Harich GmbH & Co. KG",
      "url": "http://www.autohaus-harich.de/"
    },
    {
      "id": "DEGT89QTYU13",
      "name": "Autohaus Gartner Verwaltungs GmbH",
      "url": "http://www.autohaus-gartner.de/"
    },
    {
      "id": "DE89ZN5OCE10",
      "name": "Autohaus Groh GmbH & Co. KG",
      "url": "http://www.autohaus-groh.de/"
    },
    {
      "id": "DEN25JJ9U591",
      "name": "Autohaus Heise Abschlepp- und Service GmbH",
      "url": "http://www.autohaus-heise.de/"
    },
    {
      "id": "DEH0WE0MOQ66",
      "name": "Autohaus Heise GmbH",
      "url": "http://www.autohaus-heise.de/"
    },
    {
      "id": "DECGDWU2SO10",
      "name": "Autohaus Heuberger GmbH",
      "url": "http://www.autohaus-heuberger.de/"
    },
    {
      "id": "DECGDWU2SO10",
      "name": "Autohaus Heuberger GmbH",
      "url": "http://www.autohaus-heuberger.de/"
    },
    {
      "id": "DEMZLIVKXX73",
      "name": "Autohaus Heusel GmbH",
      "url": "http://www.autohaus-heusel.de/"
    },
    {
      "id": "DEEOIF1FK121",
      "name": "Autohaus Hoff GmbH & Co. KG",
      "url": "http://www.autohaus-hoff.de/"
    },
    {
      "id": "DEHOVOJUKF65",
      "name": "Autohaus Huber GmbH & Co. KG",
      "url": "http://www.vw-audi-huber.de/"
    },
    {
      "id": "DEKWQANFJV20",
      "name": "Autohaus Huttner GmbH",
      "url": "http://www.autohaus-huttner.de/"
    },
    {
      "id": "DET6Y5I68S91",
      "name": "Autohaus Janko oHG",
      "url": "http://www.autohaus-janko.de/"
    },
    {
      "id": "DE5NZHDDPZ34",
      "name": "Autohaus Kemmer GmbH",
      "url": "http://www.autohauskemmer.de/"
    },
    {
      "id": "DEBIGTI4QC74",
      "name": "Autohaus Kittel GmbH",
      "url": "http://www.autohaus-kittel.de/"
    },
    {
      "id": "DE06DTJHEC84",
      "name": "Autohaus Käsmann GmbH",
      "url": "http://www.kaesmann.de/"
    },
    {
      "id": "DERV7W0OX890",
      "name": "Autohaus Köpf GmbH",
      "url": "http://www.autohaus-koepf.de/"
    },
    {
      "id": "DEDJFHIXJR34",
      "name": "Autohaus Köppl GmbH & Co. KG",
      "url": "http://www.autohaus-koeppl.com/"
    },
    {
      "id": "DE462VMHWF25",
      "name": "Autohaus Kühl GmbH & Co. KG",
      "url": "http://www.autohaus-kuehl.de/"
    },
    {
      "id": "DEU7T8Y7AN87",
      "name": "Autohaus Lauterbach GmbH",
      "url": "http://www.ah-lauterbach.de/"
    },
    {
      "id": "DETWVTUSB810",
      "name": "Autohaus Luft GmbH",
      "url": "http://www.autohaus-luft.de/"
    },
    {
      "id": "DE4N2BM6TX93",
      "name": "Autohaus Marnet GmbH & Co. KG",
      "url": "http://www.autohaus-marnet.info/"
    },
    {
      "id": "DE4N2BM6TX93",
      "name": "Autohaus Marnet GmbH & Co. KG",
      "url": "http://www.autohaus-marnet.info/"
    },
    {
      "id": "DEXJK2TF1Y31",
      "name": "Autohaus Meier GmbH & Co. Betriebs-KG",
      "url": "http://www.autohausmeier.de/"
    },
    {
      "id": "DEIXLFXARQ42",
      "name": "Autohaus Minrath GmbH & Co. KG",
      "url": "http://minrath.de/"
    },
    {
      "id": "DEIXLFXARQ42",
      "name": "Autohaus Minrath GmbH & Co. KG",
      "url": "http://minrath.de/"
    },
    {
      "id": "DEM3Q192RH26",
      "name": "Autohaus Müller Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DEEWP0179944",
      "name": "Autohaus Nahetal GmbH & Co. KG",
      "url": "http://www.autohaus-nahetal.de/"
    },
    {
      "id": "DE3KHLP2ZJ04",
      "name": "Autohaus Nahetal Verwaltungs GmbH",
      "url": "http://www.autohaus-nahetal.de/"
    },
    {
      "id": "DE0R4PHFMR23",
      "name": "Autohaus Neustadt Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DE3DMZHXTU12",
      "name": "Autohaus Ochs GmbH & Co. KG",
      "url": "http://www.autohausochs.de/"
    },
    {
      "id": "DEO5UEHWTI25",
      "name": "Autohaus Opitz Inhaber Andreas Opitz e.K.",
      "url": "http://www.autohaus-opitz.com/"
    },
    {
      "id": "DEWJKSSDFB53",
      "name": "Autohaus Ost Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DET0ZUJLPR91",
      "name": "Autohaus Pfeffer GmbH",
      "url": "http://www.autohaus-pfeffer.de/"
    },
    {
      "id": "DECI2W2TW237",
      "name": "Autohaus Pretz GmbH",
      "url": "http://www.audizentrum-koblenz.de/"
    },
    {
      "id": "DEXMSKIK7V87",
      "name": "Autohaus Prüller KG",
      "url": "http://www.autohaus-prueller.de/"
    },
    {
      "id": "DEUQP9NYBL36",
      "name": "Autohaus Scherhag GmbH",
      "url": "http://www.scherhag.de/"
    },
    {
      "id": "DEHL3G0T9C42",
      "name": "Autohaus Schmidt & Söhne Aschersleben GmbH & Co. KG",
      "url": "http://www.schmidt-aschersleben.de/"
    },
    {
      "id": "DEVZ629H3Q37",
      "name": "Autohaus Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DEVZ629H3Q37",
      "name": "Autohaus Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DEJ3AAE0NQ41",
      "name": "Autohaus Scholtes GmbH Mehring",
      "url": "http://www.autohaus-scholtes.de/"
    },
    {
      "id": "DEYT92U5E464",
      "name": "Autohaus Scholz GmbH",
      "url": "http://www.autohausscholz.de/"
    },
    {
      "id": "DE5H8F13DJ65",
      "name": "Autohaus Stöber Verwaltungs GmbH",
      "url": "http://www.autohaus-stoeber.de/"
    },
    {
      "id": "DE94BV5NOD19",
      "name": "Autohaus Teichmann GmbH",
      "url": "http://www.teichmann.biz/"
    },
    {
      "id": "DE94BV5NOD19",
      "name": "Autohaus Teichmann GmbH",
      "url": "http://www.teichmann.biz/"
    },
    {
      "id": "DEZHCWBKX131",
      "name": "Autohaus Thomas Knott GmbH",
      "url": "http://www.autohaus-knott.de/"
    },
    {
      "id": "DEYJJ7GX8815",
      "name": "Autohaus Timmer GmbH",
      "url": "http://www.auto-timmer.de/"
    },
    {
      "id": "DEPV9DPWA859",
      "name": "Autohaus Utbremen Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DEWR2DKSO141",
      "name": "Autohaus Weider u. Sohn GmbH.",
      "url": "http://www.auto-weider.de/"
    },
    {
      "id": "DEZORAUQO175",
      "name": "Autohaus Wilhelmshaven Nord Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DESMFCN12060",
      "name": "Autohaus Wolfsburg Hotz und Heitmann GmbH & Co. KG",
      "url": "http://www.autohaus-wolfsburg.de/"
    },
    {
      "id": "DERUKMCB3A01",
      "name": "Automobile Andreas Forster e.K.",
      "url": "http://www.auto-andreas-forster.de/"
    },
    {
      "id": "DEFBN3CM6030",
      "name": "Automobile Basdorf GmbH",
      "url": "http://www.automobile-basdorf.de/"
    },
    {
      "id": "DEFBN3CM6030",
      "name": "Automobile Basdorf GmbH",
      "url": "http://www.automobile-basdorf.de/"
    },
    {
      "id": "DEXMXJXLUX22",
      "name": "AUTOSCHMITT IDSTEIN GmbH",
      "url": "http://autoschmitt.com/"
    },
    {
      "id": "DERZZETXGM32",
      "name": "Autowelt Schuler Donaueschingen GmbH",
      "url": "http://www.autowelt-schuler.de/"
    },
    {
      "id": "DEDVRKKX0E80",
      "name": "Autowelt Schuler GmbH & Co. KG",
      "url": "http://www.autowelt-schuler.de/"
    },
    {
      "id": "DE19EJHCGM66",
      "name": "AWUS mobile GmbH & Co. KG",
      "url": "http://www.awus-wismar.de/"
    },
    {
      "id": "DEUD9SY8O714",
      "name": "AWUS Verwaltungs- GmbH",
      "url": "http://www.awus-wismar.de/"
    },
    {
      "id": "DEUD9SY8O714",
      "name": "AWUS Verwaltungs- GmbH",
      "url": "http://www.awus-wismar.de/"
    },
    {
      "id": "DEC6XWAWAJ08",
      "name": "B. Braun Facility Services Verwaltungs GmbH",
      "url": "http://www.vw-fritzlar.de/"
    },
    {
      "id": "DEA8FAFFWJ00",
      "name": "BAG-Auto-GmbH",
      "url": "http://www.bag-auto.de/"
    },
    {
      "id": "DEA8FAFFWJ00",
      "name": "BAG-Auto-GmbH",
      "url": "http://www.bag-auto.de/"
    },
    {
      "id": "DEH9NUFWBK63",
      "name": "BLSG AG",
      "url": "http://www.b-l-s-g.com/"
    },
    {
      "id": "DEIQ78ZP6033",
      "name": "Bremer Fahrlehrer Betreuungs-GmbH",
      "url": "http://www.fahrlehrerverband-bremen.de/"
    },
    {
      "id": "DECUNJET0K91",
      "name": "Bremer Fahrzeughaus SCHMIDT + KOCH AG",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DESLA81QLY53",
      "name": "büro bewegt beteiligungs GmbH",
      "url": "http://buerobewegt.com/"
    },
    {
      "id": "DE79QM5LWU83",
      "name": "Central Garage Jung GmbH",
      "url": "http://www.central-garage-jung.de/"
    },
    {
      "id": "DEF5TYVQ9903",
      "name": "Chillingsten GmbH",
      "url": "http://www.munich-gaming.com/"
    },
    {
      "id": "DEGKNLUKU817",
      "name": "Cobra Advanced Composites Europe GmbH",
      "url": "http://cobra-advanced-composites.com/"
    },
    {
      "id": "DEPKUZ7W8314",
      "name": "Cohline GmbH, Schlauchleitungssysteme",
      "url": "http://www.cohline.de/"
    },
    {
      "id": "DEHCLOSBYB35",
      "name": "Companize GmbH",
      "url": "http://www.companize.com/"
    },
    {
      "id": "DEJHO3VF5N62",
      "name": "ComTeam AG",
      "url": "http://www.comteam-ag.de/"
    },
    {
      "id": "DENXDRVT2V36",
      "name": "D.A.S. GmbH Dienstleistungen für Akustik und Schwingungstechnik",
      "url": "http://www.das-consult.de/"
    },
    {
      "id": "DESATLNT6I85",
      "name": "Deutsche Gesellschaft für Nachhaltiges Bauen-DGNB e.V.",
      "url": "http://www.dgnb.de/"
    },
    {
      "id": "DE0BN7FYVS12",
      "name": "Deutsche Segel-Bundesliga GmbH",
      "url": "http://segelbundesliga.de/"
    },
    {
      "id": "DEFDL1TXDX51",
      "name": "e.solutions GmbH",
      "url": "https://www.esolutions.de/"
    },
    {
      "id": "DEFDL1TXDX51",
      "name": "e.solutions GmbH",
      "url": "https://www.esolutions.de/"
    },
    {
      "id": "DED5M2RWKV20",
      "name": "Eckelt Consultants GmbH",
      "url": "http://www.top-career-guide.de/"
    },
    {
      "id": "DE6IK7EZX133",
      "name": "edacentrum GmbH",
      "url": "http://www.edacentrum.de/"
    },
    {
      "id": "DEFPMUC7KS84",
      "name": "Eisenwerk Erla GmbH",
      "url": "http://www.eisenwerkerla.de/"
    },
    {
      "id": "DEMMU5DUB350",
      "name": "Energie-Technologisches Zentrum Weiden i. d. OPf. GmbH",
      "url": "http://www.etz-nordoberpfalz.de/"
    },
    {
      "id": "DE9SJGSU3X80",
      "name": "Erich Röhr GmbH & Co. KG",
      "url": "http://www.auto-roehr.de/"
    },
    {
      "id": "DELZ3OEJXX45",
      "name": "Ernst Automobile Rhein-Neckar GmbH",
      "url": "http://ernstgruppe.de/"
    },
    {
      "id": "DEUUKH2UVR49",
      "name": "ETOGAS GmbH",
      "url": "http://etogas.com/"
    },
    {
      "id": "DE3QRNL4XY90",
      "name": "Europäische Metropolregion München e.V.",
      "url": "http://www.metropolregion-muenchen.eu/"
    },
    {
      "id": "DENMDB7I4J09",
      "name": "eyeworkers interactive GmbH",
      "url": "http://www.eyeworkers.de/"
    },
    {
      "id": "DEGMXPKNPN57",
      "name": "Fahrlehrer-Service GmbH Saar",
      "url": "http://www.fahrlehrerverband-saarland.de/"
    },
    {
      "id": "DEEMMJ2AL988",
      "name": "Fahrzeugteile Service-Zentrum Mellendorf GmbH",
      "url": "http://www.fs-zm.de/"
    },
    {
      "id": "DE2IVA1BZK18",
      "name": "FC Bayern München Basketball GmbH",
      "url": "http://www.fcb-basketball.de/"
    },
    {
      "id": "DES0EX11BA61",
      "name": "Ferdinand Schultz Nachfolger Verwaltungsgesellschaft mbH & Co. KG",
      "url": "http://www.fsn.de/"
    },
    {
      "id": "DE6XC7613005",
      "name": "FeRe Dosier- und Klebsysteme GmbH",
      "url": "http://www.lackiertechnologien.de/"
    },
    {
      "id": "DEFEI62K8015",
      "name": "Fischer Automobile GmbH",
      "url": "http://www.fischer-automobile.de/"
    },
    {
      "id": "DETQ4A5AMR85",
      "name": "Frankfurt Main Finance",
      "url": "http://www.frankfurtmainfinance.de/"
    },
    {
      "id": "DEQLBWXSC124",
      "name": "Freizeit- und Wassersportverein Uphuser Meer e.V.",
      "url": "http://www.uphusermeer.de/"
    },
    {
      "id": "DEUEME9E0H27",
      "name": "Friedrich Hartmann GmbH",
      "url": "http://www.vw-audi-hartmann.de/"
    },
    {
      "id": "DEAYO1DFHU90",
      "name": "Fritz Raupers GmbH",
      "url": "http://www.fritz-raupers.de/"
    },
    {
      "id": "DEAYO1DFHU90",
      "name": "Fritz Raupers GmbH",
      "url": "http://www.fritz-raupers.de/"
    },
    {
      "id": "DEQV55IFQF33",
      "name": "Fritz Schmale GmbH",
      "url": "http://www.autohaus-schmale.de/"
    },
    {
      "id": "DEQV55IFQF33",
      "name": "Fritz Schmale GmbH",
      "url": "http://www.autohaus-schmale.de/"
    },
    {
      "id": "DEAYGP35FP59",
      "name": "Gebrauchtwagen Zentrum Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DEKVVBLHE865",
      "name": "German Card Technologies GmbH",
      "url": "http://www.germancard.de/"
    },
    {
      "id": "DETC7605RY30",
      "name": "Golfcard GmbH",
      "url": "http://www.golfcard.de/"
    },
    {
      "id": "DE2LTJSXK249",
      "name": "Graf Beteiligungs- und Verwaltungs-GmbH",
      "url": "http://ah-graf.de/"
    },
    {
      "id": "DE1PLN17NT84",
      "name": "Groh GmbH",
      "url": "http://www.autohaus-groh.de/"
    },
    {
      "id": "DEQBSYTV4U70",
      "name": "Gschwender Consulting GmbH",
      "url": "http://www.gschwenderconsulting.com/"
    },
    {
      "id": "DEEXYVRR2G13",
      "name": "GWK Gesellschaft Wärme Kältetechnik mbH.",
      "url": "http://www.gwk.com/de/"
    },
    {
      "id": "DEK5860JIF05",
      "name": "Halbac-Autohaus-GmbH",
      "url": "http://www.halbac.de/"
    },
    {
      "id": "DE1B4PTVOB65",
      "name": "Hans Haberbosch GmbH",
      "url": "http://www.autohaus-haberbosch.de/"
    },
    {
      "id": "DE42QL2Q7M50",
      "name": "HBW cash solutions GmbH",
      "url": "http://www.hbw-cs.de/"
    },
    {
      "id": "DERU4YXBS129",
      "name": "Heinz Memmer",
      "url": "http://www.autohaus-memmer.de/"
    },
    {
      "id": "DEI2CE8YWF38",
      "name": "Heinz Nauen GmbH & Co. KG",
      "url": "http://www.autohaus-nauen.de/"
    },
    {
      "id": "DEI2CE8YWF38",
      "name": "Heinz Nauen GmbH & Co. KG",
      "url": "http://www.autohaus-nauen.de/"
    },
    {
      "id": "DE5XTWTO8B29",
      "name": "Hood GmbH",
      "url": "http://www.reconf.de/"
    },
    {
      "id": "DEMOXTXVCP29",
      "name": "IGUSTA Schalltechnik GmbH",
      "url": "http://www.igusta.de/"
    },
    {
      "id": "DEJ3M35HQW09",
      "name": "Ing. Punzenberger COPA DATA GmbH",
      "url": "https://www.copadata.com/de-de/"
    },
    {
      "id": "DEKE2J8K6O39",
      "name": "insglück Gesellschaft für Markeninszenierung mbH",
      "url": "http://www.insglueck.com/"
    },
    {
      "id": "DEEAKBZR7V29",
      "name": "Institut für Unternehmenskybernetik e.V.",
      "url": "http://www.autobraid.de/"
    },
    {
      "id": "DE68EXMIXA61",
      "name": "interactive scape GmbH",
      "url": "http://www.interactive-scape.com/"
    },
    {
      "id": "DE995LUX5M50",
      "name": "Johann Wiedmann GmbH",
      "url": "http://www.autohaus-wiedmann.de/"
    },
    {
      "id": "DEGA4E077X84",
      "name": "Josef Weiss Plastic GmbH",
      "url": "http://www.plexiweiss.de/"
    },
    {
      "id": "DE2F3UOXCF92",
      "name": "Jäckel Datentechnik GmbH",
      "url": "http://jaeckel-datentechnik.de/"
    },
    {
      "id": "DE19M9ZXBZ17",
      "name": "K Products UG (haftungsbeschränkt)",
      "url": "http://www.rettungskarten.eu/"
    },
    {
      "id": "DE2M12BU7K37",
      "name": "KINEMATIXX GmbH",
      "url": "http://www.kinematixx.de/"
    },
    {
      "id": "DE9Q7JOL6865",
      "name": "KMS BLACKSPACE GmbH",
      "url": "http://www.kms-blackspace.com/"
    },
    {
      "id": "DEE108GRV334",
      "name": "Kreativagentur Thomas GmbH",
      "url": "http://www.kreativagentur-thomas.de/"
    },
    {
      "id": "DEZEZKYPXC12",
      "name": "KTEC GmbH",
      "url": "http://www.ktec-automation.com/"
    },
    {
      "id": "DE7DJ66U0L61",
      "name": "KUKA Roboter GmbH",
      "url": "http://www.kuka.at/"
    },
    {
      "id": "DEE9S6VB7323",
      "name": "Kurt Stricker GmbH & Co. KG",
      "url": "http://www.autohaus-stricker.de/"
    },
    {
      "id": "DEL4E2AAJA68",
      "name": "KW am Südharz GmbH",
      "url": "http://www.kw-am-suedharz.de/"
    },
    {
      "id": "DEYWVRCZS769",
      "name": "LAB75 Design GmbH",
      "url": "http://www.lab75.jp/"
    },
    {
      "id": "DEYIL6L8CP37",
      "name": "LanguageWire GmbH",
      "url": "http://www.languagewire.com/de/"
    },
    {
      "id": "DEIY2GZ0TJ94",
      "name": "Leiber Group GmbH & Co. KG",
      "url": "http://www.leiber.com/"
    },
    {
      "id": "DEUHREWIYD28",
      "name": "LIQUIDYN GmbH",
      "url": "http://www.liquidyn.com/de/"
    },
    {
      "id": "DERWT2SKVX89",
      "name": "Ludwig & Loehn GmbH",
      "url": "http://ludwig-loehn.de/"
    },
    {
      "id": "DEEOGDC8P591",
      "name": "M-C-C Marken-Celebrity-Consultancy GmbH",
      "url": "http://www.m-c-c.com/"
    },
    {
      "id": "DEJZU1FO4A30",
      "name": "M-Sys GmbH",
      "url": "http://www.msys-gmbh.de/"
    },
    {
      "id": "DEYWO0R77P38",
      "name": "makandra GmbH",
      "url": "http://www.makandra.de/"
    },
    {
      "id": "DEZLIJ2RGL52",
      "name": "Marnet GmbH",
      "url": "http://www.marnet.de/"
    },
    {
      "id": "DEZLIJ2RGL52",
      "name": "Marnet GmbH",
      "url": "http://www.marnet.de/"
    },
    {
      "id": "DEKHM5VM1X13",
      "name": "Marx Automation GmbH",
      "url": "http://www.marxautomation.de/"
    },
    {
      "id": "DEUKIF30GS46",
      "name": "Maschek Automobile Verwaltungs GmbH",
      "url": "http://www.maschek-automobile.de/"
    },
    {
      "id": "DEUKIF30GS46",
      "name": "Maschek Automobile Verwaltungs GmbH",
      "url": "http://www.maschek-automobile.de/"
    },
    {
      "id": "DEXN4UZTLB89",
      "name": "Messink Automobile GmbH & Co. KG",
      "url": "http://www.messink.de/"
    },
    {
      "id": "DE6DKGVYQL02",
      "name": "mk-messtechnik GmbH",
      "url": "http://www.optocan.com/"
    },
    {
      "id": "DEY8DQF1TF47",
      "name": "MLOVE Confestival UG (haftungsbeschränkt)",
      "url": "http://www.mlove.com/"
    },
    {
      "id": "DE6MV6NVCB54",
      "name": "Morath Automatisierung GmbH",
      "url": "http://www.morath.net/"
    },
    {
      "id": "DE1SD5KNNL93",
      "name": "Münchner-Yacht-Club e.V.",
      "url": "http://www.myc.de/"
    },
    {
      "id": "DECR9YNJGA51",
      "name": "Nebelhornbahn-AG",
      "url": "http://www.das-hoechste.de/"
    },
    {
      "id": "DECJITN5X626",
      "name": "neofonie GmbH",
      "url": "http://www.neofonie.de/"
    },
    {
      "id": "DEI2CFYYO970",
      "name": "Neubeck Automobile GmbH & Co. KG",
      "url": "http://www.neubeck-automobile.de/"
    },
    {
      "id": "DEVRB8WNIJ67",
      "name": "NUFA Nutzfahrzeug-Center Schmidt & Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DEALLBT48S65",
      "name": "O/R/T/Medienverbund GmbH",
      "url": "http://www.ort-online.net/"
    },
    {
      "id": "DEYJ8AQMVE52",
      "name": "Odwald & Berlik Internet Consulting OHG",
      "url": "http://www.odwaldberlik.de/"
    },
    {
      "id": "DESPNTEFP316",
      "name": "OLYMP car-detailing GmbH",
      "url": "http://olymp-cd.de/"
    },
    {
      "id": "DEFBINL99V33",
      "name": "Peter Göbel e.K.",
      "url": "http://www.frimontage.de/"
    },
    {
      "id": "DE0750O7BO85",
      "name": "Peter Stahlhacke GmbH",
      "url": "http://www.peter-stahlhacke.de/"
    },
    {
      "id": "DEK7ZXNAQB73",
      "name": "PLASMA ELECTRONIC GmbH",
      "url": "http://www.plasma-electronic.de/"
    },
    {
      "id": "DEJ4JA76QW58",
      "name": "PMG Holding GmbH",
      "url": "http://www.pmgsinter.com/"
    },
    {
      "id": "DEW3W3708H31",
      "name": "projekt-dialog GmbH",
      "url": "http://www.projekt-dialog.de/"
    },
    {
      "id": "DEW3W3708H31",
      "name": "projekt-dialog GmbH",
      "url": "http://www.projekt-dialog.de/"
    },
    {
      "id": "DEDQ5VMOXP70",
      "name": "ProSTEP-iViP e.V.",
      "url": "http://www.prostep.org/"
    },
    {
      "id": "DE5MIGBI3M36",
      "name": "ProSyst Software GmbH",
      "url": "http://www.prosyst.com/"
    },
    {
      "id": "DE0OKVDS9R11",
      "name": "PROTOTYP GmbH",
      "url": "http://prototyp-hamburg.de/"
    },
    {
      "id": "DEGN442TDK70",
      "name": "Quality First Software GmbH",
      "url": "http://www.web2test.org/"
    },
    {
      "id": "DEDB78QDLE78",
      "name": "Quedac-Autohaus-GmbH",
      "url": "http://www.quedac.de/"
    },
    {
      "id": "DEVZNLEZE650",
      "name": "Quin GmbH",
      "url": "http://www.quin-automotive.com/"
    },
    {
      "id": "DEU3OL104725",
      "name": "Quisma GmbH",
      "url": "http://www.quisma.com/"
    },
    {
      "id": "DE8O04A9Y351",
      "name": "Rapp GmbH",
      "url": "http://www.autorapp.de/"
    },
    {
      "id": "DE3CU7MW2V19",
      "name": "Rapp Verwaltungsgesellschaft mbH",
      "url": "http://www.autofinkbeiner.de/"
    },
    {
      "id": "DEKKK7QBAP47",
      "name": "René Staud Studios GmbH",
      "url": "http://www.staudstudios.de/"
    },
    {
      "id": "DEOIGJ1CCM26",
      "name": "Richard Stein GmbH & Co. KG",
      "url": "http://www.stein-engelskirchen.de/"
    },
    {
      "id": "DEVIBU9QMV35",
      "name": "s12 GmbH",
      "url": "http://www.s12.de/"
    },
    {
      "id": "DERRVED2KM15",
      "name": "SAT Sächsische Autotransport und Service GmbH",
      "url": "http://www.sat-atc.de/"
    },
    {
      "id": "DESYTCHAKW01",
      "name": "Scheider GmbH",
      "url": "http://www.autohaus-scheider.de/"
    },
    {
      "id": "DEOQ1L61L516",
      "name": "Scheugenpflug AG",
      "url": "http://www.scheugenpflug.de/"
    },
    {
      "id": "DESI5SOKKU08",
      "name": "schiegl GmbH Agentur für Change Management/Design",
      "url": "http://www.schiegl-gmbh.com/"
    },
    {
      "id": "DEJ7MOMN4W16",
      "name": "Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DEE531CUMN87",
      "name": "Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DEOYMBRHGM25",
      "name": "Schüchl GmbH",
      "url": "http://www.auto-schuechl.de/"
    },
    {
      "id": "DEEZCEKMPP29",
      "name": "SCRIMPPCORP Management UG (haftungsbeschränkt)",
      "url": "http://www.die-taget.de/"
    },
    {
      "id": "DEFO76CN8V51",
      "name": "secura Gebäudemanagement GmbH",
      "url": "http://secura-ingolstadt.de/"
    },
    {
      "id": "DE6Z1RY4KS01",
      "name": "serva transport systems GmbH",
      "url": "http://www.serva-ts.de/"
    },
    {
      "id": "DE4I7K2SE404",
      "name": "Sick-Part Spielotheken- und Gaststättenbetriebs GmbH",
      "url": "http://stern-neuenstadt.de/"
    },
    {
      "id": "DEQER5JRSW45",
      "name": "Sirensrock GmbH",
      "url": "http://sirensrock.de/"
    },
    {
      "id": "DEH36LVONH42",
      "name": "Spartakus GmbH",
      "url": "http://www.spartakus-carhandling.de/"
    },
    {
      "id": "DEVTPWT19L51",
      "name": "Sportwagen-Center Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DEVTPWT19L51",
      "name": "Sportwagen-Center Schmidt + Koch GmbH",
      "url": "http://www.schmidt-und-koch.de/"
    },
    {
      "id": "DEGCGXMTRK49",
      "name": "Steppan GmbH",
      "url": "http://www.autohaus-steppan.de/"
    },
    {
      "id": "DEDOLWIIQ965",
      "name": "STG Sailing Team Germany GmbH",
      "url": "http://www.sailing-team-germany.de/"
    },
    {
      "id": "DEQWVFA6KR96",
      "name": "Synotec Psychoinformatik GmbH",
      "url": "http://www.sounddesignforum.de/"
    },
    {
      "id": "DEK2DLP0D051",
      "name": "Target Software Solution GmbH",
      "url": "http://www.target-soft.com/"
    },
    {
      "id": "DEU5Z4VU0U86",
      "name": "Tarnow-Stegbauer Autohaus GmbH",
      "url": "http://www.tarnow-stegbauer.de/"
    },
    {
      "id": "DEF4Y1HHC037",
      "name": "Temotions GmbH & Co. KG",
      "url": "http://www.d-cocktail.de/"
    },
    {
      "id": "DE4H1SP7JR49",
      "name": "Tentaclion GmbH",
      "url": "http://tentaclion.com/"
    },
    {
      "id": "DE90EGREPC51",
      "name": "Tepass + Seiz Verwaltungs-GmbH",
      "url": "http://www.ah-tepass.de/"
    },
    {
      "id": "DEH5BEGUE712",
      "name": "TLK-Thermo GmbH",
      "url": "http://www.tlk-thermo.de/"
    },
    {
      "id": "DEGQF0TRD410",
      "name": "TT-OWNERS-CLUB e.V.",
      "url": "http://www.tt-owners-club.net/"
    },
    {
      "id": "DEGQF0TRD410",
      "name": "TT-OWNERS-CLUB e.V.",
      "url": "http://www.tt-owners-club.net/"
    },
    {
      "id": "DEOHI74VL292",
      "name": "Tüpker automobile GmbH",
      "url": "http://tuepker.de/"
    },
    {
      "id": "DER568R7KF74",
      "name": "Unfall & Lackier Zentrum Neubauer GmbH Winsen (Luhe)",
      "url": "http://www.unfallneubauer.de/"
    },
    {
      "id": "DEJIBMOA2T49",
      "name": "Unic GmbH",
      "url": "https://www.unic.com/"
    },
    {
      "id": "DEE8GVIN1S75",
      "name": "VALID Digitalagentur GmbH",
      "url": "http://www.valid-digital.com/"
    },
    {
      "id": "DEESBI37AM26",
      "name": "Vector3 GmbH",
      "url": "http://vector3.de/"
    },
    {
      "id": "DEM7L0EYNJ50",
      "name": "Verifysoft Technology GmbH",
      "url": "http://www.verifysoft.de/"
    },
    {
      "id": "DENPUF26L437",
      "name": "Volkswagen Automobile Chemnitz GmbH",
      "url": "http://www.volkswagen-automobile-chemnitz.de/"
    },
    {
      "id": "DEIVFIOIFM92",
      "name": "Volkswagen Automobile Rhein-Neckar GmbH",
      "url": "http://www.volkswagen-automobile-rhein-neckar.de/"
    },
    {
      "id": "DE109WJVE446",
      "name": "Volpert & Bisinger GmbH & Co. KG",
      "url": "http://www.autohaus-volpert.de/"
    },
    {
      "id": "DEBLBEOQGZ55",
      "name": "WAGNER Beteiligungsgesellschaft mbH",
      "url": "http://wagner-helmstedt.de/"
    },
    {
      "id": "DENZKON82N39",
      "name": "WERBEWELT AG",
      "url": "http://www.werbewelt.de/"
    },
    {
      "id": "DE4U8CVZ2958",
      "name": "Werner Krauth Industriebau GmbH",
      "url": "http://www.wk-industriebau.de/"
    },
    {
      "id": "DERMT4OBAG87",
      "name": "WERO-PLAST Kunststoffverarbeitung GmbH",
      "url": "http://www.weroplast.de/"
    },
    {
      "id": "DECNLW1BI085",
      "name": "Willi Krämer KG",
      "url": "http://www.kraemer-gross-bieberau.de/"
    },
    {
      "id": "DEVPZ8BDDD68",
      "name": "Willy Scheider GmbH & Co. KG",
      "url": "http://www.autohaus-scheider.de/"
    },
    {
      "id": "DEWYMT09FT62",
      "name": "Wittelsbacher Ausgleichsfonds Golfplatz GmbH & Co. KG",
      "url": "http://www.wbgc.de/"
    },
    {
      "id": "DETO9IUOG642",
      "name": "Wolperding Automobile GmbH",
      "url": "http://www.wolperding.de/"
    },
    {
      "id": "DETO9IUOG642",
      "name": "Wolperding Automobile GmbH",
      "url": "http://www.wolperding.de/"
    },
    {
      "id": "DET5SC98XN52",
      "name": "xperion Aerospace GmbH",
      "url": "http://www.avanco.de/"
    },
    {
      "id": "DESBE2ERX256",
      "name": "xperion Energy & Environment GmbH",
      "url": "http://www.avanco.de/"
    },
    {
      "id": "DEEPDBAL2794",
      "name": "Yachtclub Bad Zwischenahn (YCZ)",
      "url": "http://www.ycz.de/"
    },
    {
      "id": "DE0XAKNTI728",
      "name": "Zabka automobile GmbH",
      "url": "http://www.zabka.de/"
    }
  ],
  "outLinks": [
    {
      "id": "DEFH655EHJ22",
      "name": "AUDI AG",
      "url": "http://www.audi.com/"
    },
    {
      "id": "DEP3SZO7O241",
      "name": "TCW Transfer-Centrum für Produktions-Logistik und Technologie-Management GmbH & Co. KG",
      "url": "http://www.tcw.de/"
    },
    {
      "id": "DEUKTX1G4Y22",
      "name": "FIB Freundeskreis des Institutes für Verbrennungskraftmaschinen Braunschweig e.V.",
      "url": "http://www.fib-bs.de/"
    },
    {
      "id": "DEDV1MH08141",
      "name": "Institut für Freie Berufe an der Friedrich-Alexander Universität Erlangen-Nürnberg e.V.",
      "url": "http://www.institut-fuer-freie-berufe.de/"
    },
    {
      "id": "DE4JT108C927",
      "name": "Carathéodory-Gesellschaft zur Förderung der Mathematik in Wirtschaft, Universität und Schule an der Ludwig-Maximilians-Universität München e.V.",
      "url": "http://www.caratheodory-gesellschaft-lmu.de/"
    },
    {
      "id": "DE3EG2EF4O72",
      "name": "TEWISS-Technik und Wissen GmbH",
      "url": "http://www.pzh-gmbh.de/"
    },
    {
      "id": "DE2N6VLVEG62",
      "name": "Pinterest Germany GmbH",
      "url": "http://www.klassischelastwagen.de/"
    },
    {
      "id": "DETAS0HAEZ73",
      "name": "Zeppelin Universität gemeinnützige GmbH",
      "url": "https://www.zu.de/"
    }
  ]},
  "industries": {
    "nace": [
      {
        "type":"nace",
        "code":"C29.10",
        "title":"Herstellung von Kraftwagen und Kraftwagenmotoren"
      },
      {
        "type":"nace",
        "code":"G45.31",
        "title":"Großhandel mit Kraftwagenteilen und -zubehör"
      }
    ],
    "wz2008": [
      {
        "type":"wz2008",
        "code":"29.10",
        "title":"Herstellung von Kraftwagen und Kraftwagenmotoren"
      },
      {
        "type":"wz2008",
        "code":"45.31.0",
        "title":"Großhandel mit Kraftwagenteilen und -zubehör"
      }
    ]
  },
  "sectors": {
    "wz2008": [
      "C29.10",
      "G45.31.0"
    ]
  },
  "revenue": {
    "code":">100m",
    "year":"2014"
  },
  "employees": {
    "code":">1000",
    "year":"2014"
  },
  "eventsWrapper": { "events": [
    {
      "type": "HRB",
      "key": "HRB_OTHER",
      "value": "HRB 1: AUDI Aktiengesellschaft, Ingolstadt, Auto-Union-Str. 1, 85045 Ingolstadt. Beim Amtsgericht Ingolstadt -Registergericht- wurde eine Liste der Mitglieder des Aufsichtsrats eingereicht, § 106 AktG.",
      "source": "http://www.handelsregisterbekanntmachungen.de/skripte/hrb.php?rb_id=990625&land_abk=by",
      "timestamp": 1468965600000
    },
    {
      "type": "HRB",
      "key": "MANAGEMENT_AND_TEAM",
      "value": "HRB 1: AUDI Aktiengesellschaft, Ingolstadt, Auto-Union-Str. 1, 85045 Ingolstadt. Prokura erloschen: Schulze, Fred, Bad Wimpfen, *24.02.1967. Gesamtprokura gemeinsam mit einem Vorstandsmitglied oder einem anderen Prokuristen: Mayer, Albert, Neuburg a. d. Donau, *08.01.1954.",
      "source": "http://www.handelsregisterbekanntmachungen.de/skripte/hrb.php?rb_id=985378&land_abk=by",
      "timestamp": 1467151200000
    },
    {
      "type": "HRB",
      "key": "MANAGEMENT_AND_TEAM",
      "value": "HRB 1: AUDI Aktiengesellschaft, Ingolstadt, Auto-Union-Str. 1, 85045 Ingolstadt. Bestellt: Vorstand: Dr. Knirsch, Stefan, Flein, *05.05.1966. Ausgeschieden: Vorstand: Dr. Ing. Hackenberg, Ulrich, Wettstetten, *12.05.1950.",
      "source": "http://www.handelsregisterbekanntmachungen.de/skripte/hrb.php?rb_id=969957&land_abk=by",
      "timestamp": 1461621600000
    },
    {
      "type": "HRB",
      "key": "HRB_OTHER",
      "value": "HRB 1: AUDI Aktiengesellschaft, Ingolstadt, Auto-Union-Str. 1, 85045 Ingolstadt. Beim Amtsgericht Ingolstadt -Registergericht- wurde eine Liste der Mitglieder des Aufsichtsrats eingereicht, § 106 AktG.",
      "source": "http://www.handelsregisterbekanntmachungen.de/skripte/hrb.php?rb_id=954631&land_abk=by",
      "timestamp": 1456527600000
    },
    {
      "type": "HRB",
      "key": "HRB_OTHER",
      "value": "HRB 1: AUDI Aktiengesellschaft, Ingolstadt, Auto-Union-Str. 1, 85045 Ingolstadt. Beim Amtsgericht Ingolstadt -Registergericht- wurde eine Liste der Mitglieder des Aufsichtsrats eingereicht, § 106 AktG.",
      "source": "http://www.handelsregisterbekanntmachungen.de/skripte/hrb.php?rb_id=941672&land_abk=by",
      "timestamp": 1452812400000
    },
    {
      "type": "HRB",
      "key": "MANAGEMENT_AND_TEAM",
      "value": "HRB 1: AUDI Aktiengesellschaft, Ingolstadt, Auto-Union-Str. 1, 85045 Ingolstadt. Gesamtprokura gemeinsam mit einem Vorstandsmitglied oder einem anderen Prokuristen: Biegner, Wolfgang, Stammham, *11.07.1968; Braßler, Dietrich, Ingolstadt, *24.11.1960; Stettner, Helmut, Kernen, *31.03.1960.",
      "source": "http://www.handelsregisterbekanntmachungen.de/skripte/hrb.php?rb_id=931946&land_abk=by",
      "timestamp": 1450134000000
    },
    {
      "type": "HRB",
      "key": "M_AND_A",
      "value": "HRB 1: AUDI Aktiengesellschaft, Ingolstadt, Auto-Union-Str. 1, 85045 Ingolstadt. Die Audi Vertriebsbetreuungsgesellschaft mbH mit dem Sitz in Ingolstadt (Amtsgericht Ingolstadt HRB 1972) ist auf Grund des Verschmelzungsvertrages vom 18.3.2015 mit der Gesellschaft als übernehmendem Rechtsträger verschmolzen. Nicht eingetragen: Den Gläubigern der an der Verschmelzung beteiligten Rechtsträger ist, wenn sie binnen sechs Monaten nach dem Tag, an dem die Eintragung der Verschmelzung in das Register des Sitzes desjenigen Rechtsträgers, dessen Gläubiger sie sind, nach § 19 Abs. 3 UmwG bekannt gemacht worden ist, ihren Anspruch nach Grund und Höhe schriftlich anmelden, Sicherheit zu leisten, soweit sie nicht Befriedigung verlangen können. Dieses Recht steht ihnen jedoch nur zu, wenn sie glaubhaft machen, dass durch die Verschmelzung die Erfüllung ihrer Forderung gefährdet wird.",
      "source": "http://www.handelsregisterbekanntmachungen.de/skripte/hrb.php?rb_id=928917&land_abk=by",
      "timestamp": 1449097200000
    },
    {
      "type": "HRB",
      "key": "MANAGEMENT_AND_TEAM",
      "value": "HRB 1: AUDI Aktiengesellschaft, Ingolstadt, Auto-Union-Str. 1, 85045 Ingolstadt. Ausgeschieden: Vorstand: de Meo, Luca, Berlin, *13.06.1967. Bestellt: Vorstand: Dr. Voggenreiter, Dietmar, Ingolstadt, *04.01.1969.",
      "source": "http://www.handelsregisterbekanntmachungen.de/skripte/hrb.php?rb_id=928683&land_abk=by",
      "timestamp": 1449097200000
    },
    {
      "type": "HRB",
      "key": "MANAGEMENT_AND_TEAM",
      "value": "HRB 1: AUDI Aktiengesellschaft, Ingolstadt, Auto-Union-Str. 1, 85045 Ingolstadt. Prokura erloschen: Husterer, Rupert, Buxheim, *06.11.1955.",
      "source": "http://www.handelsregisterbekanntmachungen.de/skripte/hrb.php?rb_id=925347&land_abk=by",
      "timestamp": 1447887600000
    },
    {
      "type": "HRB",
      "key": "HRB_OTHER",
      "value": "HRB 1: AUDI Aktiengesellschaft, Ingolstadt, Auto-Union-Str. 1, 85045 Ingolstadt. Beim Amtsgericht Ingolstadt -Registergericht- wurde eine Liste der Mitglieder des Aufsichtsrats eingereicht, § 106 AktG.",
      "source": "http://www.handelsregisterbekanntmachungen.de/skripte/hrb.php?rb_id=923484&land_abk=by",
      "timestamp": 1447369200000
    }
  ]}
},
{
  "id":"DE9WNYUSMP94",
  "name":"\"Karosseriewerk Heinrich Meyer GmbH\"",
  "street":"Große Breite 5",
  "zip":"37077",
  "city":"Göttingen",
  "geo": {
    "lat": 51.559917,
    "lon": 9.931924
  },
  "active": true,
  "phone":"+49 551 50330",
  "fax":"+49 551 5033290",
  "email":"info@karosseriewerk-meyer.de",
  "url":"http://www.karosseriewerk-meyer.de/Karosseriewerk_Meyer_Goettingen/Home.html",
  "socialMedia": {},
  "legalForm":"Gesellschaft mit beschränkter Haftung",
  "externalIds": {
    "hr": {
      "court":"Göttingen",
      "type":"HRB",
      "number":"815"
    },
    "vat":"DE811267320",
    "ebid":"2500605850171"
  },
  "foundingDate": 187916400000,
  "capital":"500000.00 EUR",
  "timestamp": 1475345191999,
  "industries": {
    "nace": [
      {
        "type":"nace",
        "code":"C29.20",
        "title":"Herstellung von Karosserien, Aufbauten und Anhängern"
      }
    ],
    "wz2008": [
      {
        "type":"wz2008",
        "code":"29.20.0",
        "title":"Herstellung von Karosserien, Aufbauten und Anhängern"
      }
    ]
  },
  "sectors": {
    "wz2008": [
      "C29.20.0"
    ]
  },
  "revenue": {
    "code":"1m-5m",
    "year":"2014"
  },
  "employees": {
    "code":"51-100",
    "year":"2014"
  },
  "props":{ "topics": [
    {
      "name": "Hochwertigkeit",
      "score": 0.2809009850025177
    },
    {
      "name": "Wirtschaftlichkeit",
      "score": 0.24640218913555145
    },
    {
      "name": "Qualität",
      "score": 0.23813249170780182
    },
    {
      "name": "Lager",
      "score": 0.22064219415187836
    },
    {
      "name": "Flexibilität",
      "score": 0.15491241216659546
    },
    {
      "name": "Fertigung",
      "score": 0.1156776025891304
    },
    {
      "name": "Zuverlässigkeit",
      "score": 0.10584210604429245
    },
    {
      "name": "Anspruch",
      "score": 0.07994028180837631
    },
    {
      "name": "Kosten",
      "score": 0.07899259775876999
    },
    {
      "name": "Modern",
      "score": 0.0699399784207344
    },
    {
      "name": "Design",
      "score": 0.0668177530169487
    },
    {
      "name": "Perfektionismus",
      "score": 0.06026829034090042
    },
    {
      "name": "Produktivität",
      "score": 0.05831675976514816
    },
    {
      "name": "Dynamik",
      "score": 0.058128271251916885
    },
    {
      "name": "Anlagen",
      "score": 0.055853065103292465
    },
    {
      "name": "Niederlassungen",
      "score": 0.054951127618551254
    },
    {
      "name": "Optimierung",
      "score": 0.049830999225378036
    },
    {
      "name": "Investitionen",
      "score": 0.048991866409778595
    },
    {
      "name": "Offenheit",
      "score": 0.04820016771554947
    },
    {
      "name": "Komplexität",
      "score": 0.048096127808094025
    },
    {
      "name": "Ausbildung",
      "score": 0.04711497947573662
    },
    {
      "name": "Sicherheit",
      "score": 0.046624429523944855
    },
    {
      "name": "Vertraulichkeit",
      "score": 0.04508146643638611
    },
    {
      "name": "Standorte",
      "score": 0.045045629143714905
    },
    {
      "name": "Einfachheit",
      "score": 0.041896916925907135
    },
    {
      "name": "Arbeitssicherheit",
      "score": 0.04146300256252289
    },
    {
      "name": "Kompetenz",
      "score": 0.0404999665915966
    },
    {
      "name": "Prozesse",
      "score": 0.03910341113805771
    },
    {
      "name": "Umweltfreundlichkeit",
      "score": 0.038414809852838516
    },
    {
      "name": "E-Commerce",
      "score": 0.03828556835651398
    },
    {
      "name": "Intelligenz",
      "score": 0.03822248801589012
    },
    {
      "name": "Effizienz",
      "score": 0.03657866269350052
    },
    {
      "name": "Emotionalität",
      "score": 0.03647657856345177
    },
    {
      "name": "Fabrik",
      "score": 0.035774923861026764
    },
    {
      "name": "Kundenorientierung",
      "score": 0.03543684259057045
    },
    {
      "name": "Teams",
      "score": 0.0354187972843647
    },
    {
      "name": "Kontinuität",
      "score": 0.035083357244729996
    },
    {
      "name": "Kreativität",
      "score": 0.033403970301151276
    },
    {
      "name": "Innovation",
      "score": 0.03141744062304497
    },
    {
      "name": "Arbeitsklima",
      "score": 0.03033492900431156
    },
    {
      "name": "Loyalität",
      "score": 0.028760019689798355
    },
    {
      "name": "Asien",
      "score": 0.02823583036661148
    },
    {
      "name": "Ethik",
      "score": 0.025301173329353333
    },
    {
      "name": "Nachhaltigkeit",
      "score": 0.024814438074827194
    },
    {
      "name": "Erfahrungen",
      "score": 0.02449277974665165
    },
    {
      "name": "Regionalität",
      "score": 0.02138148993253708
    },
    {
      "name": "CRM",
      "score": 0.021311605349183083
    },
    {
      "name": "Methodik",
      "score": 0.020007500424981117
    },
    {
      "name": "Familienfreundlichkeit",
      "score": 0.019591450691223145
    },
    {
      "name": "Expertise",
      "score": 0.019408244639635086
    },
    {
      "name": "Stellenangebote",
      "score": 0.017679426819086075
    },
    {
      "name": "Professionalität",
      "score": 0.01761651411652565
    },
    {
      "name": "Tradition",
      "score": 0.016560638323426247
    },
    {
      "name": "Südamerika",
      "score": 0.016217447817325592
    },
    {
      "name": "Transparenz",
      "score": 0.01552376989275217
    },
    {
      "name": "Klimaschutz",
      "score": 0.013335703872144222
    },
    {
      "name": "Internationalität",
      "score": 0.012575624510645866
    },
    {
      "name": "Chat",
      "score": 0.012092015706002712
    },
    {
      "name": "Wachstum",
      "score": 0.010720404796302319
    },
    {
      "name": "Photovoltaik",
      "score": 0.01052215974777937
    },
    {
      "name": "Lernen",
      "score": 0.01030727755278349
    },
    {
      "name": "Solaranlagen",
      "score": 0.010179695673286915
    },
    {
      "name": "Business Intelligence",
      "score": 0.009620189666748047
    },
    {
      "name": "Videos",
      "score": 0.008599228225648403
    },
    {
      "name": "Cloud",
      "score": 0.006531890481710434
    },
    {
      "name": "ERP",
      "score": 0.006049573887139559
    },
    {
      "name": "Erlebnis",
      "score": 0.005642776843160391
    },
    {
      "name": "Servicenummer",
      "score": 0.005628288257867098
    },
    {
      "name": "Apps",
      "score": 0.005286002531647682
    },
    {
      "name": "Social Media",
      "score": 0.00520150363445282
    },
    {
      "name": "Energieeffizienz",
      "score": 0.004966596607118845
    },
    {
      "name": "Luxus",
      "score": 0.004960328806191683
    },
    {
      "name": "Wagniskapital",
      "score": 0.004400466103106737
    },
    {
      "name": "Big Data Technologien",
      "score": 0.0023598920088261366
    },
    {
      "name": "Community",
      "score": 0.0015796787338331342
    },
    {
      "name": "Unabhängigkeit",
      "score": 0.0008139919955283403
    },
    {
      "name": "Nordamerika",
      "score": 0.0007358063012361526
    },
    {
      "name": "Erdgas",
      "score": 0
    },
    {
      "name": "Europa",
      "score": 0
    },
    {
      "name": "Langfristigkeit",
      "score": 0
    },
    {
      "name": "Naher Osten",
      "score": 0
    },
    {
      "name": "Schnelligkeit",
      "score": 0
    },
    {
      "name": "Spaß",
      "score": 0
    }
  ],
  "properties": [
    {
      "superType": "Hochwertigkeit",
      "score": 0.2809009850025177
    },
    {
      "superType": "Wirtschaftlichkeit",
      "score": 0.24640218913555145
    },
    {
      "superType": "Qualität",
      "score": 0.23813249170780182
    },
    {
      "superType": "Lager",
      "score": 0.22064219415187836
    },
    {
      "superType": "Flexibilität",
      "score": 0.15491241216659546
    },
    {
      "superType": "Fertigung",
      "score": 0.1156776025891304
    },
    {
      "superType": "Zuverlässigkeit",
      "score": 0.10584210604429245
    },
    {
      "superType": "Anspruch",
      "score": 0.07994028180837631
    },
    {
      "superType": "Kosten",
      "score": 0.07899259775876999
    },
    {
      "superType": "Modern",
      "score": 0.0699399784207344
    },
    {
      "superType": "Design",
      "score": 0.0668177530169487
    },
    {
      "superType": "Perfektionismus",
      "score": 0.06026829034090042
    },
    {
      "superType": "Produktivität",
      "score": 0.05831675976514816
    },
    {
      "superType": "Dynamik",
      "score": 0.058128271251916885
    },
    {
      "superType": "Anlagen",
      "score": 0.055853065103292465
    },
    {
      "superType": "Niederlassungen",
      "score": 0.054951127618551254
    },
    {
      "superType": "Optimierung",
      "score": 0.049830999225378036
    },
    {
      "superType": "Investitionen",
      "score": 0.048991866409778595
    },
    {
      "superType": "Offenheit",
      "score": 0.04820016771554947
    },
    {
      "superType": "Komplexität",
      "score": 0.048096127808094025
    },
    {
      "superType": "Ausbildung",
      "score": 0.04711497947573662
    },
    {
      "superType": "Sicherheit",
      "score": 0.046624429523944855
    },
    {
      "superType": "Vertraulichkeit",
      "score": 0.04508146643638611
    },
    {
      "superType": "Standorte",
      "score": 0.045045629143714905
    },
    {
      "superType": "Einfachheit",
      "score": 0.041896916925907135
    },
    {
      "superType": "Arbeitssicherheit",
      "score": 0.04146300256252289
    },
    {
      "superType": "Kompetenz",
      "score": 0.0404999665915966
    },
    {
      "superType": "Prozesse",
      "score": 0.03910341113805771
    },
    {
      "superType": "Umweltfreundlichkeit",
      "score": 0.038414809852838516
    },
    {
      "superType": "E-Commerce",
      "score": 0.03828556835651398
    },
    {
      "superType": "Intelligenz",
      "score": 0.03822248801589012
    },
    {
      "superType": "Effizienz",
      "score": 0.03657866269350052
    },
    {
      "superType": "Emotionalität",
      "score": 0.03647657856345177
    },
    {
      "superType": "Fabrik",
      "score": 0.035774923861026764
    },
    {
      "superType": "Kundenorientierung",
      "score": 0.03543684259057045
    },
    {
      "superType": "Teams",
      "score": 0.0354187972843647
    },
    {
      "superType": "Kontinuität",
      "score": 0.035083357244729996
    },
    {
      "superType": "Kreativität",
      "score": 0.033403970301151276
    },
    {
      "superType": "Innovation",
      "score": 0.03141744062304497
    },
    {
      "superType": "Arbeitsklima",
      "score": 0.03033492900431156
    },
    {
      "superType": "Loyalität",
      "score": 0.028760019689798355
    },
    {
      "superType": "Asien",
      "score": 0.02823583036661148
    },
    {
      "superType": "Ethik",
      "score": 0.025301173329353333
    },
    {
      "superType": "Nachhaltigkeit",
      "score": 0.024814438074827194
    },
    {
      "superType": "Erfahrungen",
      "score": 0.02449277974665165
    },
    {
      "superType": "Regionalität",
      "score": 0.02138148993253708
    },
    {
      "superType": "CRM",
      "score": 0.021311605349183083
    },
    {
      "superType": "Methodik",
      "score": 0.020007500424981117
    },
    {
      "superType": "Familienfreundlichkeit",
      "score": 0.019591450691223145
    },
    {
      "superType": "Expertise",
      "score": 0.019408244639635086
    },
    {
      "superType": "Stellenangebote",
      "score": 0.017679426819086075
    },
    {
      "superType": "Professionalität",
      "score": 0.01761651411652565
    },
    {
      "superType": "Tradition",
      "score": 0.016560638323426247
    },
    {
      "superType": "Südamerika",
      "score": 0.016217447817325592
    },
    {
      "superType": "Transparenz",
      "score": 0.01552376989275217
    },
    {
      "superType": "Klimaschutz",
      "score": 0.013335703872144222
    },
    {
      "superType": "Internationalität",
      "score": 0.012575624510645866
    },
    {
      "superType": "Chat",
      "score": 0.012092015706002712
    },
    {
      "superType": "Wachstum",
      "score": 0.010720404796302319
    },
    {
      "superType": "Photovoltaik",
      "score": 0.01052215974777937
    },
    {
      "superType": "Lernen",
      "score": 0.01030727755278349
    },
    {
      "superType": "Solaranlagen",
      "score": 0.010179695673286915
    },
    {
      "superType": "Business Intelligence",
      "score": 0.009620189666748047
    },
    {
      "superType": "Videos",
      "score": 0.008599228225648403
    },
    {
      "superType": "Cloud",
      "score": 0.006531890481710434
    },
    {
      "superType": "ERP",
      "score": 0.006049573887139559
    },
    {
      "superType": "Erlebnis",
      "score": 0.005642776843160391
    },
    {
      "superType": "Servicenummer",
      "score": 0.005628288257867098
    },
    {
      "superType": "Apps",
      "score": 0.005286002531647682
    },
    {
      "superType": "Social Media",
      "score": 0.00520150363445282
    },
    {
      "superType": "Energieeffizienz",
      "score": 0.004966596607118845
    },
    {
      "superType": "Luxus",
      "score": 0.004960328806191683
    },
    {
      "superType": "Wagniskapital",
      "score": 0.004400466103106737
    },
    {
      "superType": "Big Data Technologien",
      "score": 0.0023598920088261366
    },
    {
      "superType": "Community",
      "score": 0.0015796787338331342
    },
    {
      "superType": "Unabhängigkeit",
      "score": 0.0008139919955283403
    },
    {
      "superType": "Nordamerika",
      "score": 0.0007358063012361526
    },
    {
      "superType": "Erdgas",
      "score": 0
    },
    {
      "superType": "Europa",
      "score": 0
    },
    {
      "superType": "Langfristigkeit",
      "score": 0
    },
    {
      "superType": "Naher Osten",
      "score": 0
    },
    {
      "superType": "Schnelligkeit",
      "score": 0
    },
    {
      "superType": "Spaß",
      "score": 0
    }
  ],
  "inLinks": [
    {
      "id": "DEDONYRGM685",
      "name": "ERAS Gesellschaft für Entwicklung und Realisation Adaptiver Systeme mbH",
      "url": "http://www.eras.de/"
    },
    {
      "id": "DEEPCOXWUG70",
      "name": "TRANSFRIGOROUTE DEUTSCHLAND (TD)",
      "url": "http://www.transfrigoroute.de/"
    }
  ],
  "outLinks": []}
},
{
  "id":"DEHAJ0BMSH92",
  "name":"\"AB Auto Büsgen GmbH & Co. KG\"",
  "street":"Buchholzstraße 13",
  "zip":"51061",
  "city":"Köln",
  "geo": {
    "lat": 50.985259,
    "lon": 7.000144
  },
  "eventsWrapper": { "events": [
    {
      "type": "HRB",
      "key": "MANAGEMENT_AND_TEAM",
      "value": "HRA 26778:AB Auto Büsgen GmbH & Co. KG, Köln, Buchholzstraße 13, 51061 Köln.Einzelprokura: Haziri, Shkelzen, Köln, *17.12.1988.",
      "source": "http://www.handelsregisterbekanntmachungen.de/skripte/hrb.php?rb_id=1066746&land_abk=nw",
      "timestamp": 1408485600000
    },
    {
      "type": "HRB",
      "key": "MANAGEMENT_AND_TEAM",
      "value": "HRA 26778:AB Auto Büsgen GmbH & Co. KG, Köln, Buchholzstraße 13, 51061 Köln.Prokura erloschen: Ramrath, Frank, Köln, *17.05.1966.",
      "source": "http://www.handelsregisterbekanntmachungen.de/skripte/hrb.php?rb_id=1063195&land_abk=nw",
      "timestamp": 1407448800000
    }
  ]},
  "active": true,
  "legalForm":"Kommanditgesellschaft",
  "externalIds": {
    "hr": {
      "court":"Köln",
      "type":"HRA",
      "number":"26778"
    },
    "ebid":"2500525226582"
  },
  "foundingDate": 1241042400000,
  "timestamp": 1475632585416,
  "industries": {
    "nace": [
      {
        "type":"nace",
        "code":"C29.20",
        "title":"Herstellung von Karosserien, Aufbauten und Anhängern"
      },
      {
        "type":"nace",
        "code":"G45.1",
        "title":"Handel mit Kraftwagen"
      },
      {
        "type":"nace",
        "code":"G45.20",
        "title":"Instandhaltung und Reparatur von Kraftwagen"
      }
    ],
    "wz2008": [
      {
        "type":"wz2008",
        "code":"29.20",
        "title":"Herstellung von Karosserien, Aufbauten und Anhängern"
      },
      {
        "type":"wz2008",
        "code":"45.1",
        "title":"Handel mit Kraftwagen"
      },
      {
        "type":"wz2008",
        "code":"45.20.1",
        "title":"Lackieren von Kraftwagen"
      }
    ]
  },
  "sectors": {
    "wz2008": [
      "C29.20",
      "G45.1",
      "G45.20.1"
    ]
  }
},
{
  "id":"DEJTTYJWPJ09",
  "name":"\"Karosseriewerke Dresden GmbH\"",
  "street":"Heinrich-Gläser-Straße 20",
  "zip":"01454",
  "city":"Radeberg",
  "geo": {
    "lat": 51.111144,
    "lon": 13.904075
  },
  "active": true,
  "legalForm":"Gesellschaft mit beschränkter Haftung",
  "externalIds": {
    "hr": {
      "court":"Dresden",
      "type":"HRB",
      "number":"815"
    },
    "ebid":"2500056384768"
  },
  "foundingDate": 653522400000,
  "capital":"5120000.00 EUR",
  "timestamp": 1475936116809,
  "industries": {
    "nace": [
      {
        "type":"nace",
        "code":"C29.32",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      }
    ],
    "wz2008": [
      {
        "type":"wz2008",
        "code":"29.32.0",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      }
    ]
  },
  "sectors": {
    "wz2008": [
      "C29.32.0"
    ]
  },
  "revenue": {
    "code":">100m",
    "year":"2014"
  },
  "employees": {
    "code":"101-500",
    "year":"2014"
  }
},
{
  "id":"DEA1ES9N0148",
  "name":"\"MC Syncro Supply GmbH\"",
  "street":"Henry Ford Straße 1 Gebäude 65",
  "zip":"50725",
  "city":"Köln",
  "geo": {
    "lat": 50.938361,
    "lon": 6.959974
  },
  "active": true,
  "legalForm":"Gesellschaft mit beschränkter Haftung",
  "externalIds": {
    "hr": {
      "court":"Hannover",
      "type":"HRB",
      "number":"56288"
    },
    "ebid":"2500514687103"
  },
  "foundingDate": 867276000000,
  "capital":"61354.80 EUR",
  "timestamp": 1475401031670,
  "industries": {
    "nace": [
      {
        "type":"nace",
        "code":"C29.32",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      },
      {
        "type":"nace",
        "code":"G45.31",
        "title":"Großhandel mit Kraftwagenteilen und -zubehör"
      }
    ],
    "wz2008": [
      {
        "type":"wz2008",
        "code":"29.32.0",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      },
      {
        "type":"wz2008",
        "code":"45.31.0",
        "title":"Großhandel mit Kraftwagenteilen und -zubehör"
      }
    ]
  },
  "sectors": {
    "wz2008": [
      "C29.32.0",
      "G45.31.0"
    ]
  },
  "revenue": {
    "code":"5m-20m",
    "year":"2013"
  },
  "employees": {
    "code":"101-500",
    "year":"2014"
  }
},
{
  "id":"DEKOJEEVVG32",
  "name":"\"Kunststofftechnik Mittelhäuser GmbH & Co. KG\"",
  "street":"Am Krähenberg 7",
  "zip":"30900",
  "city":"Wedemark",
  "geo": {
    "lat": 52.53307,
    "lon": 9.743336
  },
  "active": true,
  "legalForm":"Kommanditgesellschaft",
  "externalIds": {
    "hr": {
      "court":"Hannover",
      "type":"HRA",
      "number":"201318"
    },
    "ebid":"2500023179083"
  },
  "foundingDate": 1237244400000,
  "timestamp": 1470332520329,
  "industries": {
    "nace": [
      {
        "type":"nace",
        "code":"C29.32",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      },
      {
        "type":"nace",
        "code":"G45.31",
        "title":"Großhandel mit Kraftwagenteilen und -zubehör"
      },
      {
        "type":"nace",
        "code":"G45.32",
        "title":"Einzelhandel mit Kraftwagenteilen und -zubehör"
      }
    ],
    "wz2008": [
      {
        "type":"wz2008",
        "code":"29.32.0",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      },
      {
        "type":"wz2008",
        "code":"45.31.0",
        "title":"Großhandel mit Kraftwagenteilen und -zubehör"
      },
      {
        "type":"wz2008",
        "code":"45.32.0",
        "title":"Einzelhandel mit Kraftwagenteilen und -zubehör"
      }
    ]
  },
  "sectors": {
    "wz2008": [
      "C29.32.0",
      "G45.31.0",
      "G45.32.0"
    ]
  }
},
{
  "id":"DES02NCLGB62",
  "name":"\"IndiKar Individual Karosseriebau GmbH\"",
  "street":"Am Schmelzbach 85",
  "zip":"08112",
  "city":"Wilkau-Haßlau",
  "geo": {
    "lat": 50.68614,
    "lon": 12.511186
  },
  "active": true,
  "phone":"+49 375 60680",
  "fax":"+49 375 6068200",
  "email":"info@indikar.com",
  "url":"http://www.indikar.com/de/",
  "socialMedia": {},
  "legalForm":"Gesellschaft mit beschränkter Haftung",
  "externalIds": {
    "hr": {
      "court":"Chemnitz",
      "type":"HRB",
      "number":"21127"
    },
    "vat":"DE813077484",
    "ebid":"2500172067880"
  },
  "foundingDate": 1074207600000,
  "capital":"250000.00 EUR",
  "timestamp": 1475512389239,
  "industries": {
    "nace": [
      {
        "type":"nace",
        "code":"C29.20",
        "title":"Herstellung von Karosserien, Aufbauten und Anhängern"
      },
      {
        "type":"nace",
        "code":"M71.12",
        "title":"Ingenieurbüros"
      },
      {
        "type":"nace",
        "code":"C29.32",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      }
    ],
    "wz2008": [
      {
        "type":"wz2008",
        "code":"29.20.0",
        "title":"Herstellung von Karosserien, Aufbauten und Anhängern"
      },
      {
        "type":"wz2008",
        "code":"71.12.2",
        "title":"Ingenieurbüros für technische Fachplanung und Ingenieurdesign"
      },
      {
        "type":"wz2008",
        "code":"29.32.0",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      }
    ]
  },
  "sectors": {
    "wz2008": [
      "C29.20.0",
      "M71.12.2",
      "C29.32.0"
    ]
  },
  "revenue": {
    "code":"5m-20m",
    "year":"2014"
  },
  "employees": {
    "code":"101-500",
    "year":"2014"
  }
},
{
  "id":"DEUEUHCEZX39",
  "name":"\"TRIDUM Automotive GmbH & Co. Electronics KG\"",
  "street":"Emil-Riedl-Weg 6",
  "zip":"82049",
  "city":"Pullach i. Isartal",
  "geo": {
    "lat": 48.060501,
    "lon": 11.528864
  },
  "active": true,
  "legalForm":"Kommanditgesellschaft",
  "externalIds": {
    "hr": {
      "court":"München",
      "type":"HRA",
      "number":"95948"
    },
    "ebid":"2500396660775"
  },
  "foundingDate": 1282082400000,
  "timestamp": 1475859814487,
  "industries": {
    "nace": [
      {
        "type":"nace",
        "code":"C29.10",
        "title":"Herstellung von Kraftwagen und Kraftwagenmotoren"
      },
      {
        "type":"nace",
        "code":"C29.32",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      },
      {
        "type":"nace",
        "code":"M71.12",
        "title":"Ingenieurbüros"
      }
    ],
    "wz2008": [
      {
        "type":"wz2008",
        "code":"29.10",
        "title":"Herstellung von Kraftwagen und Kraftwagenmotoren"
      },
      {
        "type":"wz2008",
        "code":"29.32",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      },
      {
        "type":"wz2008",
        "code":"71.12.9",
        "title":"Sonstige Ingenieurbüros"
      }
    ]
  },
  "sectors": {
    "wz2008": [
      "C29.10",
      "C29.32",
      "M71.12.9"
    ]
  }
},
{
  "id":"DE0ECV5NKG14",
  "name":"\"Limbacher Bremsbelag GmbH\"",
  "street":"Kreisel 4",
  "zip":"09322",
  "city":"Penig",
  "geo": {
    "lat": 50.916518,
    "lon": 12.714276
  },
  "active": true,
  "phone":"+49 37381 95520",
  "fax":"+49 37381 95528",
  "email":"info@limbacher-bremsbelag.de",
  "url":"http://www.limbacher-bremsbelag.de/",
  "socialMedia": {},
  "legalForm":"Gesellschaft mit beschränkter Haftung",
  "externalIds": {
    "hr": {
      "court":"Chemnitz",
      "type":"HRB",
      "number":"2519"
    },
    "vat":"DE140916080"
  },
  "foundingDate": 675468000000,
  "capital":"204132.53 EUR",
  "timestamp": 1475091811958,
  "industries": {
    "nace": [
      {
        "type":"nace",
        "code":"C29.32",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      },
      {
        "type":"nace",
        "code":"G45.32",
        "title":"Einzelhandel mit Kraftwagenteilen und -zubehör"
      },
      {
        "type":"nace",
        "code":"C25.62",
        "title":"Mechanik a. n. g."
      }
    ],
    "wz2008": [
      {
        "type":"wz2008",
        "code":"29.32.0",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      },
      {
        "type":"wz2008",
        "code":"45.32.0",
        "title":"Einzelhandel mit Kraftwagenteilen und -zubehör"
      },
      {
        "type":"wz2008",
        "code":"25.62.0",
        "title":"Mechanik a. n. g."
      }
    ]
  },
  "sectors": {
    "wz2008": [
      "C29.32.0",
      "G45.32.0",
      "C25.62.0"
    ]
  },
  "revenue": {
    "code":"5m-20m",
    "year":"2014"
  },
  "employees": {
    "code":"51-100",
    "year":"2014"
  }
},
{
  "id":"DE181EDU2L53",
  "name":"\"Schlegl Fahrzeugkomponenten e.K.\"",
  "street":"Ohmstraße 5",
  "zip":"92521",
  "city":"Schwarzenfeld",
  "geo": {
    "lat": 49.387315,
    "lon": 12.11729
  },
  "active": true,
  "legalForm":"Einzelkaufmann / Einzelkauffrau",
  "externalIds": {
    "hr": {
      "court":"Amberg",
      "type":"HRA",
      "number":"2971"
    },
    "ebid":"2500941248694"
  },
  "foundingDate": 1260399600000,
  "timestamp": 1475961553308,
  "industries": {
    "nace": [
      {
        "type":"nace",
        "code":"C29.32",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      },
      {
        "type":"nace",
        "code":"G45.31",
        "title":"Großhandel mit Kraftwagenteilen und -zubehör"
      },
      {
        "type":"nace",
        "code":"M71.12",
        "title":"Ingenieurbüros"
      }
    ],
    "wz2008": [
      {
        "type":"wz2008",
        "code":"29.32",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      },
      {
        "type":"wz2008",
        "code":"45.31.0",
        "title":"Großhandel mit Kraftwagenteilen und -zubehör"
      },
      {
        "type":"wz2008",
        "code":"71.12.2",
        "title":"Ingenieurbüros für technische Fachplanung und Ingenieurdesign"
      }
    ]
  },
  "sectors": {
    "wz2008": [
      "C29.32",
      "G45.31.0",
      "M71.12.2"
    ]
  }
},
{
  "id":"DE3AXFM5V484",
  "name":"\"DAT Dräxlmaier Automotivtechnik GmbH\"",
  "street":"Landshuter Straße 100",
  "zip":"84137",
  "city":"Vilsbiburg",
  "geo": {
    "lat": 48.452966,
    "lon": 12.343506
  },
  "active": true,
  "legalForm":"Gesellschaft mit beschränkter Haftung",
  "externalIds": {
    "hr": {
      "court":"Landshut",
      "type":"HRB",
      "number":"4796"
    },
    "ebid":"2500898192736"
  },
  "foundingDate": 914194800000,
  "capital":"5000000.00 EUR",
  "timestamp": 1475564284050,
  "industries": {
    "nace": [
      {
        "type":"nace",
        "code":"C29.32",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      }
    ],
    "wz2008": [
      {
        "type":"wz2008",
        "code":"29.32.0",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      }
    ]
  },
  "sectors": {
    "wz2008": [
      "C29.32.0"
    ]
  },
  "revenue": {
    "code":"20m-100m",
    "year":"2011"
  }
},
{
  "id":"DEBBZ6V91H79",
  "name":"\"Hyva Germany GmbH\"",
  "street":"Marie-Bernays-Ring 25 A",
  "zip":"41199",
  "city":"Mönchengladbach",
  "geo": {
    "lat": 51.119152,
    "lon": 6.435618
  },
  "active": true,
  "phone":"+49 2166 95970",
  "fax":"+49 2166 959749",
  "email":"info@hyva.de",
  "url":"http://www.hyva.de/",
  "socialMedia": {},
  "legalForm":"Gesellschaft mit beschränkter Haftung",
  "externalIds": {
    "hr": {
      "court":"Mönchengladbach",
      "type":"HRB",
      "number":"1887"
    },
    "vat":"DE120827364",
    "ebid":"2500707583847"
  },
  "foundingDate": 404089200000,
  "capital":"51200.00 EUR",
  "timestamp": 1476079231134,
  "industries": {
    "nace": [
      {
        "type":"nace",
        "code":"C29.32",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      },
      {
        "type":"nace",
        "code":"G45.31",
        "title":"Großhandel mit Kraftwagenteilen und -zubehör"
      }
    ],
    "wz2008": [
      {
        "type":"wz2008",
        "code":"29.32.0",
        "title":"Herstellung von sonstigen Teilen und sonstigem Zubehör für Kraftwagen"
      },
      {
        "type":"wz2008",
        "code":"45.31.0",
        "title":"Großhandel mit Kraftwagenteilen und -zubehör"
      }
    ]
  },
  "sectors": {
    "wz2008": [
      "C29.32.0",
      "G45.31.0"
    ]
  },
  "revenue": {
    "code":"5m-20m",
    "year":"2013"
  },
  "employees": {
    "code":"11-50",
    "year":"2014"
  }
}
    ]
}
        var dataJsoncompany = "\"" + dataJson.nodes + "\"";
        var domain = "https://pro.implisense.com/#/lists/new/companies/";
        for (var i = 0; i < json.profiles.length; i++) {
            var obj = json.profiles[i];
            if (obj.name === dataJsoncompany ) {
                $(".company-data").empty();
                $(".company-data").append('<table id="detailsTable">');
                $(".company-data").append('<tr><td><div><span class="bold">Firmenname:</span> ' + obj.name + '</div></td><td><div><span class="bold">Umsatz:</span> ' + obj.revenue.code + '</div></td></tr>');
                $(".company-data").append('<tr><td><div><span class="bold">Adresse:</span> ' + obj.street+'</div></td><td><div><span class="bold">Mitarbeiter:</span> Jahr: ' + obj.employees.year + ' Anzahl ' + obj.employees.code +'</div></td></tr>');
                 $(".company-data").append('<tr><td><div><span class="bold"></span> ' + obj.zip +' '+  obj.city + '</div></td><td><div><span class="bold">Score:</span> ' + obj.score + '</div></td></tr>');
                $(".company-data").append('<tr><td><div><span class="bold">Telefon:</span> ' + obj.phone + '</div></td><td></td></tr>');
                $(".company-data").append('<tr><td><div><span class="bold">Fax:</span> ' + obj.fax + '</div></td><td></td></tr>');
                $(".company-data").append('<tr><td><span class="bold">Webseite:</span> ' + obj.url + '</div></td><td></td></tr>');
                $(".company-data").append('<tr><td><div><span class="bold">Email:</span> ' + obj.email + '</div></td><td></td></tr>');
                $(".company-data").append('<tr><td><div><span class="bold">Gesellschaftsform:</span> ' + obj.legalForm + '</div></td><td><div><span class="bold">Kapiital:</span> ' + obj.capital + '</div></td></tr>');
                $(".company-data").append('<tr><td>Besonders hervorstechende Themen</td><td></td></tr>');
                var scoreVal;
                for (var i in obj.props.topics) {
                  
                    scoreVal = obj.props.topics[i].score * 100;
                    $(".company-data").append('<tr><td>' + obj.props.topics[i].name +'</td><td><div class="indicator" style="width: '+scoreVal+'px">' + obj.props.topics[i].score.toFixed(2) +'</div></td></tr>');
                  
                }
                $(".company-data").append('<tr><td></td><td></td></tr>');
                $(".company-data").append('<tr><td></td><td></td></tr>');
                $(".company-data").append('<tr><td></td><td></td></tr>');
                $(".company-data").append('</table>');
                
                $(".company-data").append('<div><span class="bold">Firmenname:</span> ' + obj.name + '</div>');
                $(".company-data").append('<div><span class="bold">Adresse:</span> ' + obj.street +  obj.zip + '</div>');
                $(".company-data").append('<div><span class="bold">Telefon:</span> ' + obj.phone + '</div>');
                $(".company-data").append('<div><span class="bold">Fax:</span> ' + obj.fax + '</div>');
                $(".company-data").append('<div><span class="bold">Webseite:</span> ' + obj.url + '</div>');
                $(".company-data").append('<div><span class="bold">Email:</span> ' + obj.email + '</div>');
              /*  $(".company-data").append('<div><span class="bold">Soziale Medien:</span></div><ul>');
                  $(".company-data").append('<li><span class="bold">Facebook:</span> ' + obj.socialMedia.facebook + '</li>');
                  $(".company-data").append('<li><span class="bold">Googel+:</span> ' + obj.socialMedia.googleplus + '</li>');
                  $(".company-data").append('<li><span class="bold">Twitter:</span> ' + obj.socialMedia.twitter + '</li></ul>');
                */
                $(".company-data").append('<div><span class="bold">Gesellschaftsform:</span> ' + obj.legalForm + '</div>');
                $(".company-data").append('<div><span class="bold">Kapiital:</span> ' + obj.capital + '</div>');
                
                $(".company-data").append('<div><span class="bold">Score:</span> ' + obj.score + '</div>');
                $(".company-data").append('<div><span class="bold">Umsatz:</span> ' + obj.revenue.code + '</div>');
                $(".company-data").append('<div><span class="bold">Mitarbeiter:</span>Jahr: ' + obj.employees.year + ' Anzahl ' + obj.employees.code +'</div>');
                $(".company-data").append('<div><span class="bold">Eigenschaften:</span>');
                for (var i in obj.props.topics) {
                  for (var j in obj.props.topics[i]) {
                    $(".company-data").append('<div>' + obj.props.topics[i][j] +'</div></div>');
                  }
                }
                 $(".company-data").append('<div><span class="bold">Smart Properties:</span>');
                for (var i in obj.props.properties) {
                  for (var j in obj.props.properties[i]) {
                    $(".company-data").append('<div>' + obj.props.properties[i][j] +'</div></div>');
                  }
                }
                  $(".company-data").append('<div><span class="bold">Ereignisse:</span>');
                for (var i in obj.eventsWrapper.events) {
                  for (var j in obj.eventsWrapper.events[i]) {
                    $(".company-data").append('<div>' + obj.eventsWrapper.events[i][j] +'</div></div>');
                  }
                }

               
                //domain = domain + obj.id
                //$("#demo").append(domain);
                //$('iframe').prop('src', domain);
            }
            //else if (obj.category == 2) {
              //  $("#demo").append("<tr><td></td><td>" + obj.firstName + " " + obj.lastName + "</td></tr>");
            //}
        }
    });
    network.on("doubleClick", function (params) {
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify(params, null, 4);
    });
    network.on("oncontext", function (params) {
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>oncontext (right click) event:</h2>' + JSON.stringify(params, null, 4);
    });
    network.on("dragStart", function (params) {
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>dragStart event:</h2>' + JSON.stringify(params, null, 4);
    });
    network.on("dragging", function (params) {
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>dragging event:</h2>' + JSON.stringify(params, null, 4);
    });
    network.on("dragEnd", function (params) {
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>dragEnd event:</h2>' + JSON.stringify(params, null, 4);
    });
    network.on("zoom", function (params) {
        document.getElementById('eventSpan').innerHTML = '<h2>zoom event:</h2>' + JSON.stringify(params, null, 4);
    });
    network.on("showPopup", function (params) {
        document.getElementById('eventSpan').innerHTML = '<h2>showPopup event: </h2>' + JSON.stringify(params, null, 4);
    });
    network.on("hidePopup", function () {
        console.log('hidePopup Event');
    });
    network.on("select", function (params) {
        console.log('select Event:', params);
    });
    network.on("selectNode", function (params) {
        console.log('selectNode Event:', params);
    });
    network.on("selectEdge", function (params) {
        console.log('selectEdge Event:', params);
    });
    network.on("deselectNode", function (params) {
        console.log('deselectNode Event:', params);
    });
    network.on("deselectEdge", function (params) {
        console.log('deselectEdge Event:', params);
    });
    network.on("hoverNode", function (params) {
        console.log('hoverNode Event:', params);
    });
    network.on("hoverEdge", function (params) {
        console.log('hoverEdge Event:', params);
    });
    network.on("blurNode", function (params) {
        console.log('blurNode Event:', params);
    });
    network.on("blurEdge", function (params) {
        console.log('blurEdge Event:', params);
    });
    //Upload
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
  });