// JavaScript Document
$( function() {
	//imageloaded & isotope
	var $container = $('#container');
	// initialize Masonry after all images have loaded  
		$container.imagesLoaded( function() {
			$container.masonry({
				itemSelector: '.block',
				columnWidth: 200,
				isFitWidth: true	
			});
		});
	});
