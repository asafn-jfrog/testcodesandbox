export default class DragAndDrop2 {
	constructor() {
		this.template = `
			<div class="content-layout-container">
  <div class="content-wrapper">
    <button ng-click="$ctrl.disabled = !$ctrl.disabled">{{ $ctrl.disabled ? 'Enable' : 'Disable' }}</button>
    <jf-panel jf-panel-heading="Tabular D&D">
      <div class="form-group">
        <div class="form-group-cell double">
          <jf-tabular-dnd available-items="$ctrl.availableItems"
                          selected-items="$ctrl.selectedItems"
                          entity-name="resource"
                          app-scope="$ctrl"
                          number-of-rows="4"
                          ng-disabled="$ctrl.disabled"
                          disable-whole-row-selection="true"
                          on-change="$ctrl.onChangeDnd()"
                          columns="$ctrl.columns">
          </jf-tabular-dnd>
        </div>
      </div>
    </jf-panel>
  </div>
</div>`;
		this.controller = dndController;
	}
}

class dndController {
	constructor($log, $scope) {
		this.scope = $scope;
		this.availableItems = [];
		this.selectedItems = [];

		for (let i = 0; i < 40; i++) {
			this.availableItems.push({
				name: 'Item ' + (i+1),
				numeric: Math.round(100*Math.random()),
				active: Math.random() < .4
			})
		}
		/*
			for (let i = 400; i < 500; i++) {
			  this.selectedItems.push({
				name: 'Item ' + (i+1),
				numeric: Math.round(100*Math.random()),
				active: Math.random() < .4
			  })
			}
		*/



		this.onChangeDnd = () => {
			console.log(this.selectedItems)
		};
		this.testAppScope = () => {
			console.log('appScope works !')
		};
	}
	$onInit() {
		this.columns = [
			{
				header: "Name",
				filterable: true,
				field: "name",
				cellTemplate: '<div>{{row.entity.name}} <input type="checkbox" ng-change="appScope.testAppScope()" ng-model="row.entity.active"></div>',
				width: "50%",
			},
			{
				header: "Number",
				field: "numeric",
				width: "50%",
			}
		];
	}

}