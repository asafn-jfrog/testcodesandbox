export default class DragAndDrop {
	constructor() {
		this.template = `
			<jf-panel jf-panel-heading="D&D for simple strings">
				<div class="form-group">
					<div class="form-group-cell double">
						<jf-drag-drop
								on-change="$ctrl.onChangeDND()"
								exclude-list="$ctrl.excludes"
								include-list="$ctrl.includes"
								use-pagination="true"
								objects-name="Items">
						</jf-drag-drop>
					</div>
				</div>
			</jf-panel>
			<jf-panel jf-panel-heading="D&D for objects">
				<div class="form-group">
					<div class="form-group-cell double">
						<jf-drag-drop
								on-change="$ctrl.onChangeDNDObject()"
								exclude-list="$ctrl.excludeObjects"
								exclude-display-field="name"
								include-list="$ctrl.includeObjects"
								include-display-field="name"
								custom-template="$ctrl.itemTemplate"
								custom-template-scope="$ctrl.$scope"
								use-pagination="true"
								objects-name="Object">
						</jf-drag-drop>
					</div>
				</div>
			</jf-panel>
		`
		this.controller = DragAndDropController;
	}
}

class DragAndDropController {
	constructor($log) {

		this.includes=[];
		this.excludes=[];

		for (var i = 0; i<10;i++) {
			this.excludes.push('Item '+i);
		}

		this.onChangeDND = function() {
			console.log('Change: ', this.excludes, this.includes)
		};

		this.includeObjects= _.map(this.includes,function(fullString) {
			return {name: fullString, code: _.camelCase(fullString.toLowerCase())};
		});
		this.excludeObjects= _.map(this.excludes,function(fullString) {
			return {name: fullString, code: _.camelCase(fullString.toLowerCase())};
		});

		this.onChangeDNDObject = function() {
			$log.log('Change: ');
		};

		this.itemTemplate = '<div style="min-width:200px"><b>{{getItemInfo().text+(getItemInfo().included?"' +
			' (Included)":" (Excluded)")}}</b><i class="icon icon-move pull-right"></i><i ng-dblclick="$event.stopPropagation();" ng-click="$event.stopPropagation(); userScope.ctrl.testCompilation(getItemInfo().item)" class="icon icon-more pull-right"></i></div>';

		this.testCompilation = function(value) {
			console.log('!!!!!!!!!!!!!!!!!',value);
		}
	}
}