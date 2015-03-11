var Blob = require('../');
	URL = window.URL || window.webkitURL;

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (this.readyState === 4){
		var b = new Blob([xhr.response], {
			type: 'image/jpeg'
		});

		var i = new Image();
		i.width = 335;
		i.height = 525;
		document.body.appendChild(i);

		i.src = URL.createObjectURL(b);
	}
};
xhr.open('GET', 'dino', true);
xhr.responseType = "arraybuffer";
xhr.send();
