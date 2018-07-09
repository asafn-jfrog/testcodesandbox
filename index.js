
//import "angular";
require("./essentials/essentials.dependencies.js");


require("./app.js");







if (module && module.hot) {
	module.hot.dispose(function () {
		// module is about to be replaced
	});

	module.hot.accept(function () {
		// module or one of its dependencies was just updated
		location.reload();
	});
}