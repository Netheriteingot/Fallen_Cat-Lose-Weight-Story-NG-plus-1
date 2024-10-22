//初始player对象值
var storageName = "LoseWeightStory";
intervals = {}
var gameData = {
	started: false,
	newsMsg: "",
	newsMarj: -1000000,
	newsLength: 0,
	newsRS: false,
	newsCooldown: 0,
};
function getStartPlayer() {
	let p = {
    currTime: new Date().getTime(),
	currGameTime: new Date().getTime(),
	time: new Decimal(0),
	reload: true,
	grid: [],
	levelCompleted: [],
	best: [],
	current: 11,
	activeLevel: 0,
	steps: 0,
	clicks: 0,
	};
	return p;
}

function fixPlayer() {
	let start = getStartPlayer();
	addNewV(player, start);
	player.activeLevel = 0;
    gridSetUp()
}
//检查player对象中是否有未定义对象，如果有替换为player初始值中的对应值，方便进一步游戏开发
//真是的，谁愿意游戏开发过程中加变量后一个个定义数值啊啊啊啊啊
//所以加入这个
//==系统提示：作者由于废话被禁言15min==
function addNewV(obj, start) {
	for (let x in start) {
		if (obj[x] === undefined) obj[x] = start[x]
		else if (typeof start[x] == "object" && !(start[x] instanceof Decimal)) addNewV(obj[x], start[x])
		else if (start[x] instanceof Decimal) obj[x] = new Decimal(obj[x])
	}
}
//加载游戏(网页body完成加载后运行)
function loadGame() {
	let g = localStorage.getItem(storageName);
    if (g !== null) player = JSON.parse(atob(g));
	else player = getStartPlayer();//玩家没玩过
	
	fixPlayer();//很重要!!!没了容易出事
	updateTemp();//加载各种二级变量
	updateTemp();
	updateTemp();
	updateTemp();
	updateTemp();
	loadVue();//加载vue
	intervals.game = setInterval(function() { gameLoop(0)}, 30) //30毫秒一个tick
	intervals.save = setInterval(function() { save(); }, 2500) //2.5秒一保存
}
function save() {
	localStorage.setItem(storageName, btoa(JSON.stringify(player)));
}
//导入存档
function importSave() {
	let data = prompt("粘贴你的存档: ")
	if (data===undefined||data===null||data=="") return;
	try {
		player = JSON.parse(atob(data));
		save()
		window.location.reload();
	} catch(e) {
		console.log("导入失败!请检查你的存档的复制过程中是否有遗漏!");
		console.error(e);
		return;
	}
}
//导出存档(导出方式为*下载文件*)
function exportSave() {
	let data = btoa(JSON.stringify(player))
	const a = document.createElement('a');
	a.setAttribute('href', 'data:text/plain;charset=utf-8,' + data);
	a.setAttribute('download', "fclwd_NG_"+new Date()+".txt");
	a.setAttribute('id', 'downloadSave');

	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}
