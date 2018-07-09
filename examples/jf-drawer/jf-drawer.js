

//console.log(DrawerTemplate);

export default class Drawer {
	constructor() {
		this.template = `<div class="content-layout-container">
  <div class="content-wrapper">

    <jf-panel jf-panel-heading="Drawers">
        <div class="main-view" style="min-height: 200px">
          <jf-drawer header="Drawer 1" description="Lorem ipsum dolor sit amet, mauris porttitor maecenas erat scelerisque dapibus massa.">
            Lorem ipsum dolor sit amet, mauris porttitor maecenas erat scelerisque dapibus massa. Sit massa ac, nibh metus congue, mauris faucibus, turpis etiam aenean curabitur faucibus. Reprehenderit nec orci arcu venenatis, suscipit volutpat penatibus, amet ac dolor vulputate, turpis fringilla wisi netus quis amet aliquet, pellentesque adipiscing dolor hendrerit congue pellentesque pede. Dui vel, donec curabitur tempor lacus, leo maecenas vitae id dictum consequat cras, orci leo, eu potenti sagittis id vitae. Sed diam penatibus et et et sollicitudin, dolor dictum sed, id nulla. Odio amet non, nibh tellus est eu malesuada et morbi, laoreet volutpat purus a non, vel maecenas mauris eros porta vehicula a, pede sed nulla at. Velit proin in, sed pellentesque faucibus egestas suscipit cras mauris. Fusce dictum orci, nunc netus cras etiam turpis quis, sed cupiditate, convallis platea nisl conubia veritatis lectus aliquam.
          </jf-drawer>
          <jf-drawer header="Drawer 2" description="Lorem ipsum dolor sit amet, mauris porttitor maecenas erat scelerisque dapibus massa.">
            Ut hac aliquet enim, volutpat ut quam. Nunc velit in pellentesque, risus wisi nisl eget ac potenti. Lacinia ullamcorper suscipit adipiscing, nonummy eu scelerisque nunc proin ut laoreet. Ultricies praesent wisi ullamcorper sem purus in, ut mattis, amet mauris tristique. Accumsan pede quam, pellentesque libero maecenas placerat pharetra, eget phasellus tempus, risus nulla nulla tellus fermentum gravida. Urna amet et in mauris vehicula faucibus. Lacus sed nunc erat sed, praesent eu justo sed quisque urna. Pede gravida erat ornare wisi, justo curabitur mattis morbi pretium. Lectus aliquam, ut senectus iaculis ac, blandit varius, nulla bibendum id a pede. Justo lacinia nulla aenean sit diam, facilisi dui ac dolor mauris vel hendrerit, non lectus consectetuer sed, nulla justo aliquet.
          </jf-drawer>
          <jf-drawer header="Drawer 3" description="Lorem ipsum dolor sit amet, mauris porttitor maecenas erat scelerisque dapibus massa.">
            Eu ac. Orci tristique sit magna diam a, duis placerat ultricies aliquam nullam, quisque sed. Nulla arcu, mollis massa sem tempor eget in laoreet, leo mattis sit. Nisl et vulputate lacus in, nulla maecenas nec ullamcorper fringilla justo, commodo aptent eget scelerisque, nibh egestas praesent eu nulla, augue donec. Senectus elementum suspendisse condimentum pede odio, quam vitae, sem elit, leo libero dictum sit quia ultrices vehicula, neque molestie in sapien volutpat turpis. Nunc ut tincidunt. Potenti imperdiet fermentum placerat dictum, hendrerit pellentesque sit magna mauris, imperdiet quam nulla, cursus molestie rhoncus. Natoque lectus quae id habitant, aliquam quam libero justo tortor rhoncus augue. Congue orci urna. Eu auctor ultrices ut conubia suscipit diam, duis morbi ac erat vestibulum veritatis, ac interdum sed aliquam amet sapien, arcu adipiscing nulla faucibus nec, orci nam fermentum mi egestas erat.
          </jf-drawer>
          <jf-drawer header="Drawer 4" description="Lorem ipsum dolor sit amet, mauris porttitor maecenas erat scelerisque dapibus massa.">
            <jf-grid
              grid-options="$ctrl.gridOptions"
              filter-field="name"
              object-name="user"
              auto-focus="true">
            </jf-grid>
          </jf-drawer>
          <jf-drawer header="Drawer 5" description="Lorem ipsum dolor sit amet, mauris porttitor maecenas erat scelerisque dapibus massa.">
            Ut hac aliquet enim, volutpat ut quam. Nunc velit in pellentesque, risus wisi nisl eget ac potenti. Lacinia ullamcorper suscipit adipiscing, nonummy eu scelerisque nunc proin ut laoreet. Ultricies praesent wisi ullamcorper sem purus in, ut mattis, amet mauris tristique. Accumsan pede quam, pellentesque libero maecenas placerat pharetra, eget phasellus tempus, risus nulla nulla tellus fermentum gravida. Urna amet et in mauris vehicula faucibus. Lacus sed nunc erat sed, praesent eu justo sed quisque urna. Pede gravida erat ornare wisi, justo curabitur mattis morbi pretium. Lectus aliquam, ut senectus iaculis ac, blandit varius, nulla bibendum id a pede. Justo lacinia nulla aenean sit diam, facilisi dui ac dolor mauris vel hendrerit, non lectus consectetuer sed, nulla justo aliquet.
          </jf-drawer>
          <jf-drawer header="Drawer 6" description="Lorem ipsum dolor sit amet, mauris porttitor maecenas erat scelerisque dapibus massa.">
            Eu ac. Orci tristique sit magna diam a, duis placerat ultricies aliquam nullam, quisque sed. Nulla arcu, mollis massa sem tempor eget in laoreet, leo mattis sit. Nisl et vulputate lacus in, nulla maecenas nec ullamcorper fringilla justo, commodo aptent eget scelerisque, nibh egestas praesent eu nulla, augue donec. Senectus elementum suspendisse condimentum pede odio, quam vitae, sem elit, leo libero dictum sit quia ultrices vehicula, neque molestie in sapien volutpat turpis. Nunc ut tincidunt. Potenti imperdiet fermentum placerat dictum, hendrerit pellentesque sit magna mauris, imperdiet quam nulla, cursus molestie rhoncus. Natoque lectus quae id habitant, aliquam quam libero justo tortor rhoncus augue. Congue orci urna. Eu auctor ultrices ut conubia suscipit diam, duis morbi ac erat vestibulum veritatis, ac interdum sed aliquam amet sapien, arcu adipiscing nulla faucibus nec, orci nam fermentum mi egestas erat.
          </jf-drawer>
          <jf-drawer header="Drawer 7" description="Lorem ipsum dolor sit amet, mauris porttitor maecenas erat scelerisque dapibus massa.">
            Lorem ipsum dolor sit amet, mauris porttitor maecenas erat scelerisque dapibus massa. Sit massa ac, nibh metus congue, mauris faucibus, turpis etiam aenean curabitur faucibus. Reprehenderit nec orci arcu venenatis, suscipit volutpat penatibus, amet ac dolor vulputate, turpis fringilla wisi netus quis amet aliquet, pellentesque adipiscing dolor hendrerit congue pellentesque pede. Dui vel, donec curabitur tempor lacus, leo maecenas vitae id dictum consequat cras, orci leo, eu potenti sagittis id vitae. Sed diam penatibus et et et sollicitudin, dolor dictum sed, id nulla. Odio amet non, nibh tellus est eu malesuada et morbi, laoreet volutpat purus a non, vel maecenas mauris eros porta vehicula a, pede sed nulla at. Velit proin in, sed pellentesque faucibus egestas suscipit cras mauris. Fusce dictum orci, nunc netus cras etiam turpis quis, sed cupiditate, convallis platea nisl conubia veritatis lectus aliquam.
          </jf-drawer>
          <jf-drawer header="Drawer 8" description="Lorem ipsum dolor sit amet, mauris porttitor maecenas erat scelerisque dapibus massa.">
            Ut hac aliquet enim, volutpat ut quam. Nunc velit in pellentesque, risus wisi nisl eget ac potenti. Lacinia ullamcorper suscipit adipiscing, nonummy eu scelerisque nunc proin ut laoreet. Ultricies praesent wisi ullamcorper sem purus in, ut mattis, amet mauris tristique. Accumsan pede quam, pellentesque libero maecenas placerat pharetra, eget phasellus tempus, risus nulla nulla tellus fermentum gravida. Urna amet et in mauris vehicula faucibus. Lacus sed nunc erat sed, praesent eu justo sed quisque urna. Pede gravida erat ornare wisi, justo curabitur mattis morbi pretium. Lectus aliquam, ut senectus iaculis ac, blandit varius, nulla bibendum id a pede. Justo lacinia nulla aenean sit diam, facilisi dui ac dolor mauris vel hendrerit, non lectus consectetuer sed, nulla justo aliquet.
          </jf-drawer>
          <jf-drawer header="Drawer 9" description="Lorem ipsum dolor sit amet, mauris porttitor maecenas erat scelerisque dapibus massa.">
            Eu ac. Orci tristique sit magna diam a, duis placerat ultricies aliquam nullam, quisque sed. Nulla arcu, mollis massa sem tempor eget in laoreet, leo mattis sit. Nisl et vulputate lacus in, nulla maecenas nec ullamcorper fringilla justo, commodo aptent eget scelerisque, nibh egestas praesent eu nulla, augue donec. Senectus elementum suspendisse condimentum pede odio, quam vitae, sem elit, leo libero dictum sit quia ultrices vehicula, neque molestie in sapien volutpat turpis. Nunc ut tincidunt. Potenti imperdiet fermentum placerat dictum, hendrerit pellentesque sit magna mauris, imperdiet quam nulla, cursus molestie rhoncus. Natoque lectus quae id habitant, aliquam quam libero justo tortor rhoncus augue. Congue orci urna. Eu auctor ultrices ut conubia suscipit diam, duis morbi ac erat vestibulum veritatis, ac interdum sed aliquam amet sapien, arcu adipiscing nulla faucibus nec, orci nam fermentum mi egestas erat.
          </jf-drawer>
        </div>
    </jf-panel>
  </div>
</div>`;
		this.controller = DrawerController;
	}
}

