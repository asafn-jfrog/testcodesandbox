// import vendor libs
var jquery = require("jquery");
window.$ = window.jQuery = jquery;
require("jf-jquery-ui");

require("angular");
require("angular-animate");
require("angular-mocks");
require("angular-cookies");
require("angular-sanitize");
require("angular-resource");

var moment = require("moment");

require("angular-moment");
require("angular-messages");
require("angular-ui-layout/src/ui-layout.js");
require("angular-ui-router");
require("angular-ui-bootstrap");

// custom npm package...
// "500tech/bower-ui-grid#v3.0.0-rc.21-patch4", from vendor.js bundle - ui-grid - v3.0.0-rc.21-19576e4 - 2015-08-16
require("jf-angular-ui-grid/ui-grid");

require("angularjs-toaster");
require("jquery-contextmenu");

var _ = require("lodash/index.js")
window._ = _;


var CodeMirror = require("codemirror");
window.CodeMirror = CodeMirror;
require("codemirror/mode/markdown/markdown.js");
require("codemirror/addon/mode/overlay.js");
require("codemirror/mode/gfm/gfm.js");
require("codemirror/mode/xml/xml.js");


// add this library? it is embedded in jf_markup_editor
//require("codemirror-asciidoc/lib/asciidoc.js");


// custom npm package...
// it is angular-ui-codemirror@0.2.3 which is currently not on npm...
require("jf-angular-ui-codemirror");
require("jf-angular-hotkeys");
require("jstree");
require("ui-select");
require("selectize");

// used latest version 1.2.3 instead of 1.2.1 which is not on npm...
// If it breaks TODO upload custom npm package
require("angular-selectize2/dist/selectize.js");

var ZeroClipboard = require("zeroclipboard");
window.ZeroClipboard = ZeroClipboard;

// TODO .config(['ngClipProvider', function(ngClipProvider) {
//    ngClipProvider.setPath("bower_components/zeroclipboard/dist/ZeroClipboard.swf");
//  }]);
require("ng-clip");

// custom npm package... angular-ui-utils@0.1.1
require("jf-angular-ui-utils");
// custom npm package...
require("jf-jquery-highlight");

require("deep-diff");

// custom npm package... since no V3.3.0 on npm
require("jf-tooltipster/js/jquery.tooltipster.js");
// custom npm package...
require("jf-draggable-rows");

require("clipboard");

// ~~ ui essentials! !! //
//require("./ui-essentials-dist/jfrog-ui-essentials.js");

require("angular-file-upload/angular-file-upload.js");


// check if needed...
///require("select2"); V4.0.3 -Bintray
///require("angular-ui-select2") V0.0.5 -Bintray
///require("ui-cropper") V 1.0.4 -Bintray

require("angular-eonasdan-datetimepicker");

//check if needed - angular-breadcrumb - v0.4.1-dev-2016-04-12