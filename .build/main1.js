define("main1", [ "nojs.module/tree", "nojs.ui/codelight" ], function(require, exports, module) {
    var tree = require("nojs.module/tree"), codeLight = require("nojs.ui/codelight"), //project = require('./project/config'),
    G = {};
    var main = $("#main_content"), head = $("#ui_head"), win = $(window), D = $.cookie("currentPage") || "noJS_info", page = $("#ui_page"), frame = $("#iframe_content"), side = $("#side_menu"), wrap = page.children("div.ui_wrap");
    function setUrl(id) {
        var url = location.href.split("#"), hash = url[1];
        if (id == undefined) {
            return hash;
        }
        location.href = url[0] + "#" + id;
    }
    if (typeof onhashchange != "undefined") {
        window.onhashchange = function() {
            var hash = location.hash, i, m;
            hash = hash.substring(1, hash.length);
            if (hash) {
                for (i = 0; i < G.project.length; i++) {
                    m = G.project[i];
                    if (m.box.find("#" + hash).length) {
                        m.select(hash);
                        break;
                    }
                }
            }
        };
    }
    $(window).bind("popstate", function(e) {});
    var treeOptions = {
        defaultNode: setUrl() || D,
        //设置默认节点
        onSelect: function(data) {
            var link = data.link, id = data.id;
            $.cookie("currentPage", id);
            setUrl(id);
            if (!link) {
                return;
            }
            frame.html('<i class="load"></i>');
            new ui.ico(frame.find("i.load"), {
                type: "loading",
                width: 32,
                height: 32
            });
            var _id = this.box[0].id, name = _id.substring(_id.indexOf("_") + 1, _id.length), url = "project/" + name + "/" + link + ".html";
            id != "project" && this.box.siblings(".nj_tree").find("a.current").removeClass("current");
            frame.load(url, function() {
                //代码高亮
                new codeLight({
                    parent: frame
                });
                //扩展应用
                frame.find("#about_link,.about_link").on("click", function(e) {
                    var t = e.target, i, m;
                    if (t.tagName.toLowerCase() == "a") {
                        for (i = 0; i < G.project.length; i++) {
                            m = G.project[i];
                            if (m.box.find("#" + t.id).length) {
                                m.select(t.id);
                                break;
                            }
                        }
                        return false;
                    }
                });
                ui.init(frame);
            });
        }
    };
    G.init = function() {
        var add = $('<a href="" class="add_project">添加其他项目文档</a>');
        add.click(function() {
            treeOptions.onSelect("project", "p/project.html");
            return false;
        });
    };
    //G.init();
    var headHeight = head.outerHeight();
    function setLayout() {
        var h = win.height() - headHeight;
        wrap.height(h);
    }
    setLayout();
    win.on("scroll resize", setLayout);
    G.project = [];
    side.empty();
    tree.key = {
        name: "text",
        children: "data"
    };
    for (var i in project) {
        createProject(i, project[i]);
    }
    function createProject(name, p) {
        var data = p.data, _tree, id;
        if (!data) {
            return;
        }
        id = "menu_" + name;
        _tree = $('<div id="' + id + '" class="nj_tree"></div>');
        side.append(_tree);
        var t = new tree(id, {
            openAll: name == "nojs" ? false : true,
            data: data,
            onSelect: treeOptions.onSelect,
            defaultNode: treeOptions.defaultNode
        });
        G.project.push(t);
    }
    return G;
});