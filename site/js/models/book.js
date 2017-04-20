var app = app || {};

app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/placeholder.png',
		title: 'No Title',
		author: 'Unknown',
		releaseDate: 'Unknown',
		keywords: 'None'
	}
});