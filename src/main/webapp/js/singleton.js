var BallGame = {
	config : undefined,
	greenBall : undefined,
	mbWithBall : undefined,

	throwBall : function() {
		if (BallGame.mbWithBall.id === BallGame.config.dancingId) {
			BallGame.mbWithBall = $(BallGame.config.nonDancingId);
		}
		else {
			BallGame.mbWithBall = $(BallGame.config.dancingId);
		}

		var moveXBy = BallGame.mbWithBall.offsetLeft - BallGame.greenBall.offsetLeft;
		var moveYBy = BallGame.mbWithBall.offsetTop - BallGame.greenBall.offsetTop;

		new Effect.Move(BallGame.greenBall, {x: moveXBy, y: moveYBy, duration: 1});
	},

	moveBeaverNBall : function(event) {
		var moveXBy = event.clientX - BallGame.mbWithBall.offsetLeft;
		var moveYBy = event.clientY - BallGame.mbWithBall.offsetTop;

		new Effect.Move(BallGame.mbWithBall, {x: moveXBy, y: moveYBy, duration: 1});
		new Effect.Move(BallGame.greenBall, {x: moveXBy, y: moveYBy, duration: 1});
	},

	handleClick : function(event) {
		var eventElement = Event.element(event);

		if ('A' === eventElement.tagName) {
			return;
		}

		if ((eventElement.id === BallGame.config.dancingId && BallGame.mbWithBall.id !== BallGame.config.dancingId) ||
			(eventElement.id === BallGame.config.nonDancingId && BallGame.mbWithBall.id !== BallGame.config.nonDancingId)) {
			BallGame.throwBall();
			return;
		}

		BallGame.moveBeaverNBall(event);
	},

	init : function(conf) {
		BallGame.config = conf;

		BallGame.greenBall = $(BallGame.config.ballId);
		BallGame.mbWithBall = $(BallGame.config.dancingId);

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