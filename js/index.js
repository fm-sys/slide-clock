var size = 86;
var columns = Array.from(document.getElementsByClassName('column'));
var d = void 0,
c = void 0;
var classList = ['visible', 'close', 'far', 'far', 'distant', 'distant'];
var use24HourClock = true;

function padClock(p, n) {
	return p + ('0' + n).slice(-2);
}

function getClock() {
	d = new Date();
	return [use24HourClock ? d.getHours() : d.getHours() % 12 || 12, d.getMinutes(), d.getSeconds()].reduce(padClock, '');
}

function getClass(n, i2) {
	return classList.find(function (class_, classIndex) {
		return Math.abs(n - i2) === classIndex;
	}) || '';
}

var loop = setInterval(function () {
	c = getClock();
	
	columns.forEach(function (ele, i) {
		var n = +c[i];
		var offset = -n * size;
		ele.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + size / 2 + 'px))';
		Array.from(ele.children).forEach(function (ele2, i2) {
			ele2.className = 'num ' + getClass(n, i2);
		});
	});
}, 200 + Math.E * 10);

function changeBg() {
	var currentTime = new Date().getHours();
	if (6 <= currentTime&&currentTime < 9) {
		document.body.style.backgroundImage ="url('img/landscape-morning.svg')"
	}
	else if (9 <= currentTime&&currentTime < 12) {
		document.body.style.backgroundImage ="url('img/landscape-mid-morning.svg')"
	}
	else if (12 <= currentTime&&currentTime < 17) {
		document.body.style.backgroundImage ="url('img/landscape-midday.svg')"
	}
	else if (17 <= currentTime&&currentTime < 22) {
		document.body.style.backgroundImage ="url('img/landscape-evening.svg')"
	}
	else {
		document.body.style.backgroundImage ="url('img/landscape-night.svg')"
	}
}

changeBg();
setInterval(function(){ changeBg(); }, 300000); //300000 means 5 min