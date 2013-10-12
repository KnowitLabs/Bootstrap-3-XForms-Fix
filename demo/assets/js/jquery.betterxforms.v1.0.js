/**
 * @summary     BetterXforms
 * @description Improve EPiServer Xforms
 * @version     1.0
 * @file        jquery.betterxforms.v1.0js
 * @author      Andreas Norman & Tobias Korsbäck
 * @contact     www.knowit.se/contact
 *
 * This source file is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY.
 *
 * For details please refer to: https://github.com/KnowitLabs/Bootstrap-3-XForms-Fix
 */

(function($){

	"use strict";

	$.BetterXforms = function( el, options ) {

		// Base
		var base = this;
		
		// Access to jQuery and DOM versions of element
		base.$el = $( el );
		base.el = el;
		
		// Add a reverse reference to the DOM object
		base.$el.data( '.BetterXforms', base );
		
		// Init
		base.init = function() {

			// Get all the specified options
			base.options = $.extend( {},$.BetterXforms.defaultOptions, options );

			/**
			 * TODO
			 *
			 * Check bootstrap version here and
			 * set the correct class
			 */

			var inputElementClass = 'form-control';
			var inputGroupClass = 'form-group';

			// Loop through all the input elements
			$( '.xform input, .xform select' ).each( function( index, e ) {

				// Input element
				var inputElement = this;

				// Access to jQuery and DOM versions of element
				inputElement.$el = $( inputElement );
				inputElement.el = inputElement;

				// Check element type
				if( e.type === 'text' || e.type === 'select-one' || e.type === 'select-multiple' ) {

					// The element is a text field or select element
					// Add bootstrap class class
					inputElement.$el.addClass( inputElementClass );
				} else if( e.type === 'checkbox' || e.type === 'radio' ) {

					// The element is a checkbox or radio button
					// Remove the group class and add element type class
					inputElement.$el.closest( 'div' ).removeClass( inputGroupClass ).addClass( e.type );
				}
			});

			// Check if iCheck is enabled
			if( base.options.iCheck.enabled ) {

				// Check if iCheck plugin is loaded
				if( $.fn.iCheck ) {

					// Run iCheck
					base.iCheck( base, base.options.iCheck );
				};
			}
		};
		
		// iCheck
		base.iCheck = function(base, iCheckOptions) {

			// Apply iCheck
			$( base.el ).iCheck(iCheckOptions);
		};

		// Run initializer
		base.init();
	};
	
	// Default options
	$.BetterXforms.defaultOptions = {
		bsVersion : 3, // Bootstrap version
		iCheck : {
			enabled : false
		}
	};
	
	// Prototype
	$.fn.BetterXforms = function( options ) {
		return this.each(function() {
			( new $.BetterXforms( this, options ) );
		});
	};

})(jQuery);