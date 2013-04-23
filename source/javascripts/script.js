/* Author: 

*/
$(function() {
	function initialize() {

		var I105 = new google.maps.LatLng(41.17802410615967, -8.59554648399353);
		var BIBL = new google.maps.LatLng(41.177434610537155, -8.594902753829956);
		var mapOptions = {
			center: I105,
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false
		};
		var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

		var styles = [
  		{
    		stylers: [
      		{ hue: "#3498DB" },
      		{ saturation: -20 }
    		]			
  		},{
    		featureType: "road",
    		elementType: "geometry",
    		stylers: [
      		{ lightness: 100 },
      		{ visibility: "simplified" }
    		]
  		},{
    		featureType: "road",
    		elementType: "labels",
    		stylers: [
      		{ visibility: "off" }
    		]
  		}
		];

		map.setOptions({styles: styles});

		new google.maps.Marker({
			map:map,
			draggable:false,
			animation: google.maps.Animation.DROP,
			position: I105
		});

		new google.maps.Marker({
			map:map,
			draggable:false,
			animation: google.maps.Animation.DROP,
			position: BIBL
		});

		

	}
	google.maps.event.addDomListener(window, 'load', initialize);
});









































