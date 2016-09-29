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
        {"id":"DE05X98UY622","name":"\"Millar Garages GmbH\"","score":"0.01"},
      {"id":"DE08L9IH7I87","name":"\"Hötschl Metall- & Fahrzeugbau GmbH & Co. KG\"","score":"0.00"},
      {"id":"DE0ECV5NKG14","name":"\"Limbacher Bremsbelag GmbH\"","score":"0.04"},
      {"id":"DE0LSF2GQI13","name":"\"Albrecht Auto-Zubehör GmbH\"","score":"0.02"},
      {"id":"DE0MF5YU6L85","name":"\"Highco GmbH\"","score":"0.01"},
      {"id":"DE15ZJQNLB66","name":"\"Eichelsbacher Kfz-Service GmbH\"","score":"0.00"},
      {"id":"DE16ESUIEY70","name":"\"Bertrandt Automotive GmbH & Co. KG\"","score":"0.01"},
      {"id":"DE181EDU2L53","name":"\"Schlegl Fahrzeugkomponenten e.K.\"","score":"0.00"},
      {"id":"DE1BLF1LR700","name":"\"elkatec-Elektronik-Mechanik-Kabeltechnik GmbH\"","score":"0.00"},
      {"id":"DE1GQS1XKT37","name":"\"I-RACKS GmbH\"","score":"0.00"},
      {"id":"DE1K5VDT6Q09","name":"\"Delphi Deutschland GmbH\"","score":"0.01"},
      {"id":"DE1SIO847W53","name":"\"HJS Emission Technology GmbH & Co. KG\"","score":"0.00"},
      {"id":"DE211UBN0O67","name":"\"Löwer GmbH & Co. KG\"","score":"0.00"},
      {"id":"DE29LXP1AK03","name":"\"S-Classic GmbH\"","score":"0.03"},
      {"id":"DE2HP4VJ5W13","name":"\"Müller Fahrzeug-Technik GmbH\"","score":"0.00"},
      {"id":"DE2IRK138E92","name":"\"Grässle GmbH\"","score":"0.00"},
      {"id":"DE2WOFI8AF40","name":"\"Willi Lück GmbH\"","score":"0.00"},
      {"id":"DE2Z11K7Q841","name":"\"ICT Innovativ Car Tech GmbH\"","score":"0.00"},
      {"id":"DE34V3S7X841","name":"\"HELBAKO GmbH\"","score":"0.00"},
      {"id":"DE3AXFM5V484","name":"\"DAT Dräxlmaier Automotivtechnik GmbH\"","score":"0.00"},
      {"id":"DE3DSVQOY568","name":"\"Reifen Kiefer Technik GmbH\"","score":"0.18"},
      {"id":"DE3O97GDZQ29","name":"\"M + K Maschinenbau- und Konstruktionsgesellschaft mbH\"","score":"0.05"},
      {"id":"DE3Y9K3LFM13","name":"\"AutoZentrum Glowna GmbH\"","score":"0.01"},
      {"id":"DE464DGNOP56","name":"\"MH Misslbeck Hummel Solution Group GmbH\"","score":"0.00"},
      {"id":"DE46IGV6QN82","name":"\"Motorenfabrik Hatz GmbH & Co. KG\"","score":"0.00"},
      {"id":"DE49QGAKC989","name":"\"Thomas Nutzfahrzeuge GmbH\"","score":"0.00"},
      {"id":"DE49RSJHC182","name":"\"Brüggen Fahrzeugwerk & Service GmbH\"","score":"0.00"},
      {"id":"DE4QXDCDXD94","name":"\"PW Group GmbH\"","score":"0.01"},
      {"id":"DE528SULWK92","name":"\"Die Werkstatt S & S GmbH\"","score":"0.00"},
      {"id":"DE5XJVIE2851","name":"\"EPOKE Maschinenbau GmbH & Co. KG\"","score":"0.06"},
      {"id":"DE67XC22V923","name":"\"N&E Fahrzeugtechnik GmbH & Co. KG\"","score":"0.00"},
      {"id":"DE6G3WSCYI27","name":"\"CARSIG GmbH\"","score":"0.00"},
      {"id":"DE6L3PQYJ720","name":"\"INFUN GmbH\"","score":"0.02"},
      {"id":"DE6LX91LHW39","name":"\"Motoren-Instandsetzung Oldenburg GmbH\"","score":"0.00"},
      {"id":"DE6M9RC9R335","name":"\"Autoflug GmbH\"","score":"0.00"},
      {"id":"DE6NZ56WUN81","name":"\"mor-vision UG (haftungsbeschränkt)\"","score":"0.00"},
      {"id":"DE73Y1IIDD25","name":"\"LMS Logistik-Magazin Saarlouis GmbH\"","score":"0.03"},
      {"id":"DE753BPKN503","name":"\"Wohlleben GmbH\"","score":"0.00"},
      {"id":"DE76RZFZA819","name":"\"K+G tec GmbH Fahrzeugaufbauten & Nutzfahrzeuge\"","score":"0.00"},
      {"id":"DE77ENWY2C86","name":"\"PROTOMASTER GmbH\"","score":"0.03"},
      {"id":"DE7A7VZP9K85","name":"\"Vitrix GmbH\"","score":"0.07"},
      {"id":"DE7AJUZ8P858","name":"\"Schnellecke Logistics Sachsen GmbH\"","score":"0.00"},
      {"id":"DE7G5ICJRN26","name":"\"SCR SILS Center GmbH\"","score":"0.00"},
      {"id":"DE85E45E5V64","name":"\"Balthasar Göbel & Sohn GmbH\"","score":"0.00"},
      {"id":"DE8OMAU3JW70","name":"\"TRIPLE-ING. GmbH\"","score":"0.00"},
      {"id":"DE8VB1ATNU15","name":"\"Karosseriezentrum Verteilerkreis GmbH\"","score":"0.00"},
      {"id":"DE8VM1D27U46","name":"\"PEX Automotive GmbH\"","score":"0.00"},
      {"id":"DE8YBDR3P968","name":"\"Theo Förch GmbH & Co. KG\"","score":"0.03"},
      {"id":"DE9G3DW7L562","name":"\"Björn-Andre Lingk e.K. Autolackiererei und Karosseriebau\"","score":"0.00"},
      {"id":"DE9OHGRKJ251","name":"\"PURAS Kunststoff- und Gummiproduktion GmbH\"","score":"0.00"},
      {"id":"DE9WNYUSMP94","name":"\"Karosseriewerk Heinrich Meyer GmbH\"","score":"0.00"},
      {"id":"DEA1ES9N0148","name":"\"MC Syncro Supply GmbH\"","score":"0.00"},
      {"id":"DEA4S6HZV340","name":"\"KYB Europe Headquarters GmbH\"","score":"0.00"},
      {"id":"DEA8V5UBZN62","name":"\"TAKATA AG\"","score":"0.01"},
      {"id":"DEAGUOEERV38","name":"\"Thalheim GmbH Autoreparaturwerkstatt für Karosserie und Lack\"","score":"0.04"},
      {"id":"DEAJU02JQ964","name":"\"d-i davit international GmbH\"","score":"0.02"},
      {"id":"DEAR90T4T871","name":"\"HyLionTec GmbH\"","score":"0.00"},
      {"id":"DEAZQPX05Q19","name":"\"Autoglas FIT GmbH\"","score":"0.00"},
      {"id":"DEB23LBP6S63","name":"\"Plastic Omnium Auto Components GmbH\"","score":"0.00"},
      {"id":"DEBBZ6V91H79","name":"\"Hyva Germany GmbH\"","score":"0.01"},
      {"id":"DEBKLKPQ3152","name":"\"Neonroos GmbH & Co. KG\"","score":"0.00"},
      {"id":"DEBP34OB1M09","name":"\"SPHEROS Europa GmbH\"","score":"0.02"},
      {"id":"DEBVZXUBBH43","name":"\"Spezialfahrzeugbau Tunger exklusiv GmbH\"","score":"0.00"},
      {"id":"DEBY3PD68M29","name":"\"Brose Fahrzeugteile GmbH & Co. KG\"","score":" Gifhorn"},
      {"id":"DEBY5TS8QR38","name":"\"AURIDA Europe Limited\"","score":"0.00"},
      {"id":"DEC9MBMFYN55","name":"\"Stabilus GmbH\"","score":"0.01"},
      {"id":"DECC6GZX0T31","name":"\"Steinlein & Baschin Karosseriefachbetrieb GmbH\"","score":"0.01"},
      {"id":"DECDW7FH8P63","name":"\"Max Ehrenthaler GmbH\"","score":"0.00"},
      {"id":"DECGFHFK8D06","name":"\"A. Schneider UG (haftungsbeschränkt)\"","score":"0.04"},
      {"id":"DECLPTHJQF36","name":"\"3 E GmbH-Einsatz erneuerbarer Energien\"","score":"0.04"},
      {"id":"DECN72Z2BT16","name":"\"Heigo Autotechnik GmbH\"","score":"0.00"},
      {"id":"DECZLYNAAY05","name":"\"Euro Net Service ENS GmbH\"","score":"0.00"},
      {"id":"DED3ARZ54F30","name":"\"Mechatronik Engineering GmbH\"","score":"0.00"},
      {"id":"DEDB0YZOYW55","name":"\"TS Dienstleistungsgesellschaft mbH\"","score":"0.03"},
      {"id":"DEDC2ND2J537","name":"\"Rapstruck GmbH\"","score":"0.00"},
      {"id":"DEDHO7SFH926","name":"\"Steffan GmbH\"","score":"0.00"},
      {"id":"DEDNVFG5WZ18","name":"\"Arnold Hengesbach Inh. Maria Helena Hengesbach e.K.\"","score":"0.03"},
      {"id":"DEDVP7JZ0S24","name":"\"Füss Mobile GmbH\"","score":"0.00"},
      {"id":"DEEH76VCQE41","name":"\"Trailer Point GmbH\"","score":"0.09"},
      {"id":"DEEJDW8ONQ20","name":"\"Schelling Nutzfahrzeuge GmbH\"","score":"0.00"},
      {"id":"DEENDUBQVX70","name":"\"Capristo Exhaust Systems GmbH\"","score":"0.00"},
      {"id":"DEEUUQ27N512","name":"\"BFFT Gesellschaft für Fahrzeugtechnik mbH\"","score":"0.00"},
      {"id":"DEF1AU6L3752","name":"\"Karosseriewerk Wiedler GmbH\"","score":"0.00"},
      {"id":"DEFH655EHJ22","name":"\"AUDI AG\"","score":"0.01"},
      {"id":"DEFS2N0I2W16","name":"\"Wulf Gaertner Autoparts AG\"","score":"0.00"},
      {"id":"DEFVUN6AHC49","name":"\"Konrad Baur GmbH\"","score":"0.01"},
      {"id":"DEGEZS7OTY74","name":"\"GeAc Produktionsdienstleistungs GmbH\"","score":"0.00"},
      {"id":"DEGIGAZCRH78","name":"\"HBPO GmbH\"","score":"0.00"},
      {"id":"DEHAJ0BMSH92","name":"\"AB Auto Büsgen GmbH & Co. KG\"","score":"0.09"},
      {"id":"DEHH4JA4WY54","name":"\"Köper Fahrzeugbau GmbH\"","score":"0.00"},
      {"id":"DEHW0BVE8B36","name":"\"Automotive Interior World Production GmbH\"","score":"0.01"},
      {"id":"DEHZY7SFD477","name":"\"Johnson Controls Objekt Zwickau GmbH & Co. KG\"","score":"0.02"},
      {"id":"DEI0GFEDIK75","name":"\"Helmut Seitz GmbH Kfz-Produkte\"","score":"0.00"},
      {"id":"DEI4X83W6865","name":"\"H & K Kfz Technik Limited\"","score":"0.10"},
      {"id":"DEI6L36TY512","name":"\"VOGTLAND Autosport GmbH\"","score":"0.00"},
      {"id":"DEIEP43PW422","name":"\"RUKU Anhänger GmbH\"","score":"0.01"},
      {"id":"DEIP62MVWI05","name":"\"ThyssenKrupp Presta Chemnitz GmbH\"","score":"0.00"},
      {"id":"DEIQYWGXGP72","name":"\"Wolfgang Brechtel GmbH\"","score":"0.01"},
      {"id":"DEIS0MEPOO81","name":"\"Turck Beierfeld GmbH\"","score":"0.01"},
      {"id":"DEIV38I3OF88","name":"\"Hellweg Auto Service oHG\"","score":"0.00"},
      {"id":"DEIX299CP753","name":"\"Enescar Engineering GmbH\"","score":"0.00"},
      {"id":"DEJ7CB9J1486","name":"\"MICCAVIONICS GmbH\"","score":"0.00"},
      {"id":"DEJTTYJWPJ09","name":"\"Karosseriewerke Dresden GmbH\"","score":"0.00"},
      {"id":"DEK43F18RG85","name":"\"Lennson Automobil GmbH\"","score":"0.00"},
      {"id":"DEK4L2P07E61","name":"\"Top Gear GmbH\"","score":"0.22"},
      {"id":"DEKDWXAPOS85","name":"\"Mercedes-Benz Minibus GmbH\"","score":"0.00"},
      {"id":"DEKE0G6PAL50","name":"\"Hella Innenleuchten-Systeme GmbH\"","score":"0.00"},
      {"id":"DEKGUZPG6252","name":"\"Busline und Services GmbH\"","score":"0.02"},
      {"id":"DEKJYW50AY47","name":"\"W. Kniefert Karosseriebau-Lackiererei e.K.\"","score":"0.00"},
      {"id":"DEKNHTBMJ668","name":"\"SYNTEKS Umformtechnik GmbH\"","score":"0.04"},
      {"id":"DEKNIBWTYG00","name":"\"Paul Nutzfahrzeuge GmbH\"","score":"0.00"},
      {"id":"DEKOJEEVVG32","name":"\"Kunststofftechnik Mittelhäuser GmbH & Co. KG\"","score":"0.00"},
      {"id":"DEKSM2030S39","name":"\"Ploen Karosserie- und Fahrzeugbau GmbH\"","score":"0.00"},
      {"id":"DEKW6QSO2X38","name":"\"Schrottenbacher oHG\"","score":"0.06"},
      {"id":"DELA0WH7KD90","name":"\"BASF Catalysts Germany GmbH\"","score":"0.00"},
      {"id":"DELBN8497B54","name":"\"Georg Fischer GmbH & Co. KG Heiztechnik- und Fahrzeugwerk\"","score":"0.00"},
      {"id":"DELRYVVBN148","name":"\"Webasto-Werk W. Baier GmbH & Co. KG\"","score":"0.00"},
      {"id":"DEM4LGQHTU61","name":"\"raceparts.cc UG (haftungsbeschränkt)\"","score":"0.00"},
      {"id":"DEM7STLN1A90","name":"\"Patrick Wudi e.K.\"","score":"0.01"},
      {"id":"DEMDPDPCJ056","name":"\"Lear Corporation Beteiligungs GmbH\"","score":"0.00"},
      {"id":"DEMIR0XCHW23","name":"\"SAAR-PFALZ-GARAGE GmbH\"","score":"0.00"},
      {"id":"DEN203OT1M25","name":"\"Rüdiger Schmidt\"","score":" Fachbetrieb für Lack und Karosserie GmbH"},
      {"id":"DENGN3WVRK36","name":"\"SR-Racing GmbH & Co. KG\"","score":"0.00"},
      {"id":"DENLHKMUBU18","name":"\"M. Porada Karosseriebau e.K.\"","score":"0.00"},
      {"id":"DENMK8TJLK13","name":"\"Autoklinik Bockenem GmbH\"","score":"0.00"},
      {"id":"DEO6OL0J4S14","name":"\"Dr. Ing. h.c. F. Porsche AG\"","score":"0.00"},
      {"id":"DEODFY9S6T53","name":"\"Vantec Fahrzeugbau GmbH\"","score":"0.00"},
      {"id":"DEOE1CG05902","name":"\"Eissmann Automotive Deutschland GmbH\"","score":"0.00"},
      {"id":"DEOJIBL9IO47","name":"\"Gilles Tooling KG\"","score":"0.00"},
      {"id":"DEOMA9LHKG67","name":"\"Autohaus Boss GmbH\"","score":"0.00"},
      {"id":"DEOV83TXBS20","name":"\"HBM Karosserietechnik\"","score":" Karosseriebau und Lackierungen GmbH"},
      {"id":"DEOZ2VXQ4Z90","name":"\"E-mobile Motors GmbH\"","score":"0.00"},
      {"id":"DEPOTP6LPR83","name":"\"F. Müller Fahrzeugbau GmbH & Co. KG\"","score":"0.00"},
      {"id":"DEPWV16UK932","name":"\"Harry Helfrich eK\"","score":"0.00"},
      {"id":"DEPZ3U8S8646","name":"\"Brandschutztechnik Görlitz GmbH\"","score":"0.00"},
      {"id":"DEQ4I08XQI83","name":"\"Barracuda Exhaust UG (haftungsbeschränkt)\"","score":"0.09"},
      {"id":"DEQCKISKO271","name":"\"Stoffler Tuning GmbH\"","score":"0.00"},
      {"id":"DEQHH51C0318","name":"\"BorgWarner Ludwigsburg GmbH\"","score":"0.01"},
      {"id":"DEQMSBS5S058","name":"\"retec GmbH Germany\"","score":"0.01"},
      {"id":"DEQX3U1ZOR56","name":"\"Faurecia Innenraum Systeme GmbH\"","score":"0.03"},
      {"id":"DEQYID1RSC90","name":"\"BAG Bizerba Automotive GmbH\"","score":"0.08"},
      {"id":"DEQZ3DZT9P78","name":"\"MAGNA Powertrain Germany GmbH\"","score":"0.01"},
      {"id":"DERD2PFM1W62","name":"\"Brandt-Kühlfahrzeugbau GmbH & Co. KG\"","score":"0.00"},
      {"id":"DERQJUY73X90","name":"\"Schröder GmbH\"","score":"0.02"},
      {"id":"DERSRAMBPL09","name":"\"Karosseriebau Norkowski GmbH\"","score":"0.00"},
      {"id":"DES02NCLGB62","name":"\"IndiKar Individual Karosseriebau GmbH\"","score":"0.01"},
      {"id":"DES1XWMDVO81","name":"\"Ssangyong Motors Deutschland GmbH\"","score":"0.00"},
      {"id":"DES4JAB80G78","name":"\"Friedt GmbH\"","score":"0.00"},
      {"id":"DES7QR58GU14","name":"\"Luft-Karosseriebau-GmbH\"","score":"0.04"},
      {"id":"DESE26N83B45","name":"\"Volker Witamwas GmbH\"","score":"0.02"},
      {"id":"DESKWBJKDF94","name":"\"Hundertmark Autoservice GmbH & Co. KG\"","score":"0.00"},
      {"id":"DESMC7YDEC34","name":"\"Rexhausen GmbH\"","score":"0.00"},
      {"id":"DET1FTYF8O85","name":"\"FTL steering systems GmbH\"","score":"0.00"},
      {"id":"DET4GM9Y9T66","name":"\"GETRAG FORD Transmissions GmbH\"","score":"0.04"},
      {"id":"DET8IRHHOU49","name":"\"Kfz Lobenwein GmbH\"","score":"0.00"},
      {"id":"DETJ454G3W81","name":"\"IFA-Kardan GmbH\"","score":"0.04"},
      {"id":"DETJIV437260","name":"\"Müller Ltd. & Co. KG\"","score":"0.00"},
      {"id":"DETUG2EVQ327","name":"\"CP autosport GmbH\"","score":"0.00"},
      {"id":"DEU2LYYUVK14","name":"\"Autoliv B.V. & Co. KG\"","score":"0.02"},
      {"id":"DEU5BF3DB038","name":"\"FAWI Fahrzeugwerk Wilsdruff GmbH\"","score":"0.04"},
      {"id":"DEU7CTXXGO84","name":"\"F & F Motorsport e.K.\"","score":"0.00"},
      {"id":"DEU9RQ2SIJ77","name":"\"Werdauer Fahrzeug- und Metallkomponenten GmbH\"","score":"0.02"},
      {"id":"DEU9T700WN27","name":"\"Karosserie Bethke GmbH & Co. KG\"","score":"0.00"},
      {"id":"DEUE86BGEN25","name":"\"Willing Nutzfahrzeugtechnik GmbH\"","score":"0.00"},
      {"id":"DEUEUHCEZX39","name":"\"TRIDUM Automotive GmbH & Co. Electronics KG\"","score":"0.00"},
      {"id":"DEUS0SUEIJ63","name":"\"GH-Tec Maschinenbau GmbH\"","score":"0.01"},
      {"id":"DEVFCLQFW054","name":"\"Implisense GmbH\"","score":"0.00"},
      {"id":"DEVLYOC82A15","name":"\"Brian James Trailers GmbH\"","score":"0.00"},
      {"id":"DEVN49QXSV30","name":"\"Boshoku Automotive Europe GmbH\"","score":"0.03"},
      {"id":"DEVOWU5IHW15","name":"\"Anhänger-Oswald Fahrzeugbau GmbH\"","score":"0.00"},
      {"id":"DEW01RV4FW50","name":"\"DKS Dräxlmaier Kunststoffsysteme GmbH\"","score":"0.00"},
      {"id":"DEW6VKN7O051","name":"\"Karrosseriebau- und Kfz-Technik Wagner GmbH\"","score":"0.00"},
      {"id":"DEW74DD0G249","name":"\"Burchert GmbH\"","score":"0.00"},
      {"id":"DEW7A5YKM757","name":"\"CJ Automotive GmbH\"","score":"0.00"},
      {"id":"DEWK2HSGUZ03","name":"\"Litens Automotive GmbH\"","score":"0.00"},
      {"id":"DEX4J04EIZ47","name":"\"KHT Fahrzeugteile GmbH\"","score":"0.02"},
      {"id":"DEX7VKDCUN27","name":"\"Auto Zimmermann GmbH\"","score":"0.00"},
      {"id":"DEX9KU8XHL33","name":"\"Venturi GmbH\"","score":"0.00"},
      {"id":"DEXABB9O9828","name":"\"Tecbike GmbH\"","score":"0.02"},
      {"id":"DEY0RLZI5C19","name":"\"Karl Heinz Becker Karosserie- und Fahrzeugbau GmbH\"","score":"0.00"},
      {"id":"DEYAPV27P301","name":"\"Steitz GmbH\"","score":"0.00"},
      {"id":"DEYG68ZCRQ88","name":"\"Tech S.A.T. Hamburg GmbH Technische Systeme für Avionic und Test\"","score":"0.00"},
      {"id":"DEYINR4Q1M41","name":"\"IKF Industrie- und Kommunalfahrzeuge GmbH\"","score":"0.00"},
      {"id":"DEYVKT0F8Y67","name":"\"Falkenrehder Fahrzeug- und Metall-Gesellschaft mbH\"","score":"0.00"},
      {"id":"DEZ5MJM6AF83","name":"\"Werner Gutperle GmbH & Co. KG\"","score":"0.04"},
      {"id":"DEZAHTTSZ096","name":"\"IAE Institut für Automobiltechnik und Elektromobilität GmbH\"","score":"0.00"},
      {"id":"DEZKCTZYBF24","name":"\"VARIO mobil Fahrzeugbau GmbH\"","score":"0.00"},
      {"id":"DEZRGYC2H379","name":"\"König Motorsport GmbH\"","score":"0.00"},
      {"id":"DEZTUJ3AAL89","name":"\"Auto Service Schröder UG (haftungsbeschränkt)\"","score":"0.02"}
    ]
}
        var dataJsoncompany = "\"" + dataJson.nodes + "\"";
        var domain = "https://pro.implisense.com/#/lists/new/companies/";
        for (var i = 0; i < json.profiles.length; i++) {
            var obj = json.profiles[i];
            //console.log (obj.name);
            if (obj.name === dataJsoncompany ) {
                $("#demo").html(obj.id);
                domain = domain + obj.id
                $("#demo").append(domain);
                $('iframe').prop('src', domain);
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