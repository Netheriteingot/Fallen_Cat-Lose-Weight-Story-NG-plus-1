var player;
var tmp = {};
var tab = {
    normal: "Main",
    thought: "Main",
    options: "Setting",
}
var newstime
const tabs = {
    normal: {
        Options() { return true },
        'Pack01'() { return true },
        'Pack02'() { return tmp.gold>=5 },
        'Pack03'() { return tmp.gold>=14||tmp.platinum>=8 },
        'Pack04'() { return tmp.gold>=24&&tmp.platinum>=19 },
        'Pack05'() { return tmp.gold>=24&&tmp.platinum>=19 },
        'Pack06'() { return tmp.gold>=35 },
        'Pack07'() { return tmp.gold>=45&&calcAP()>=2 },
        Main() { return true },
        Game() { return true },
        Result() { return true },
    },
    options:
    {
        Setting() {return true},
        Changelog() {return true},
    }
}
function showTab(name, type) { if (tabs[type][name]()) tab[type] = name }
//游戏各种大小标签页以及是否解锁判定
