$j(function() {
	BallGame.CrowdView = Backbone.View.extend({
		el : $j('#crowd'),
		initialize : function() {
			this.compileTemplate();
			this.model.bind('scored', this.render, this);
		},
		compileTemplate : function() {
			var templateSource = $j('#crowd-template').html();
			this.template = Handlebars.compile(templateSource);
		},
		render : function() {
			var exciting = Math.random() < .5;
			var html = this.template({ showText : exciting });
			var el = this.el;
			el.hide();
			$j(el).html(html).show();
			if (exciting) {
				$j('.person').each(function(idx, person) {
					$j(person).effect('shake', { direction : 'up', times : Math.random() * 5 }, Math.random() * 200);
				});
			}
			setTimeout(function() { el.hide(); }, 2000);
		}
	});
});