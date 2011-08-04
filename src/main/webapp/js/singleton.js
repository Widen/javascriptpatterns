var BallGame = {
	config : undefined,
	greenBall : undefined,
	mbWithBall : undefined,

	throwBall : function() {
		var moveXBy = mbWithBall.offsetLeft - greenBall.offsetLeft;
		var moveYBy = mbWithBall.offsetTop - greenBall.offsetTop;

		new Effect.Move(greenBall, {x: moveXBy, y: moveYBy, duration: 1});
	},

	moveBeaverNBall : function(event) {
		var moveXBy = event.clientX - mbWithBall.offsetLeft;
		var moveYBy = event.clientY - mbWithBall.offsetTop;

		new Effect.Move(mbWithBall, {x: moveXBy, y: moveYBy, duration: 1});
		new Effect.Move(greenBall, {x: moveXBy, y: moveYBy, duration: 1});
	},

	handleClick : function(event) {
		var eventElement = Event.element(event);

		if (eventElement.id === config.dancingId && mbWithBall.id !== config.dancingId) {
			mbWithBall = $(config.dancingId);
			BallGame.throwBall();
			return;
		}

		if (eventElement.id === config.nonDancingId && mbWithBall.id !== config.nonDancingId) {
			mbWithBall = $(config.nonDancingId);
			BallGame.throwBall();
			return;
		}

		BallGame.moveBeaverNBall(event);
	},

	init : function(conf) {
		config = conf;

		greenBall = $(config.ballId);
		mbWithBall = $(config.dancingId);

		document.observe('click', function(event) {
			BallGame.handleClick(event);
		});
	}
};

document.observe('dom:loaded', function() {
	BallGame.init({
		dancingId : 'dancingmoosenbeaver',
		nonDancingId : 'moosenbeaver',
		ballId : 'green-ball'
	});
});