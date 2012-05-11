var config;
var greenBall;
var mbWithBall;

function throwBall() {
	if (mbWithBall.id === config.dancingId) {
		mbWithBall = $(config.nonDancingId);
	}
	else {
		mbWithBall = $(config.dancingId);
	}

	var moveXBy = mbWithBall.offsetLeft - greenBall.offsetLeft;
	var moveYBy = mbWithBall.offsetTop - greenBall.offsetTop;

	new Effect.Move(greenBall, {x: moveXBy, y: moveYBy, duration: 1});
}

function moveBeaverNBall(event) {
	var moveXBy = event.clientX - mbWithBall.offsetLeft;
	var moveYBy = event.clientY - mbWithBall.offsetTop;

	new Effect.Move(mbWithBall, {x: moveXBy, y: moveYBy, duration: 1});
	new Effect.Move(greenBall, {x: moveXBy, y: moveYBy, duration: 1});
}

function handleClick(event) {
	var eventElement = Event.element(event);

	if ('A' === eventElement.tagName) {
		return;
	}

	if ((eventElement.id === config.dancingId && mbWithBall.id !== config.dancingId) ||
		(eventElement.id === config.nonDancingId && mbWithBall.id !== config.nonDancingId)) {
		throwBall();
		return;
	}

	moveBeaverNBall(event);
}

function init(conf) {
	config = conf;

	greenBall = $(config.ballId);
	mbWithBall = $(config.dancingId);

	document.observe('click', function(event) {
		handleClick(event);
	});
}

document.observe('dom:loaded', function() {
	init({
		dancingId : 'dancingmoosenbeaver',
		nonDancingId : 'moosenbeaver',
		ballId : 'green-ball'
	});
});