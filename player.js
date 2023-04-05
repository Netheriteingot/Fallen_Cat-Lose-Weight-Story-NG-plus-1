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
	a.setAttribute('download', "Solitary_Orbiting_Dream_"+new Date()+".txt");
	a.setAttribute('id', 'downloadSave');

	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}
//重置游戏
function hardReset() {
	if (!confirm("你真的要重置游戏吗?这不会给予你任何加成!")) return;
	player = getStartPlayer();
	save();
	window.location.reload();
}
document.onkeydown = function(event){
	if(event.keyCode == 87) controlUp(),player.steps+=1
	if(event.keyCode == 83) controlDown(),player.steps+=1
	if(event.keyCode == 65) controlLeft(),player.steps+=1
	if(event.keyCode == 68) controlRight(),player.steps+=1
}
function controlUp()
{
	if(Math.floor(player.current/10)==1||player.grid[player.current]=='nothing'||player.grid[player.current]=='barrier') return
	else if(player.grid[player.current-10]=='barrier') return
	else if(typeof(player.grid[player.current])=='number'&&NaNCheck(player.grid[player.current])>0)
	{
		if(player.grid[player.current-10]=='nothing')
		{
		   player.grid[player.current-10]=player.grid[player.current]+1
		   player.grid[player.current]='nothing'
		}
		if(typeof(player.grid[player.current-10])=='number'&&NaNCheck(player.grid[player.current-10])<0)
		{
		   if(NaNCheck(player.grid[player.current])>=1&&!(player.grid[player.current]==((player.grid[player.current-10])*(-1))))player.grid[player.current-10]=player.grid[player.current]+player.grid[player.current-10]
		   else player.grid[player.current-10]='nothing'
		   player.grid[player.current]='nothing'
		}
		if(typeof(player.grid[player.current])=='number'&&NaNCheck(player.grid[player.current-10])>0) return
	}
	else if(typeof(player.grid[player.current])=='number'&&NaNCheck(player.grid[player.current])<0)
	{
		if(player.grid[player.current-10]=='nothing')
		{
		   if(NaNCheck(player.grid[player.current])<=-2)player.grid[player.current-10]=player.grid[player.current]+1
		   player.grid[player.current]='nothing'
		}
		else if(typeof(player.grid[player.current-10])=='number'&&NaNCheck(player.grid[player.current-10])<0)
		{
		   player.grid[player.current-10]=player.grid[player.current]+player.grid[player.current-10]
		   player.grid[player.current]='nothing'
		}
		else if(typeof(player.grid[player.current-10])=='number'&&NaNCheck(player.grid[player.current-10])>0)
		{
			if(!(player.grid[player.current]==((player.grid[player.current-10])*(-1))))player.grid[player.current-10]=player.grid[player.current]+player.grid[player.current-10]
			else player.grid[player.current-10]='nothing'
			player.grid[player.current]='nothing'
		}
	}
	if(player.current>10) player.current -= 10
}
function controlDown()
{
	if(Math.floor(player.current/10)==LEVEL_DATA[player.activeLevel].size||player.grid[player.current]=='nothing'||player.grid[player.current]=='barrier') return
	else if(player.grid[player.current+10]=='barrier') return
	else if(typeof(player.grid[player.current])=='number'&&NaNCheck(player.grid[player.current])>0)
	{
		if(player.grid[player.current+10]=='nothing')
		{
		   player.grid[player.current+10]=player.grid[player.current]+1
		   player.grid[player.current]='nothing'
		}
		else if(typeof(player.grid[player.current+10])=='number'&&NaNCheck(player.grid[player.current+10])<0)
		{
		   if(!(player.grid[player.current]==(player.grid[player.current+10])*(-1)))player.grid[player.current+10]+=player.grid[player.current]
		   else player.grid[player.current+10]='nothing'
		   player.grid[player.current]='nothing'
		}
		else if(typeof(player.grid[player.current+10])=='number'&&NaNCheck(player.grid[player.current+10])>0) return
	}
	else if(typeof(player.grid[player.current])=='number'&&NaNCheck(player.grid[player.current])<0)
	{
		if(player.grid[player.current+10]=='nothing')
		{
		   if(NaNCheck(player.grid[player.current])<=-2)player.grid[player.current+10]=player.grid[player.current]+1
		   player.grid[player.current]='nothing'
		}
		else if(typeof(player.grid[player.current+10])=='number'&&NaNCheck(player.grid[player.current+10])<0)
		{
		   player.grid[player.current+10]=player.grid[player.current]+player.grid[player.current+10]
		   player.grid[player.current]='nothing'
		}
		else if(typeof(player.grid[player.current+10])=='number'&&NaNCheck(player.grid[player.current+10])>0)
		{
			if(!(player.grid[player.current]==((player.grid[player.current+10])*(-1))))player.grid[player.current+10]=player.grid[player.current]+player.grid[player.current+10]
			else player.grid[player.current+10]='nothing'
			player.grid[player.current]='nothing'
		 }
	}
	if(player.current<LEVEL_DATA[player.activeLevel].size*10) player.current += 10
}
function controlLeft()
{
	if(player.current%10==1||player.grid[player.current]=='nothing'||player.grid[player.current]=='barrier') return
	else if(player.grid[player.current-1]=='barrier') return
	else if(typeof(player.grid[player.current])=='number'&&NaNCheck(player.grid[player.current])>0)
	{
		if(player.grid[player.current-1]=='nothing')
		{
		   player.grid[player.current-1]=player.grid[player.current]+1
		   player.grid[player.current]='nothing'
		}
		if(typeof(player.grid[player.current-1])=='number'&&NaNCheck(player.grid[player.current-1])<0)
		{
		   if(NaNCheck(player.grid[player.current])>=1&&!(player.grid[player.current]==((player.grid[player.current-1])*(-1))))player.grid[player.current-1]=player.grid[player.current]+player.grid[player.current-1]
		   else player.grid[player.current-1]='nothing'
		   player.grid[player.current]='nothing'
		}
		if(typeof(player.grid[player.current])=='number'&&NaNCheck(player.grid[player.current-1])>0) return
	}
	else if(typeof(player.grid[player.current])=='number'&&NaNCheck(player.grid[player.current])<0)
	{
		if(player.grid[player.current-1]=='nothing')
		{
		   if(NaNCheck(player.grid[player.current])<=-2)player.grid[player.current-1]=player.grid[player.current]+1
		   player.grid[player.current]='nothing'
		}
		else if(typeof(player.grid[player.current-1])=='number'&&NaNCheck(player.grid[player.current-1])<0)
		{
		   player.grid[player.current-1]=player.grid[player.current]+player.grid[player.current-1]
		   player.grid[player.current]='nothing'
		}
		else if(typeof(player.grid[player.current-1])=='number'&&NaNCheck(player.grid[player.current-1])>0)
		{
			if(!(player.grid[player.current]==((player.grid[player.current-1])*(-1))))player.grid[player.current-1]=player.grid[player.current]+player.grid[player.current-1]
			else player.grid[player.current-1]='nothing'
			player.grid[player.current]='nothing'
		 }
	}
	if(player.current%10>1) player.current -= 1
}
function controlRight()
{
	if(player.current%10==LEVEL_DATA[player.activeLevel].size||player.grid[player.current]=='nothing'||player.grid[player.current]=='barrier') return
	else if(player.grid[player.current+1]=='barrier') return
	else if(typeof(player.grid[player.current])=='number'&&NaNCheck(player.grid[player.current])>0)
	{
		if(player.grid[player.current+1]=='nothing')
		{
		   player.grid[player.current+1]=player.grid[player.current]+1
		   player.grid[player.current]='nothing'
		}
		else if(typeof(player.grid[player.current+1])=='number'&&NaNCheck(player.grid[player.current+1])<0)
		{
		   if(!(player.grid[player.current]==(player.grid[player.current+1])*(-1)))player.grid[player.current+1]+=player.grid[player.current]
		   else player.grid[player.current+1]='nothing'
		   player.grid[player.current]='nothing'
		}
		else if(typeof(player.grid[player.current+1])=='number'&&NaNCheck(player.grid[player.current+1])>0) return
	}
	else if(typeof(player.grid[player.current])=='number'&&NaNCheck(player.grid[player.current])<0)
	{
		if(player.grid[player.current+1]=='nothing')
		{
		   if(NaNCheck(player.grid[player.current])<=-2)player.grid[player.current+1]=player.grid[player.current]+1
		   player.grid[player.current]='nothing'
		}
		else if(typeof(player.grid[player.current+1])=='number'&&NaNCheck(player.grid[player.current+1])<0)
		{
		   player.grid[player.current+1]=player.grid[player.current]+player.grid[player.current+1]
		   player.grid[player.current]='nothing'
		}
		else if(typeof(player.grid[player.current+1])=='number'&&NaNCheck(player.grid[player.current+1])>0)
		{
			if(!(player.grid[player.current]==((player.grid[player.current+1])*(-1))))player.grid[player.current+1]=player.grid[player.current]+player.grid[player.current+1]
			else player.grid[player.current+1]='nothing'
			player.grid[player.current]='nothing'
		 }
	}
	if(player.current%10<LEVEL_DATA[player.activeLevel].size) player.current += 1
}
function HaveExercise()
{
	for(var i=1; i<=LEVEL_DATA[player.activeLevel].size; i++)
	{
		for (var j=1; j<=LEVEL_DATA[player.activeLevel].size; j++)
		{
	        if(typeof(player.grid[i*10+j])=='number'&&NaNCheck(player.grid[i*10+j])<0) return true
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
