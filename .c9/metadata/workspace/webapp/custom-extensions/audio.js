{"filter":false,"title":"audio.js","tooltip":"/webapp/custom-extensions/audio.js","undoManager":{"mark":14,"position":14,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":34,"column":0},"action":"insert","lines":["//","//  Audio","//  A showdown extension to convert inline links to .mp3 files into HTML5 audio tags for streaming","//  There does not appear to be a convention for audio markdown, so we prefix to the image pattern.","/*","It's a two stage process. The first parse is handled by core showdown.js image handler (_DoImages). ","It converts markdown to an img tag, starting at the exclamation mark, leaving the leading Unicode speaker mark in place.","This audio extension then converts that img tag to an HTML5 audio tag.","","!![Alt text](url)                    --> !<img src=\"/path/to/audio.mp3\" alt=\"Alt text\" title=\"\" />                     --> <audio src=\"/path/to/img.jpg\" alt=\"Alt text\" title=\"\" /> ","!![Alt text](url \"optional title\")   --> !<img src=\"/path/to/audio.mp3\" alt=\"Alt text\" title=\"Optional title\" />       --> <audio src=\"/path/to/audio.mp3\" alt=\"Alt text\" title=\"Optional title\" />","!![Alt text][id]                     --> !<img src=\"url/to/audio\" alt=\"Alt text\" title=\"Optional title attribute\" />   --> <audio src=\"url/to/audio\" alt=\"Alt text\" title=\"Optional title attribute\" />","*/","","(function(){","","    var audio = function(converter) {","        return [","            { type: 'output', filter: function(source){","                return source.replace(/!<img/gi, ","                        function(wholematch) {","                    var retStr = '<audio preload=\"auto\" controls';","                    return retStr;","                });","            }} ","        ];","    };","","    // Client-side export","    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.prettify = audio; }","    // Server-side export","    if (typeof module !== 'undefined') module.exports = audio;","","}());",""]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":["!"]},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["🔊"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"remove","lines":["!"]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["🔊"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"remove","lines":["!"]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["🔊"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":42},"end":{"row":9,"column":43},"action":"remove","lines":["!"]},{"start":{"row":9,"column":42},"end":{"row":9,"column":44},"action":"insert","lines":["🔊"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":42},"end":{"row":10,"column":43},"action":"remove","lines":["!"]},{"start":{"row":10,"column":42},"end":{"row":10,"column":44},"action":"insert","lines":["🔊"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":42},"end":{"row":11,"column":43},"action":"remove","lines":["!"]},{"start":{"row":11,"column":42},"end":{"row":11,"column":44},"action":"insert","lines":["🔊"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":39},"end":{"row":19,"column":40},"action":"remove","lines":["!"]},{"start":{"row":19,"column":39},"end":{"row":19,"column":41},"action":"insert","lines":["🔊"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":13},"end":{"row":16,"column":14},"action":"insert","lines":["_"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":14},"end":{"row":16,"column":15},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"remove","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":16},"end":{"row":16,"column":17},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":17},"end":{"row":16,"column":18},"action":"insert","lines":["t"]}]}]]},"ace":{"folds":[],"scrolltop":180,"scrollleft":0,"selection":{"start":{"row":27,"column":0},"end":{"row":27,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":11,"state":"comment_regex_allowed","mode":"ace/mode/javascript"}},"timestamp":1418211950847,"hash":"86d9274d5902928a301977f165f3948b6ac61c70"}