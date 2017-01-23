var user = {
	options: {
		save: function(name, value) {
			localStorage["userOptions-{0}".format(name)] = value;
			
		},
		load: function(name) {
			return localStorage["userOptions-{0}".format(name)];
		}
	}
}