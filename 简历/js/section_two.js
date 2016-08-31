window.onload = function() {
	var a = document.getElementById("section_two");
	var k = a.getElementsByTagName("img");
	var f = a.getElementsByClassName("message")[0].getElementsByTagName("span");
	var j = a.getElementsByTagName("li");
	for(var d = 0; d < j.length; d++) {
		(function(l) {
			j[l].onmouseover = function() {
				h(j);
				h(f);
				h(k);
				this.className = "bc_color";
				f[l].className = "xianshi";
				k[l].className = "xianshi"
			}
		})(d)
	}

	function h(i) {
		for(var l = 0; l < i.length; l++) {
			i[l].className = ""
		}
	}
	var g = document.getElementById("contncrnt_one").getElementsByTagName("img");
	var c = document.getElementById("contncrnt_two").getElementsByTagName("img");
	var b = document.getElementById("contncrnt_three").getElementsByTagName("img");

	function e(i) {
		i[1].onmouseover = function() {
			this.className = null;
			i[0].className = "one"
		};
		i[0].onmouseout = function() {
			this.className = null;
			i[1].className = "one"
		}
	}
	e(g);
	e(c);
	e(b)
};