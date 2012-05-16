$j(function() {
	BallGame.FieldView = Backbone.View.extend({
		el : $j('#field'),
		events : {
			'click' : 'fieldClicked'
		},
		fieldClicked : function(event) {
			if ($j(event.target).attr('id') == 'dancingbeaver') {
				if (this.model.get('mbWithBall').attr('id') == 'albinobeaver') {
					this.passBall();
				}
			}
			else if ($j(event.target).attr('id') == 'albinobeaver') {
				if (this.model.get('mbWithBall').attr('id') == 'dancingbeaver') {
					this.passBall();
				}
			}
			else {
				this.moveBeaverNBall(event);
			}
		},
		passBall : function() {
			this.model.passBall();
			var mbWithBall = this.model.get('mbWithBall');

			$j('#green-ball').animate({
				top : mbWithBall.position().top,
				left : mbWithBall.position().left
			})
		},
		moveBeaverNBall : function(event) {
			var theThis = this;
			var model = this.model;
			var mbWithBall = model.get('mbWithBall');

			mbWithBall.animate({
				top : event.clientY,
				left : event.clientX
			}, 1000, function() { theThis.checkForTouchdown(model); });

			$j('#green-ball').animate({
				top : event.clientY,
				left : event.clientX
			}, 1000);
		},
		checkForTouchdown : function(model) {
			var mbWithBall = model.get('mbWithBall');

			$j('.endzone').each(function(idx, endzone) {
				if ($j(endzone).position().left < mbWithBall.position().left && ($j(endzone).position().left + 200) > mbWithBall.position().left) {
					model.touchdown();
				}
			});
		}
	});
});