import declare from 'dojo/_base/declare';
import BaseWidgetSetting from 'jimu/BaseWidgetSetting';
import SimpleTable from 'jimu/dijit/SimpleTable';

export default declare([BaseWidgetSetting], {
  baseClass: 'hello-world-setting',

  postCreate () {
    // the config object is passed in
    this.setConfig(this.config);
  },

  setConfig (config) {
    this.textNode.value = config.serviceUrl;
  },

  startup: function() {
    var fields = [{
      name: 'id',
      title: this.nls.id,
      type: 'text',
      unique: true,
      hidden: true,
      editable: false
    },
    {
      name: 'label',
      title: this.nls.label,
      type: 'text',
      editable: true
    },
    {
      name: 'url',
      title: this.nls.url,
      type: 'text',
      editable: true
    },{
      name: 'actions',
      title: this.nls.actions,
      type: 'actions',
      'class': "actions",
      actions: ['edit', 'up', 'down', 'delete']
    }];
    var args = {
      autoHeight: false,
      fields: fields,
      selectable: false,
      singleClickEdit: true
    };
    this.outputCoordinateTable = new Table(args);
    html.setStyle(this.outputCoordinateTable.domNode, 'height', '100%');
    this.outputCoordinateTable.placeAt(this.tableCoordinate);
    this.outputCoordinateTable.startup();

    this.own(on(this.outputCoordinateTable, 'actions-edit', lang.hitch(this, 'onEditClick')));
    this.setConfig(this.config);


  },

  getConfig () {
    // WAB will get config object through this method
    return {
      serviceUrl: this.textNode.value
    };
  },

  onEditClick: function(tr) {
    //var cs = this.outputCoordinateTable.getRowData(tr);
    this.popupState = "EDIT";
    //this.editTr = tr;
    //this._openEdit(this.nls.edit, cs);
  },

  onAddClick: function() {
    //this.popupState = "ADD";
    //this._openEdit(this.nls.add, {});
    console.log('adding value');
  },
});
