define(["jquery", "underscore"], function(JQ, _) {
    var defaults = {
        position: { top: 20, left: 20 },
        element: "body",
        width: 300,
        height: 50,
        close: true,
        draggable: false
    }
    function HUD(options) {
        var self = this;
        options = options ? _.clone(options) : {}; 
        _.defaults(options, defaults);
        var $hud = JQ("<div>").addClass("hud")
            .css("width", options.width)
            .css("min-height", options.height)
            .css("display", "none")
            .css("position", "absolute");
        if (options.z != undefined) { $hud.css("z-index", options.z) };
        var $content = JQ("<div>").addClass("hud-content");
        if (options.close) {
            function closeButton() {
                var button = JQ("<button>").addClass("close").html("&times;");
                button.on("click", function () { self.dismiss() });
                return button;
            }
            $hud.append(closeButton());
        }
        if (options.title) {
            $hud.append(JQ("<h4>", { id: "title" }).text(options.title));
        } else {
            $content.css("margin", "15px 0 0").css("padding", 0);
        }
        if (options.draggable) {
            $hud.draggable();
        }
        $hud.append($content);
        for (var prop in options.position) {
            $hud.css(prop, options.position[prop]);
        }
        JQ(options.element).append($hud);
        if (options.width) { $hud.width(options.width) }
        JQ.extend(this, $content);
        
        self.show = function () {
            $hud.fadeIn();
        }
        self.dismiss = function () {
            $hud.fadeOut()  ;
            self.trigger("dismiss", []);
        };
        return self;
    }
    return HUD;
});