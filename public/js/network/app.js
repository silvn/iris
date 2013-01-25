require(['jquery', 'backbone', 'underscore',
    'renderers/network', 'util/progress', 'util/hud'],
    function ($, Backbone, _, NetworkVis, Progress, HUD) {
        
    var neighborTemplate = _.template("/data/node/<%= id %>/neighbors");
    var networkTemplate  = _.template("/data/network/<%= id %>");

    var App, Search, NetworkData, router, AppProgress;
    var resetNetwork = true;
        
    AppProgress = new Progress({
        element: "#progress-indicator",
        fade: false,
        type: Progress.BAR
    });
    var NetworkModel = Backbone.Model.extend({
        parse: function (data) {
            this.set('data', data);
        }
    });
    var Datavis = new NetworkVis({ element: "#datavis", dock: true });
    Datavis.on("dblclick-node", function (evt, node, element) {
        if (NetworkData.id == 'random') {
            AppProgress.show();
            NetworkVis.getNeighbors.call(Datavis, node, element);
        } else {
            resetNetwork = false;
            router.navigate("#node/" + node.name + "/" +
                 NetworkData.get('dataset'), true);
        }
    });
    Datavis.on("click-node", function (evt, node, element) {
        Datavis.clickNode(node, element);
    })
    
    var AppView = Backbone.View.extend({
        el: $("#container"),
        initialize: function () {
            _.bindAll(this, 'render');
            NetworkData.on('sync', this.render);
        },
        render: function () {
            var self = this;
            Datavis.merge(NetworkData.get('data'));
            AppProgress.dismiss();
            return self;
        },
    });
    
    var NetworkDatasets = Backbone.Model.extend({
        url: function () {
            return '/data/node/' + this.get('id') + '/datasets';
        },
        parse: function (data) {
            this.set('datasets', data);
        }
    });
    
    var DatasetView = Backbone.View.extend({
        el: $("#container"),
        initialize: function () {
            _.bindAll(this, 'render');
            this.model.on('change', this.render);
        },
        template: _.template("<li><a href=\"<%=link%>\" title=\"<%=desc%>\">" +
                             "<%=name%></a></li>"),
        render: function () {
            var self = this;
            var hud = new HUD({
                position: { top: 50, left: 20 },
                width: 400
            });
            var list = $("<ul>");
            var datasets = this.model.get('datasets');
            if (datasets == null || datasets.length == 0) {
                hud.text("No datasets");
            } else {
                hud.append($("<h4>").text("Data Sets"))
                hud.append(list);
                datasets.forEach(function (ds) {
                    list.append(self.template({
                        name: ds.name, desc: ds.description,
                        link: "#node/" + self.model.get('id') + 
                              "/" + ds.id
                    }));
                })
                list.append(self.template({
                    name: 'All', desc: "Use all networks",
                    link: "#node/" + self.model.get('id') +
                        "/" + _.pluck(datasets, 'id').join(',')
                }))
            }
            hud.show();
        }
    })
    
    var SearchBox = Backbone.View.extend({
        el: $("#nav-search"),
        events: {
            "submit": "search"
        },
        search: function (data) {
            var query = $("#nav-search [type=text]").val();
            router.navigate("#node/" + query);
        }
    });

    function showApp(params) {
        AppProgress.show();
        if (resetNetwork) { Datavis.reset(); }
        resetNetwork = true;
        NetworkData = new NetworkModel({ id: params.id });
        NetworkData.url = params.url({ id: params.id });
        App = new AppView({ model: NetworkData });
        NetworkData.fetch({ data: params.fetchData });
    }
    
    var Router = Backbone.Router.extend({
        routes: {
            "node/:id":          "networkDatasets",
            "node/:id/:dataset": "neighborhood",
            ":network":          "showNetwork",
            "*path":             "default"
        },
        showNetwork: function (networkId) {
            showApp({
                id: networkId || 'random',
                url: networkTemplate
            })
        },
        networkDatasets: function (nodeId) {
            AppProgress.show();
            var datasets = new NetworkDatasets({ id: nodeId });
            var datasetView = new DatasetView({ model: datasets });
            datasets.fetch({
                success: function () { AppProgress.dismiss(); }
            });
        },
        neighborhood: function (id, dataset) {
            showApp({
                id: id,
                url: neighborTemplate,
                fetchData: { datasets: dataset }
            });
            NetworkData.set('dataset', dataset);
        },
        default: function () {
            this.showNetwork("random");
        }
    });
    router = new Router;
    search = new SearchBox;
    Backbone.history.start();
});