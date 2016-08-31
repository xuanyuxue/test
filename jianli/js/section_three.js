$(window).ready(function() {
	var d;
	var c = 0;

	function b() {
		$("#slide_three .warp .point span").removeClass("visible");
		$("#slide_three .warp .fig img").fadeOut("slow")
	}
	$("#slide_three .warp .point span").click(function() {
		if($("#slide_three .warp .fig img").is(":animated")) {
			return
		}
		if(c == $(this).index()) {
			return
		} else {
			clearInterval(d);
			b();
			$(this).addClass("visible");
			c = $(this).index();
			$($("#slide_three .warp .fig img")[$(this).index()]).fadeIn("slow", a())
		}
	});
	$("#slide_three .warp #left").click(function() {
		if($("#slide_three .warp .fig img").is(":animated")) {
			return
		}
		clearInterval(d);
		c--;
		if(c == -1) {
			c = 4
		}
		b();
		$($("#slide_three .warp .fig img")[c]).fadeIn("slow", a());
		$($("#slide_three .warp .point span")[c]).addClass("visible")
	});
	$("#slide_three .warp #right").click(function() {
		if($("#slide_three .warp .fig img").is(":animated")) {
			return
		}
		clearInterval(d);
		c++;
		if(c == 5) {
			c = 0
		}
		b();
		$($("#slide_three .warp .fig img")[c]).fadeIn("slow", a());
		$($("#slide_three .warp .point span")[c]).addClass("visible")
	});

	function a() {
		d = setInterval(function() {
			c++;
			if(c == 5) {
				c = 0
			}
			b();
			$($("#slide_three .warp .fig img")[c]).fadeIn();
			$($("#slide_three .warp .point span")[c]).addClass("visible")
		}, 2000)
	}
	a()
});