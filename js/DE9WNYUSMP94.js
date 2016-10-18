var data = [
['Karosseriewerk Heinrich Meyer GmbH', 'Göttinger Tageblatt Media GmbH', 1],
['Göttinger Tageblatt Media GmbH', 'Karosseriewerk Heinrich Meyer GmbH', 1],
['Göttinger Tageblatt Media GmbH', 'Neue Anzeigenblatt Verlags-GmbH', 2],
['Neue Anzeigenblatt Verlags-GmbH', 'Göttinger Tageblatt Media GmbH', 2],
['Göttinger Tageblatt Media GmbH', 'Anzeigenblatt Eichsfeld Verwaltungs-GmbH', 5],
['Anzeigenblatt Eichsfeld Verwaltungs-GmbH', 'Göttinger Tageblatt Media GmbH', 5],
['Göttinger Tageblatt Media GmbH', 'RND RedaktionsNetzwerk Deutschland GmbH', 2],
['RND RedaktionsNetzwerk Deutschland GmbH', 'Göttinger Tageblatt Media GmbH', 2],
['Göttinger Tageblatt Media GmbH', 'CITIPOST Göttingen GmbH', 6],
['CITIPOST Göttingen GmbH', 'Göttinger Tageblatt Media GmbH', 6],
['Göttinger Tageblatt Media GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 7],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Göttinger Tageblatt Media GmbH', 7],
['Göttinger Tageblatt Media GmbH', 'Philapress Zeitschriften und Medien Beteiligungs GmbH', 4],
['Philapress Zeitschriften und Medien Beteiligungs GmbH', 'Göttinger Tageblatt Media GmbH', 4],
['Göttinger Tageblatt Media GmbH', 'HL Digital Verwaltungs GmbH', 2],
['HL Digital Verwaltungs GmbH', 'Göttinger Tageblatt Media GmbH', 2],
['Göttinger Tageblatt Media GmbH', 'Dr. Erich Madsack GmbH', 2],
['Dr. Erich Madsack GmbH', 'Göttinger Tageblatt Media GmbH', 2],
['Göttinger Tageblatt Media GmbH', 'GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 5],
['GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 'Göttinger Tageblatt Media GmbH', 5],
['Göttinger Tageblatt Media GmbH', 'Ex-Akt-Zustelldienste GmbH', 3],
['Ex-Akt-Zustelldienste GmbH', 'Göttinger Tageblatt Media GmbH', 3],
['Göttinger Tageblatt Media GmbH', 'Wilhelm Bing Druckerei und Verlag GmbH', 2],
['Wilhelm Bing Druckerei und Verlag GmbH', 'Göttinger Tageblatt Media GmbH', 2],
['Göttinger Tageblatt Media GmbH', 'Radio Madsack Niedersachsen Verwaltungs-GmbH', 2],
['Radio Madsack Niedersachsen Verwaltungs-GmbH', 'Göttinger Tageblatt Media GmbH', 2],
['Göttinger Tageblatt Media GmbH', 'HITZEROTH Druck + Medien Geschäftsführungs-GmbH', 2],
['HITZEROTH Druck + Medien Geschäftsführungs-GmbH', 'Göttinger Tageblatt Media GmbH', 2],
['Karosseriewerk Heinrich Meyer GmbH', 'GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 1],
['GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 'Karosseriewerk Heinrich Meyer GmbH', 1],
['GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 'Jens Volkmann Vertriebs-GmbH', 2],
['Jens Volkmann Vertriebs-GmbH', 'GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 2],
['GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 'Ex-Akt-Zustelldienste GmbH', 4],
['Ex-Akt-Zustelldienste GmbH', 'GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 4],
['GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 'CITIPOST Göttingen GmbH', 4],
['CITIPOST Göttingen GmbH', 'GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 4],
['GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 4],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 4],
['GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 'Manfred Duda Vertriebs-GmbH', 2],
['Manfred Duda Vertriebs-GmbH', 'GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 2],
['GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 'Anzeigenblatt Eichsfeld Verwaltungs-GmbH', 3],
['Anzeigenblatt Eichsfeld Verwaltungs-GmbH', 'GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 3],
['GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 'Göttinger Tageblatt Media GmbH', 5],
['Göttinger Tageblatt Media GmbH', 'GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 5],
['GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 'Zeitungsvertriebsgesellschaft Göttingen-West GmbH', 2],
['Zeitungsvertriebsgesellschaft Göttingen-West GmbH', 'GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 2],
['GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 'Philapress Zeitschriften und Medien Beteiligungs GmbH', 3],
['Philapress Zeitschriften und Medien Beteiligungs GmbH', 'GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 3],
['Karosseriewerk Heinrich Meyer GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 1],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Karosseriewerk Heinrich Meyer GmbH', 1],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'OSTERLAND SONNTAG Verlagsgesellschaft mbH', 2],
['OSTERLAND SONNTAG Verlagsgesellschaft mbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'HL Digital Verwaltungs GmbH', 5],
['HL Digital Verwaltungs GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 5],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Göttinger Tageblatt Media GmbH', 7],
['Göttinger Tageblatt Media GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 7],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Marktspiegel Verlag GmbH', 2],
['Marktspiegel Verlag GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Dr. Erich Madsack GmbH', 6],
['Dr. Erich Madsack GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 6],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Verlag Dresdner Nachrichten Verwaltungs-GmbH', 2],
['Verlag Dresdner Nachrichten Verwaltungs-GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'RND RedaktionsNetzwerk Deutschland GmbH', 3],
['RND RedaktionsNetzwerk Deutschland GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 3],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'PMV Printmedien Vertrieb GmbH', 2],
['PMV Printmedien Vertrieb GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'EXTRA Verlagsgesellschaft mbH', 2],
['EXTRA Verlagsgesellschaft mbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Citipost Nordhessen GmbH', 2],
['Citipost Nordhessen GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Laporte·Kartenshop GmbH', 2],
['Laporte·Kartenshop GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'LVZ Logistik GmbH', 2],
['LVZ Logistik GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'sportbuzzer GmbH', 2],
['sportbuzzer GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Madsack Medien Verwaltungs GmbH', 3],
['Madsack Medien Verwaltungs GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 3],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Brandenburgische Medienbeteiligungs-GmbH', 4],
['Brandenburgische Medienbeteiligungs-GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 4],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Radio Madsack Niedersachsen Verwaltungs-GmbH', 5],
['Radio Madsack Niedersachsen Verwaltungs-GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 5],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Philapress Zeitschriften und Medien Beteiligungs GmbH', 3],
['Philapress Zeitschriften und Medien Beteiligungs GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 3],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Anzeigenblatt Eichsfeld Verwaltungs-GmbH', 3],
['Anzeigenblatt Eichsfeld Verwaltungs-GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 3],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'MMS Madsack Medien Service GmbH', 2],
['MMS Madsack Medien Service GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Zeitungs-Vertriebs-GmbH Wolfsburg', 3],
['Zeitungs-Vertriebs-GmbH Wolfsburg', 'Beteiligungsgesellschaft Neue Zeitung mbH', 3],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Madsack Media AG', 2],
['Madsack Media AG', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'HITZEROTH Druck + Medien Geschäftsführungs-GmbH', 3],
['HITZEROTH Druck + Medien Geschäftsführungs-GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 3],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 4],
['GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 4],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Madsack Redaktions-Service GmbH', 2],
['Madsack Redaktions-Service GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'CITIPOST Göttingen GmbH', 4],
['CITIPOST Göttingen GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 4],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Ex-Akt-Zustelldienste GmbH', 2],
['Ex-Akt-Zustelldienste GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Leipziger Medien Service GmbH', 2],
['Leipziger Medien Service GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Neue Anzeigenblatt Verlags-GmbH', 9],
['Neue Anzeigenblatt Verlags-GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 9],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'CITIPOST GmbH', 2],
['CITIPOST GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'hier.de verwaltungsgesellschaft mbh.', 3],
['hier.de verwaltungsgesellschaft mbh.', 'Beteiligungsgesellschaft Neue Zeitung mbH', 3],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Märkische Verlags- und Druck-Gesellschaft mbH Potsdam', 4],
['Märkische Verlags- und Druck-Gesellschaft mbH Potsdam', 'Beteiligungsgesellschaft Neue Zeitung mbH', 4],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'teleconsult Planungs- und Beratungsgesellschaft für Kommunikationstechnologien mbH', 3],
['teleconsult Planungs- und Beratungsgesellschaft für Kommunikationstechnologien mbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 3],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Hanseatische Verlags-Beteiligungs AG', 2],
['Hanseatische Verlags-Beteiligungs AG', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Zeitungsverlag Naumburg Nebra Verwaltungs GmbH', 2],
['Zeitungsverlag Naumburg Nebra Verwaltungs GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'ZACK Vertriebs- und Werbeservice GmbH', 2],
['ZACK Vertriebs- und Werbeservice GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'WM Vertriebs- und Werbeservice GmbH', 2],
['WM Vertriebs- und Werbeservice GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Leipziger Verlags- und Druckerei-Verwaltungs-GmbH', 2],
['Leipziger Verlags- und Druckerei-Verwaltungs-GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'The MediaLab Beteiligungsgesellschaft mbH', 2],
['The MediaLab Beteiligungsgesellschaft mbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Madsack Market Solutions GmbH', 4],
['Madsack Market Solutions GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 4],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Freundeskreis Radio Brocken Beteiligungs-GmbH', 3],
['Freundeskreis Radio Brocken Beteiligungs-GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 3],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Leipziger Anzeigenblatt Verlag Beteiligungs-GmbH', 2],
['Leipziger Anzeigenblatt Verlag Beteiligungs-GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 2],
['Beteiligungsgesellschaft Neue Zeitung mbH', 'Wilhelm Bing Druckerei und Verlag GmbH', 3],
['Wilhelm Bing Druckerei und Verlag GmbH', 'Beteiligungsgesellschaft Neue Zeitung mbH', 3],
];

var colors = {
"Karosseriewerk Heinrich Meyer GmbH": "#da4480",
"Anzeigenblatt Eichsfeld Verwaltungs-GmbH": "#5ab449",
"Beteiligungsgesellschaft Neue Zeitung mbH": "#7f5acd",
"Brandenburgische Medienbeteiligungs-GmbH": "#aab740",
"CITIPOST GmbH": "#ce58c0",
"CITIPOST Göttingen GmbH": "#50a26e",
"Citipost Nordhessen GmbH": "#d1434b",
"Dr. Erich Madsack GmbH": "#45c0bc",
"EXTRA Verlagsgesellschaft mbH": "#ce5929",
"Ex-Akt-Zustelldienste GmbH": "#4e7bda",
"Freundeskreis Radio Brocken Beteiligungs-GmbH": "#d49d3c",
"GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH": "#6660a3",
"Göttinger Tageblatt Media GmbH": "#7b853c",
"HITZEROTH Druck + Medien Geschäftsführungs-GmbH": "#b58dde",
"HL Digital Verwaltungs GmbH": "#97622e",
"Hanseatische Verlags-Beteiligungs AG": "#609dd6",
"Jens Volkmann Vertriebs-GmbH": "#e29074",
"LVZ Logistik GmbH": "#9c4b88",
"Laporte·Kartenshop GmbH": "#ab505f",
"Leipziger Anzeigenblatt Verlag Beteiligungs-GmbH": "#dc85b6",
"Leipziger Medien Service GmbH": "#5ab449",
"Leipziger Verlags- und Druckerei-Verwaltungs-GmbH": "#7f5acd",
"MMS Madsack Medien Service GmbH": "#aab740",
"Madsack Market Solutions GmbH": "#ce58c0",
"Madsack Media AG": "#50a26e",
"Madsack Medien Verwaltungs GmbH": "#d1434b",
"Madsack Redaktions-Service GmbH": "#45c0bc",
"Manfred Duda Vertriebs-GmbH": "#ce5929",
"Marktspiegel Verlag GmbH": "#4e7bda",
"Märkische Verlags- und Druck-Gesellschaft mbH Potsdam": "#d49d3c",
"Neue Anzeigenblatt Verlags-GmbH": "#6660a3",
"OSTERLAND SONNTAG Verlagsgesellschaft mbH": "#7b853c",
"PMV Printmedien Vertrieb GmbH": "#b58dde",
"Philapress Zeitschriften und Medien Beteiligungs GmbH": "#97622e",
"RND RedaktionsNetzwerk Deutschland GmbH": "#609dd6",
"Radio Madsack Niedersachsen Verwaltungs-GmbH": "#e29074",
"The MediaLab Beteiligungsgesellschaft mbH": "#9c4b88",
"Verlag Dresdner Nachrichten Verwaltungs-GmbH": "#ab505f",
"WM Vertriebs- und Werbeservice GmbH": "#dc85b6",
"Wilhelm Bing Druckerei und Verlag GmbH": "#5ab449",
"ZACK Vertriebs- und Werbeservice GmbH": "#7f5acd",
"Zeitungs-Vertriebs-GmbH Wolfsburg": "#aab740",
"Zeitungsverlag Naumburg Nebra Verwaltungs GmbH": "#ce58c0",
"Zeitungsvertriebsgesellschaft Göttingen-West GmbH": "#50a26e",
"hier.de verwaltungsgesellschaft mbh.": "#d1434b",
"sportbuzzer GmbH": "#45c0bc",
"teleconsult Planungs- und Beratungsgesellschaft für Kommunikationstechnologien mbH": "#ce5929",
};

var sortOrder = [
"Karosseriewerk Heinrich Meyer GmbH",
"Anzeigenblatt Eichsfeld Verwaltungs-GmbH",
"Beteiligungsgesellschaft Neue Zeitung mbH",
"Brandenburgische Medienbeteiligungs-GmbH",
"CITIPOST GmbH",
"CITIPOST Göttingen GmbH",
"Citipost Nordhessen GmbH",
"Dr. Erich Madsack GmbH",
"EXTRA Verlagsgesellschaft mbH",
"Ex-Akt-Zustelldienste GmbH",
"Freundeskreis Radio Brocken Beteiligungs-GmbH",
"GÖTTINGER TAGEBLATT Transport- und Verteilungs-Gesellschaft mbH",
"Göttinger Tageblatt Media GmbH",
"HITZEROTH Druck + Medien Geschäftsführungs-GmbH",
"HL Digital Verwaltungs GmbH",
"Hanseatische Verlags-Beteiligungs AG",
"Jens Volkmann Vertriebs-GmbH",
"LVZ Logistik GmbH",
"Laporte·Kartenshop GmbH",
"Leipziger Anzeigenblatt Verlag Beteiligungs-GmbH",
"Leipziger Medien Service GmbH",
"Leipziger Verlags- und Druckerei-Verwaltungs-GmbH",
"MMS Madsack Medien Service GmbH",
"Madsack Market Solutions GmbH",
"Madsack Media AG",
"Madsack Medien Verwaltungs GmbH",
"Madsack Redaktions-Service GmbH",
"Manfred Duda Vertriebs-GmbH",
"Marktspiegel Verlag GmbH",
"Märkische Verlags- und Druck-Gesellschaft mbH Potsdam",
"Neue Anzeigenblatt Verlags-GmbH",
"OSTERLAND SONNTAG Verlagsgesellschaft mbH",
"PMV Printmedien Vertrieb GmbH",
"Philapress Zeitschriften und Medien Beteiligungs GmbH",
"RND RedaktionsNetzwerk Deutschland GmbH",
"Radio Madsack Niedersachsen Verwaltungs-GmbH",
"The MediaLab Beteiligungsgesellschaft mbH",
"Verlag Dresdner Nachrichten Verwaltungs-GmbH",
"WM Vertriebs- und Werbeservice GmbH",
"Wilhelm Bing Druckerei und Verlag GmbH",
"ZACK Vertriebs- und Werbeservice GmbH",
"Zeitungs-Vertriebs-GmbH Wolfsburg",
"Zeitungsverlag Naumburg Nebra Verwaltungs GmbH",
"Zeitungsvertriebsgesellschaft Göttingen-West GmbH",
"hier.de verwaltungsgesellschaft mbh.",
"sportbuzzer GmbH",
"teleconsult Planungs- und Beratungsgesellschaft für Kommunikationstechnologien mbH",
];

function sort(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)); }

var ch = viz.ch().data(data)
      .padding(.01)
      .sort(sort)
	  .innerRadius(330)
	  .outerRadius(350)
	  .duration(1000)
	  .chordOpacity(0.3)
	  .labelPadding(.03)
      .fill(function(d){ return colors[d];});

var width=1200, height=1100;

var svg = d3.select("#roundGraph").append("svg").attr("height",height).attr("width",width);

svg.append("g").attr("transform", "translate(600,550)").call(ch);

// adjust height of frame in bl.ocks.org
d3.select(self.frameElement).style("height", height+"px").style("width", width+"px"); 