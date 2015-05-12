/*!
 * masonry basic magical layouts
 * Isotope Filter & sort 
 * http://isotope.metafizzy.co
 */
// -------------------------- masonry basic layouts -------------------------- //	
	$(function() {
		
		//imageloaded & isotope
		var $container = $('#container');
		// initialize Masonry after all images have loaded  
		$container.imagesLoaded( function() {
			$container.isotope({
				itemSelector: '.block',
				stamp: '.stamp',
				masonry : {
							columnWidth: 300,
							isFitWidth: true,
							isAnimated: true
							}
				});
			/*
			$container.on( 'click', '.small', function() {
				$(this).toggleClass('big');
  				$container.isotope('layout');
			});
			*/
		});
			
// -------------------------- Isotope Filter & sort -------------------------- //
		// bind filter button click
		$('#filters').on( 'click', 'button', function() {
			var filterValue = $( this ).attr('data-filter');
			$container.isotope({ filter: filterValue });
		});

		// change is-checked class on buttons
		$('.button-group').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'button', function() {
  				$buttonGroup.find('.is-checked').removeClass('is-checked');
  				$( this ).addClass('is-checked');
				});
		});
	
	});