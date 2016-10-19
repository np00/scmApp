$(function() {  // load when DOM ready
  $('.selectedCompanyDetails').hide();
  }); // load when DOM ready
    $.getJSON( "../js/data.json").then(function(data) {
      $.each( data, function( key, val ) {
        if (val.id == 'DEJTTYJWPJ09' ){
          $('.selectedCompanyDetails').show();
          $('#debugCompanyName').text(val.label);
          $('#td711').text(val.score);
        }
      });
    })
    .fail(function() {
      console.debug('Error loading js/data.json');
    });
    $.getJSON( "../js/dataplus.json").then(function(data) {
      $.each( data, function( key, val ) {
        //console.debug(dataJson.nodes);
        if (val.id == 'DEJTTYJWPJ09' ){
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
          $("#td11").empty().append(val.name+'<br />'+val.street+'<br />'+val.zip+' '+val.city+'');
          $("#td12").empty().append(val.url);
          //$("#td21").empty().append(val.street);
          $("#td22").empty().append(val.email);
          //$("#td31").empty().append(val.zip + ' ' + val.city);
          $.each( val.socialMedia, function( key, val ) {
            $("#td32 ul").append('<li><span class="capizalize">' + key + '</span>: ' + val + '</li>');
          });
          
          $("#td21").empty().append(val.phone);
          $("#td42").empty().append('');
          $("#td21").append('<br />'+val.fax);
          $("#td52").empty().append('');
          $("#td61").empty().append(val.legalForm);
          $("#td62").empty().append(val.externalIds.hr.court + ' ' + val.externalIds.hr.type + ' ' + val.externalIds.hr.number);
          $("#td71").empty().append(val.capital);
          $.each( val.industries.nace, function( key, val ) {
            $("#td31 ul").append('<li>' + val.title + '</li>');
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
     $.getJSON( "../js/events.json").then(function(data) {
      $.each( data, function( key, val ) {
        //console.debug(dataJson.nodes);
        if (val.id == 'DEJTTYJWPJ09' ){
          $("#td101").empty();
          $.each( val.events, function( key, val ) {
            $("#td101").append('<section class="profile event hrb_other" id=""><header><div class="icon-news"></div><time></time>'+val.value+'</header><main></main><footer></footer></section> ');
      
          });
        }
      });
    })
    .fail(function() {
      console.debug('Error loading js/events.json');
    });
    $.getJSON( "../js/profile.json").then(function(data) {
      $.each( data, function( key, val ) {
        //console.debug(dataJson.nodes);
        if (val.id == 'DEJTTYJWPJ09' ){
          $("#td121").empty();
          var scoreTimesHundred;
          $.each( val.topics, function( key, val ) {
            scoreTimesHundred = val.score *100;
            val.score = val.score.toFixed(2);
            $("#td121").append('<div class="bar-indicator"><span class="label">'+val.name+'</span><div class="bar"><div class="indicator" style="width:'+scoreTimesHundred+'%">'+val.score+' %</div></div></div><br />');
      
          });
        }
      });
    })
    .fail(function() {
      console.debug('Error loading js/events.json');
    });