class DrawerController {
	constructor(JFrogGridFactory, $scope, $interval, $log) {
		var vm=this;

		vm.getColumns = function() {
			return [
				{
					name: 'Name',
					displayName: 'Name',
					field: "name",
					width: '30%',
					customActions: [{
						icon: 'icon icon-view',
						tooltip: 'Custom action 1',
						callback: function(row) {
							$log.log('Performing custom action 1 for '+row.name);
						},
						href: function(row) {
							return 'http://ynet.co.il';
						}
					},{
						icon: 'icon icon-search',
						tooltip: 'Custom action 2',
						callback: function(row) {
							$log.log('Performing custom action 2 for '+row.name);
						},
						visibleWhen: function(row) {
							return row.group === 'A';
						}
					},{
						icon: 'icon icon-zap',
						tooltip: 'Custom action 3',
						callback: function(row) {
							$log.log('Performing custom action 3 for '+row.name);
							row.name = 'Pinhas'
						}
					}]
				},
				{
					name: 'Group',
					displayName: 'Group',
					field: "group",
					allowGrouping: true,
					width: '15%',
					/*
					 isVisible: () => vm.showGroup
					 */
				},
				{
					name: 'Age',
					displayName: 'Age',
					field: "age",
					width: '15%',
					optional: true
				},
				{
					name: 'Address',
					displayName: 'Address',
					field: "address",
					width: '40%',
					optional: true
				}

			]

			/*
			 if (vm.showGroup) return columns;
			 else return _.filter(columns, col => col.name !== 'Group');
			 */
		};

		vm.getBatchActions = function() {
			return [
				{
					icon: 'clear',
					name: 'Delete',
					callback: function() {
						var selected = vm.gridOptions.api.selection.getSelectedRows();
						vm.gridOptions.api.selection.clearSelectedRows();
						selected.forEach(function(row) {
							var index = vm.gridOptions.data.indexOf(row);
							vm.gridOptions.data.splice(index,1);
							if (row.$parentRow) {
								var index = row.$parentRow.$subRows.indexOf(row);
								row.$parentRow.$subRows.splice(index, 1);
							}
						});
					}
				},
				{
					icon: 'new',
					name: 'Add',
					callback: function() {
					}
				},
				{
					icon: 'run',
					name: 'Run',
					callback: function() {
					}
				},
				{
					icon: 'xray-alert',
					name: 'Alert',
					callback: function() {
						console.log('!!!!')
					}
				},
			]
		};

		vm.getActions = function() {
			return [
				{
					icon: 'icon icon-clear',
					tooltip: 'Delete',
					callback: function(row) {
						var index = vm.gridOptions.data.indexOf(row);
						vm.gridOptions.data.splice(index,1);
						if (row.$parentRow) {
							var index = row.$parentRow.$subRows.indexOf(row);
							row.$parentRow.$subRows.splice(index, 1);
						}
					}
				}
			];
		};


		var data = [
			{name:"Moshe Ohana",group: 'A', age:38,address:"Hamachshev 3, Netanya"},
			{name:"David Cohen",group: 'B', age:32,address:"Ganey David 6, Netanya"},
			{name:"Meir Nush",group: 'B', age:30,address:"Ha Ogen 17, Netanya"},
			{name:"Shoshy Dadon",group: 'C', age:27,address:"Dizengof 43, Tel Aviv"},
			{name:"Reuvena Michaeli",group: 'C', age:28,address:"Hamachshev 18, Berlin"},
		];
		data[0].$expanded = true;
		data[2].$expanded = true;
		data[0].$subRows = [
			{name:"Sub Moshe 1",group: 'D', age:23,address:"24 Blah Blah St. Blah City"},
			{name:"Sub Moshe 2",group: 'B', age:39,address:"12 Blah Blah St. Blah City"},
			{name:"Sub Moshe 3",group: 'B', age:42,address:"89 Blah Blah St. Blah City"},
		];
		data[2].$subRows = [
			{name:"Sub Meir 1",group: 'D', age:34,address:""},
			{name:"Sub Meir 2",group: 'F', age:41,address:"72 Blah Blah St. Blah City"},
			{name:"Sub Meir 3",group: 'F', age:18,address:"22 Blah Blah St. Blah City"}
		];

		vm.gridOptions = JFrogGridFactory.getGridInstance($scope)
		                                 .enableSubRows() //Must be first !!
		                                 .setColumns(vm.getColumns())
		                                 .setGridSettingsId('test-grid')
		                                 .allowColumnsCustomization()
		                                 .setBatchActions(vm.getBatchActions())
		                                 .setMultiSelect()
		                                 .setRowTemplate('default')
		                                 .setButtons(vm.getActions())
		                                 .setRowsPerPage(10)
		                                 .setKey(function(row) {return row.name + row.group})
		                                 .setGridData(data)
		                                 .updateGridData(data);


		$interval(function() {
			data[Math.floor(data.length*Math.random())].age = Math.round(100*Math.random());
			data.forEach(function(row) {
				if (row.$subRows) {
					row.$subRows[Math.floor(row.$subRows.length*Math.random())].age = Math.round(100*Math.random());
				}
			})
			vm.gridOptions.updateGridData(data);
		},1)

		vm.onChangeColumns = function() {
			vm.gridOptions.refreshColumns();
		}

	}
}