//重置游戏
function hardReset() {
	if (!confirm("Do you really want to reset the game? This will give no bonuses!")) return;
	player = getStartPlayer();
	save();
	window.location.reload();
}
document.onkeydown = function(event){
	if(event.keyCode == 87) controlUp()
	if(event.keyCode == 83) controlDown()
	if(event.keyCode == 65) controlLeft()
	if(event.keyCode == 68) controlRight()
}
function MoveBlock(dx, extraStep)
{
	const arrow = new Map();
	arrow.set('u', -10);
	arrow.set('d', 10);
	arrow.set('l', -1);
	arrow.set('r', 1);
//	console.log("Moving block "+player.current);
	if(player.current+dx<=10||player.current+dx>=10*(1+LEVEL_DATA[player.activeLevel].size)) return;
	if((player.current+dx)%10==0||(player.current+dx)%10>LEVEL_DATA[player.activeLevel].size||(Math.floor((player.current+dx)/10)!=Math.floor(player.current/10)&&(dx==1||dx==-1))) return;
	if(player.grid[player.current+dx]=='barrier') return;
	if(typeof(player.grid[player.current])!='number'||NaNCheck(player.grid[player.current]==0)) return;
	if(arrow.get(player.grid[player.current+dx])!=undefined){
		var dir=arrow.get(player.grid[player.current+dx]);
		player.grid[player.current+dx]=player.grid[player.current];
		player.grid[player.current] = 'nothing';
		player.current+=dx;
//		console.log("Moving slide "+dir);
		MoveBlock(dir, 0);
	}
	else if(player.grid[player.current+dx]=='nothing'){
		player.grid[player.current+dx]=player.grid[player.current]+1;
		if(player.grid[player.current+dx]==0)player.grid[player.current+dx]='nothing';
		player.grid[player.current] = 'nothing';
		player.current+=dx;
//		console.log("type 1");
	}
	else if(typeof(player.grid[player.current+dx])=='number'){
		if(player.grid[player.current+dx]>0&&player.grid[player.current]>0)return;
		player.grid[player.current+dx]+=player.grid[player.current];
		if(player.grid[player.current+dx]==0)player.grid[player.current+dx]='nothing';
		player.grid[player.current] = 'nothing';
		player.current+=dx;
//		console.log("type 2");
	}
	else if(player.grid[player.current+dx][0]=='x')
	{
		if(player.grid[player.current+dx][1]=='0') player.grid[player.current+dx]='nothing';
		else player.grid[player.current+dx] = Number(player.grid[player.current+dx][1])*player.grid[player.current];
		player.grid[player.current] = 'nothing';
		player.current+=dx;
//		console.log("type 3");
	}
	else if(player.grid[player.current+dx][0]=='^')
	{
		if(Number(player.grid[player.current+dx][1])==Math.abs(player.grid[player.current])) player.grid[player.current+dx]='nothing';
		else player.grid[player.current+dx] = (Number(player.grid[player.current+dx][1])^Math.abs(player.grid[player.current]))*Math.sign(player.grid[player.current]);
		player.grid[player.current] = 'nothing';
		player.current+=dx;
//		console.log("type 4");
	}
	if(tmp.state=='running'){
		player.steps += extraStep;
	}
}
function controlUp(){MoveBlock(-10,1)};
function controlDown(){MoveBlock(10,1)};
function controlLeft(){MoveBlock(-1,1)};
function controlRight(){MoveBlock(1,1)};
function HaveExercise()
{
	for(var i=1; i<=LEVEL_DATA[player.activeLevel].size; i++)
	{
		for (var j=1; j<=LEVEL_DATA[player.activeLevel].size; j++)
		{
	        if(typeof(player.grid[i*10+j])=='number'&&NaNCheck(player.grid[i*10+j])<0) return true
	
		}
	}
	for(var i=1; i<=LEVEL_DATA[player.activeLevel].size; i++)
	{
		for (var j=1; j<=LEVEL_DATA[player.activeLevel].size; j++)
		{
	        if(player.grid[i*10+j][0]=='x') return true
	        if(player.grid[i*10+j][0]=='^') return true
		}
	}
	return false
}
function statePending()
{
	if(player.activeLevel<10) return 'out'
	if(calcWeight()<=45) return 'success'
	if((!HaveExercise()&&!calcWeight()<=45)) return 'failed'
	else return 'running'
}
function LeaveStage()
{
	showTab("Pack0"+Math.floor(player.activeLevel/10),"normal")
	player.activeLevel = 0
	gridSetUp()
}
function CompleteStage()
{
	showTab("Pack0"+Math.floor(player.activeLevel/10),"normal")
	if(!player.levelCompleted.includes(player.activeLevel)) player.levelCompleted.push(player.activeLevel)
	if(tmp.totalScore.gte(NaNCheck(player.best[player.activeLevel]))) player.best[player.activeLevel] = tmp.totalScore
	player.activeLevel = 0
	gridSetUp()
}
