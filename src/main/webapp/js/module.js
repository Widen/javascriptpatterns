var BallGame = function() {
	var config;
	var greenBall;
	var mbWithBall;

	function throwBall() {
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

		if (eventElement.id === config.dancingId && mbWithBall.id !== config.dancingId) {
			mbWithBall = $(config.dancingId);
			throwBall();
			return;
		}

		if (eventElement.id === config.nonDancingId && mbWithBall.id !== config.nonDancingId) {
			mbWithBall = $(config.nonDancingId);
			throwBall();
			return;
		}

		moveBeaverNBall(event);
	}

	return {

		///// PUBLIC API /////

		init : function(conf) {
			config = conf;

			greenBall = $(config.ballId);
			mbWithBall = $(config.dancingId);

			document.observe('click', function(event) {
				handleClick(event);
			});
		}
	}
}();

document.observe('dom:loaded', function() {
	BallGame.init({
		dancingId : 'dancingmoosenbeaver',
		nonDancingId : 'moosenbeaver',
		ballId : 'green-ball'
	});
});