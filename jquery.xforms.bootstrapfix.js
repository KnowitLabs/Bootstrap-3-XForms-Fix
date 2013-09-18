$(document).ready(function($) {
		// text field
		$inputs = $(".xform input:text").each(function(index) {
			$(this).addClass('form-control');
		});

		$inputs = $(".xform input:radio").each(function(index) {
			$(this).closest('div').removeClass("form-group").addClass("radio");
		});

		$inputs = $(".xform input:checkbox").each(function(index) {
			$(this).closest('div').removeClass("form-group").addClass('checkbox');
		});

		$inputs = $(".xform select").each(function(index) {
			$(this).addClass('form-control');
		});
});