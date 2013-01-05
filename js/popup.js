//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;
var currentActor;
//loading popup with jQuery magic!
function loadPopup(){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#popupContact").fadeIn("slow");
		popupStatus = 1;
	}
}

//disabling popup with jQuery magic!
function disablePopup(){
	//disables popup only if it is enabled
	if(popupStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupContact").fadeOut("slow");
		popupStatus = 0;
		currentActor.remove();
	}
}

//centering popup
function centerPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact").height();
	var popupWidth = $("#popupContact").width();
	//centering
	$("#popupContact").css({
		"position": "absolute",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){

	//LOADING POPUP
	//Click the button event!
	
		$("#cupon1").click(function(){
			currentActor = $(
							'<div class="lineapopup"></div>'+
							'<img src="img/lucas.jpg" alt="Enzo Macchiavello (Lucas)" class="image-pop"/>'+	
							'<p class="contactArea">' +
							'</p> '
							);
			$("#popupContact").append(currentActor);		
			start();
		});
		$("#paula").click(function(){
			currentActor = $(
							'<h1 class="nombrea">Angela Peñaherrera (Paula)</h1>'  +
							'<div class="lineapopup"></div>'+
							'<img src="img/paula.jpg" alt="Angela Peñaherrera (Paula)" class="image-pop"/>'+
							'<p class="contactArea"> '+
								'Música y compositora guayaquileña.<br/><br/> '+
								'Trabaja desde los 12 años en fotografía.<br/><br/>'+
								'En la escena musical local es conocida como ex integrante de la banda punk THE CASSETTES.<br/><br/>'+
								'Sin Otoño, Sin Primavera es su primer largometraje como actriz.'+
								'</p>'
							);		
			$("#popupContact").append(currentActor);		
			start();
		});
		$("#juez").click(function(){
			currentActor = $(
							'<h1 class="nombrea">Andrés Crespo (Juez Neira)</h1>  '+
							'<div class="lineapopup"></div>'+
							'<img src="img/andres.jpg" alt="Andrés Crespo (Juez Neira)" class="image-pop"/>	'+
							'<p class="contactArea">  '+
								'Guionista, director y actor guayaquileño.<br/><br/> '+
								' Su actuación en la película Pescador de Sebastián Cordero le valió dos pemios internacionales '+
								' en los festivales de cine de Cartagena y Guadalajara.'+
							'</p>'
							);		
			$("#popupContact").append(currentActor);		
			start();
		});
		$("#aleja").click(function(){
			currentActor = $(
							'<h1 class="nombrea">Nathalie Vergara (Aleja)</h1>  '+
							'<div class="lineapopup"></div>'+
							'<img src="img/aleja.jpg" alt="Nathalie Vergara (Aleja)" class="image-pop"/>	'+
							'<p class="contactArea">  '+
							'Música guayaquileña.<br/><br/>'+
							'Es conocida por ser la vocalista de la banda Nata Cassette & The Walkmans. Su vida es el rock and roll.<br/><br/>'+
							'Sin Otoño, Sin Primavera es su primer largometraje como actriz.'+
							'</p>'
							);		
			$("#popupContact").append(currentActor);		
			start();
		});		
		$("#gloria").click(function(){
			currentActor = $(
							'<h1 class="nombrea">Paola Baldión (Gloria)</h1>'+  
							'<div class="lineapopup"></div>'+
							'<img src="img/gloria.jpg" alt="Paola Baldión (Gloria)" class="image-pop"/>'+
							'<p class="contactArea">  '+
								'Actriz colombiana.<br/> <br/>'+
								' Ha actuado en varios largometrajes internacionales.<br/><br/>'+
								' Protagonista de la película  RETRATOS EN UN MAR DE MENTIRAS de Carlos Gaviria,'+
								' le valió el premio a mejor actriz en Festival de Guadalajara.'+
								
							'</p>'
							);		
			$("#popupContact").append(currentActor);		
			start();
		});	
		$("#martin").click(function(){
			currentActor = $(
							'<h1 class="nombrea">Andrés Troya (Martín)</h1> '+ 
							'<div class="lineapopup"></div>'+
							'<img src="img/martin.jpg" alt="Andrés Troya (Martín)" class="image-pop"/>	'+
							'<p class="contactArea">  '+
								'Artista guayaquileño, dedicado actualmente a la gastronomía. <br/><br/>'+
								' Después de vivir su niñez en el Ecuador, viaja a Alemania a buscar fortuna, '+
								' lugar donde se convierte en un adulto.<br/><br/>'+
								' Sin Otoño, Sin Primavera es su primer largometraje como actor.'+

							'</p>'
							);		
			$("#popupContact").append(currentActor);		
			start();
		});
		$("#antonia").click(function(){
			currentActor = $(
							'<h1 class="nombrea">Paulina Obrist (Antonia)</h1>'+  
							'<div class="lineapopup"></div>'+
							'<img src="img/antonia.jpg" alt="Paulina Obrist (Antonia)" class="image-pop"/>	'+
							'<p class="contactArea">  '+
								' Artista guayaquileña. <br/><br/>  '+
								' Dirige El Inmundicipio, espacio dedicado al arte guayaco.<br/><br/>'+
								' Lo suyo son las letras y el performance diario.<br/><br/>'+
								' Sin Otoño, Sin Primavera es su primer largometraje como actriz.'+
								
							'</p>'
							);		
			$("#popupContact").append(currentActor);		
			start();
		});
		$("#ana").click(function(){
			currentActor = $(
							'<h1 class="nombrea">Lucía Moscoso (Ana)</h1>'+
							'<div class="lineapopup"></div>'+
							'<img src="img/ana.jpg" alt="Lucía Moscoso (Ana)" class="image-pop"/>'+
							'<p class="contactArea">'  +
								' Actriz machaleña. <br/> '+
								' Ha participado en varios cortometrajes nacionales.<br/><br/>'+
								' Pertenece al grupo Debate Teatral dirigido por María Villacís.<br/><br/>'+
								' También ha trabajado detrás de cámaras como productora de cortometrajes, '+
								' documentales y festivales de cine y de teatro del país.'+

							'</p>'
							);		
			$("#popupContact").append(currentActor);		
			start();
		});
		$("#rafa").click(function(){
			currentActor = $(
							'<h1 class="nombrea">Alejandro Fajardo (Rafa)</h1>'+
							'<div class="lineapopup"></div>'+
							'<img src="img/rafa.jpg" alt="Alejandro Fajardo (Rafa)" class="image-pop"/>'+
							'<p class="contactArea">'+
								' Actor guayaquileño.  <br/><br/>'+
								' Ha participado en varias obras de teatro como LAS DAMAS DEL EDEN y EL AMANTE.<br/><br/>'+
								' Su otra pasión: El Cine, lo ha llevado a actuar en varios cortometrajes y en el '+
								' largometraje PROMETEO DEPORTADO, del también director guayaquileño Fernando Mieles.'+
							'</p>'
							);		
			$("#popupContact").append(currentActor);		
			start();
		});
		$("#sofia").click(function(){
			currentActor = $(
							'<h1 class="nombrea">Andrea Espinoza (Sofía)</h1>'+
							'<div class="lineapopup"></div>'+
							'<img src="img/sofia.jpg" alt="Andrea Espinoza (Sofía)" class="image-pop"/>'+
							'<p class="contactArea">'+  	
								' En el 2005 inicia su carrera como cantante y participa en teatro.<br/><br/> '+
								' En 2009 llega al cine casi por accidente colaborando con algunas películas ecuatorianas.<br/><br/>'+
								' Sin Otoño, Sin Primavera es su primer largometraje como actriz.'+
							'</p>'
							);		
			$("#popupContact").append(currentActor);		
			start();
		});
	
		function start(){
			//centering with css
			centerPopup();
			//load popup
			loadPopup();
		}
				
	//CLOSING POPUP
	//Click the x event!
	$("#popupContactClose").click(function(){
		disablePopup();
	});
	//Click out event!
	$("#backgroundPopup").click(function(){
		disablePopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});

});