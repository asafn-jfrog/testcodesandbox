class MainAppClass {
	constructor() {
		this.template = `<div><input type="text" ng-model="$ctrl.test"></div><br><div>HELLO from {{$ctrl.test}}</div>`;
		this.controller = MainAppClassController;
	}
}

class MainAppClassController {
	constructor() {
		this.test = "angular !!!!!";
	}
}

window.app = angular
	.module('app', [
		'ngAnimate',
		'ngCookies',
		'ngSanitize',
		'ngResource',
		'angularMoment',
		'ngMessages',
		'ui.layout',
		'ui.router',
		'ui.bootstrap',
		'ui.grid',
		'ui.codemirror',
	//	'cfp.hotkeys',
		'ui.select',
		'selectize',
		'ngClipboard',
		'ui.utils',
		'ui.grid.draggable-rows',
		'angularFileUpload',
		'ae-datetimepicker',
		'toaster',
		'monospaced.mousewheel',
		'jfrog.ui.essentials',
	]);

app.component('main', new MainAppClass());


import DragAndDrop from "./examples/jf-drag-and-drop.js";
import DragAndDrop2 from "./examples/jf-tabular-dnd";
import Drawer from './examples/jf-drawer/jf-drawer.js';



window.app.component('dnd', new DragAndDrop());
window.app.component('tabulardnd', new DragAndDrop2());
window.app.component('drawer', new Drawer());




