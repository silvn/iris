Ext.data.JsonP.Widget({"tagname":"class","name":"Widget","autodetected":{},"files":[{"filename":"widget.js","href":"widget.html#Widget"}],"extends":"Root","singleton":true,"members":[{"name":"constructor","tagname":"method","owner":"Root","id":"method-constructor","meta":{}},{"name":"extend","tagname":"method","owner":"Root","id":"method-extend","meta":{}},{"name":"initialize","tagname":"method","owner":"Widget","id":"method-initialize","meta":{}},{"name":"register","tagname":"method","owner":"Widget","id":"method-register","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Widget","short_doc":"Iris.Widget. ...","component":false,"superclasses":["Root"],"subclasses":["BubblePlot"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Root' rel='Root' class='docClass'>Root</a><div class='subclass '><strong>Widget</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/BubblePlot' rel='BubblePlot' class='docClass'>BubblePlot</a></div><h4>Files</h4><div class='dependency'><a href='source/widget.html#Widget' target='_blank'>widget.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/Iris-property-Widget\" rel=\"Iris-property-Widget\" class=\"docClass\">Iris.Widget</a>. A controller class for managing data and renderers for\nvisualization</p>\n\n<pre class='inline-example '><code>var MyWidget = Iris.Widget.extend({});\nvar widget = new MyWidget();\n</code></pre>\n\n<p>Or:</p>\n\n<pre class='inline-example '><code>iris.require([\"widget\"], function (Widget) {\n    var widget = <a href=\"#!/api/Widget-method-extend\" rel=\"Widget-method-extend\" class=\"docClass\">Widget.extend</a>({});\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Root' rel='Root' class='defined-in docClass'>Root</a><br/><a href='source/root.html#Root-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Root-method-constructor' class='name expandable'>Widget</a>( <span class='pre'>options</span> ) : <a href=\"#!/api/Root\" rel=\"Root\" class=\"docClass\">Root</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Constructor options.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Root\" rel=\"Root\" class=\"docClass\">Root</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Root' rel='Root' class='defined-in docClass'>Root</a><br/><a href='source/root.html#Root-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Root-method-extend' class='name expandable'>extend</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Extends the class. ...</div><div class='long'><p>Extends the class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>A hash of functions and object that extend the class</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>A new subclass of this class.</p>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widget'>Widget</span><br/><a href='source/widget.html#Widget-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widget-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initializes the object. ...</div><div class='long'><p>Initializes the object. Invoked after constructor has already\nprocessed parameters.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Root-method-initialize\" rel=\"Root-method-initialize\" class=\"docClass\">Root.initialize</a></p></div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widget'>Widget</span><br/><a href='source/widget.html#Widget-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widget-method-register' class='name expandable'>register</a>( <span class='pre'>name, widget</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Registers an object within this namespace. ...</div><div class='long'><p>Registers an object within this namespace.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the widget</p>\n</div></li><li><span class='pre'>widget</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The widget to register</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Root-method-register\" rel=\"Root-method-register\" class=\"docClass\">Root.register</a></p></div></div></div></div></div></div></div>","meta":{}});