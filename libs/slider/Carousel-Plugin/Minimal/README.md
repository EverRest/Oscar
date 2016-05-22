# Carousel

Plugin for creating carousel with autoplay <a href="https://jsfiddle.net/Umkka/ttm6nka6/">Demo</a>

For using just add:
<br><code>&lt;script src="js/slider.min.js">&lt;/script></code> to the body
<br><code>&lt;link rel="stylesheet" href="css/slider.css"></code> to the head

Markup example:
<pre>
	&lt;div class="slider" id="slider">
		&lt;div class="slItems">
			&lt;div class="slItem" style="background-image: url('img/1.jpg');">
				&lt;div class="slText">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				&lt;/div>
			&lt;/div>
			&lt;div class="slItem" style="background-image: url('img/2.jpg');">
				&lt;div class="slText">
					Praesent consequat sapien ut dui hendrerit imperdiet.  
				&lt;/div>
			&lt;/div>
			&lt;div class="slItem" style="background-image: url('img/3.jpg');">
				&lt;div class="slText">
					Morbi aliquam tristique rutrum. 
				&lt;/div>
			&lt;/div>
		&lt;/div>
	&lt;/div>
</pre>

Init example:
<pre>
  $('#slider').rbtSlider({
		height: '100vh', //carousel height
		'dots': true, //dot controls
		'arrows': true, //arrow controls
		'auto': 3 //autoplay time in seconds
	});
</pre>

All of this arguments are not required
