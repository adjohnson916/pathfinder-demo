
/*
Anders D. Johnson
joh07557@umn.edu
UMN ID: 3955359
*/

(function() {
  var loaded;

  loaded = function(main, _util, Graphs, Grid) {
    var g, grids, mods, s;
    mods = {
      '_util': _util,
      'Graphs': Graphs,
      'Grid': Grid
    };
    g = main.g;
    s = main.s;
    grids = {
      'a': {
        'map': [[1, -1, 1, 5, 4, 4, 2, 1, g], [1, -1, 6, -1, -1, 1, 3, -1, 1], [1, 7, 8, 3, -1, 1, -1, -1, 3], [-1, 9, 1, 2, -1, 1, 7, 1, 1], [1, 1, -1, 1, 4, 1, 1, -1, 1], [s, 1, 1, 2, 1, 1, 3, -1, 1]]
      },
      'b': {
        'map': [[s, -1, 0, 0, -1, g], [0, 0, -1, 0, 0, 0], [0, 0, -1, 0, 0, -1], [0, 0, 0, 0, -1, 0], [0, -1, 0, 0, 0, 0]]
      },
      'c': {
        'map': [[s, -1, 0, 0, -1, g], [0, -1, 0, -1, 0, 0], [0, 0, 0, -1, 0, 0], [0, 0, -1, 0, -1, 0], [0, 0, 0, 0, 0, 0]]
      },
      'd': {
        'map': [[s, -1, 0, -1], [0, 0, 0, 0], [0, 0, 0, g]]
      },
      'snake': {
        'map': [[s, -1, 0, 0, 0, -1, 0, 0, 0], [0, -1, 0, -1, 0, -1, 0, -1, 0], [0, -1, 0, -1, 0, -1, 0, -1, 0], [0, -1, 0, -1, 0, -1, 0, -1, 0], [0, -1, 0, -1, 0, -1, 0, -1, 0], [0, 0, 0, -1, 0, 0, 0, -1, g]]
      }
    };
    return $(function() {
      return main.domReady(mods, grids);
    });
  };

  require.config({
    baseUrl: "javascript",
    paths: {
      "order": "lib/requirejs/order"
    }
  });

  require(['main', '_util', 'Graphs', 'Grid', 'lib/underscore', 'order!lib/jquery/jquery', 'order!lib/jquery/jquery.ba-dotimeout', 'order!lib/jquery/jquery.color', 'order!lib/jquery/jquery.jfontsize2', 'order!lib/jquery-ui/js/jquery-ui-1.8.18.custom.min', 'order!lib/jquery-ui/js/jquery.ui.selectmenu', 'order!lib/DataTables/js/jquery.dataTables.min'], loaded);

}).call(this);