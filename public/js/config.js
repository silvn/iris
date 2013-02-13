requirejs.config({
    baseUrl: "/js",
    paths: {
        columnfilter: "DataTables/extras/ColumnFilterWidgets",
        datatables:   "jquery.dataTables",
        sortable:     "jquery-ui-sortable"
    },
    shim: {
        jquery:      { exports: ["$", "jQuery"] },
        d3:          { exports: "d3"          },
        underscore:  { exports: "_"           },
        colorbrewer: { exports: "colorbrewer" },
        backbone:    { exports: "Backbone", deps: [ "underscore", "jquery" ] },
        "backbone.localstorage": {
            exports: "Backbone",
            deps: [ "backbone" ]
        },
        'backbone.localstorage': {
            exports: 'Backbone',
            deps: [ 'backbone' ]
        },
        columnfilter: { exports: "jquery.dataTables" },
        'util/spin':  { exports: "Spinner" }
    },
})
