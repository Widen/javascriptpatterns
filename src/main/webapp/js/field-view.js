$j(function() {
	BallGame.FieldView = Backbone.View.extend({
		el : $j('#field'),
		events : {
			'click' : 'fieldClicked'
		},
		fieldClicked : function(event) {
			if ($j(event.target).attr('id') == 'dancingmoosenbeaver') {
				console.log('mb clicked');
			}
			else {
				this.moveBeaverNBall(event);
			}
		},
		moveBeaverNBall : function(event) {
			var mbWithBall = this.model.get('mbWithBall');

			mbWithBall.animate({
				top : event.clientY,
				left : event.clientX
			}, 1000);

			$j('#green-ball').animate({
				top : event.clientY,
				left : event.clientX
			}, 1000);
		}
	});
});