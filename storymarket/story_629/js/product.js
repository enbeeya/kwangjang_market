/*!
 * masonry basic magical layouts
 * Isotope Filter & sort 
 * http://isotope.metafizzy.co
 */
// -------------------------- masonry basic layouts -------------------------- //
	
	$( function() {
		//make image-HoleInOne
		for(var i=1; i<19; i++){
			$('<div class="block small holeInOne"><img src="image/HOLEINONE/' + i + '.jpg"/></div>').appendTo('#container');
			};
			
		//make image-prestige
		for(var i=1; i<14; i++){
			$('<div class="block small prestige"><img src="image/PRESTIGE/' + i + '.jpg"/></div>').appendTo('#container');
			};
		
		//make image-premium_prestige	
		for(var i=1; i<14; i++){
			$('<div class="block small premium_prestige"><img src="image/PREMIUM_PRESTIGE/' + i + '.jpg"/></div>').appendTo('#container');
			};		
				
		//make image-Fall_Winter		
		for(var i=1; i<15; i++){
			$('<div class="block small fall_winter"><img src="image/Fall_Winter/' + i + '.jpg"/></div>').appendTo('#container');
			};		
		
		//make image-World_Best	
		for(var i=1; i<11; i++){
			$('<div class="block small world_best"><img src="image/World_Best/' + i + '.jpg"/></div>').appendTo('#container');
			};		
		
	});