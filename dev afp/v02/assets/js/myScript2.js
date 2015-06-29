var controller = new ScrollMagic.Controller();

// build scene


var scene = new ScrollMagic.Scene({triggerElement: "#mainCoverImg"})
	// trigger animation by adding a css class
	.setClassToggle("#img_largeA", "animate")
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mainCoverImg"})
	// trigger animation by adding a css class
	.setClassToggle("#img_largeB", "animate")
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#img_largeA"})
	// trigger animation by adding a css class
	.setClassToggle("#img_mediumA", "animate")
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
	
var scene = new ScrollMagic.Scene({triggerElement: "#img_largeA"})
	// trigger animation by adding a css class
	.setClassToggle("#img_mediumB", "animate")
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#img_mediumA"})
	// trigger animation by adding a css class
	.setClassToggle("#img_smallA", "animate")
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
	
var scene = new ScrollMagic.Scene({triggerElement: "#img_mediumA"})
	// trigger animation by adding a css class
	.setClassToggle("#img_smallB", "animate")
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
