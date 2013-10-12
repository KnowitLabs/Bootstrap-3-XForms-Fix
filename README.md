BetterXforms jQuery plugin
======================

> This plugin improves the look and feel for EPiServer xforms and adds support for [iCheck jQuery plugin](https://github.com/fronteed/iCheck/)

## Features
- Works with Bootstrap 2.3.x and Bootstrap 3
- Adds support for [iCheck jQuery plugin](https://github.com/fronteed/iCheck/) (all iCheck [features](https://github.com/fronteed/iCheck/#options) are supported)

## Getting Started

In order for the plugin to work you need to modify the output from xfoms. Remove all table markup and replace the TD elements with a DIV element.

The markup should look like this.

```html
<div class="xform">
	<div class="form-group">
		<label for="epi_generated_label">Name</label>
	  <input type="text" id="epi_generated_text_field_id" name="epi_generated_text_field_name" size="20" value="">
	</div>
</div>
```

- Include CSS <code>bootstrap.betterxforms.css</code>
- Include JS <code>jquery.betterxforms.v1.0.js</code>
- Add the code below after the dom is ready.

```js
$('.xform').BetterXforms({
	bsv : 3
});
```

If you want enable iCheck you need to add the following.

- Include CSS <code>bootstrap.icheck.css</code>
- Include CSS <code>iCheck/skins/square/blue.css</code> (Or any other skin you like)
- Include JS <code>jquery.icheck.min.js</code>
- Add the code below after the dom is ready.

*Notice the checkboxClass and radioClass have to cohere with the iCheck skin you included*

```js
$('.xform').BetterXforms({
	bsv : 3,
	iCheck : {
		enabled : true,
		labelHover : true,
		checkboxClass : 'icheckbox_square-blue',
		radioClass : 'iradio_square-blue',
		cursor: true
	}
});
```


### Dependencies
- jQuery (required)
- iCheck (optional)

## Changelog
- v1.0 - Completely new release
- v0.2 – Some performance improvements
- v0.1 – Initial release