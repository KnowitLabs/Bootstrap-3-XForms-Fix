$(function() {
	// Get all the inputs
	$inputs = $(".xform input").each(function(index, e) {
		// Define this
		$_this = $(this);

		// Textfields
		if(e.type === 'text' || e.type === 'select') {
			$_this.addClass('form-control');
		}

		// Check boxes
		if(e.type === 'checkbox' || e.type === 'radio') {
			$_this.closest('div').removeClass("form-group").addClass(e.type);
		}
	});
});