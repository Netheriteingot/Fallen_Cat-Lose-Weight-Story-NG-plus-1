function gridSetUp()
{
	for(var i=1; i<=9; i++)
	{
		for (var j=1; j<=9; j++)
		{
	        player.grid[i*10+j] = 'nothing'
		}
	}
}
var list = []
const TOTAL_LEVEL = 29
const LEVEL_DATA = {
	11:{
		size:3,
		time:7,
		step:7,
		medal:[500,1000,1400],
		map:{
			1:["nothing","nothing","nothing"],
			2:["nothing",1,"nothing"],
			3:["nothing",-1,"nothing"],
		}
	},
	12:{
		size:3,
		time:7,
		step:7,
		medal:[700,1100,1350],
		map:{
			1:["nothing",2,"nothing"],
			2:["nothing",-1,"nothing"],
			3:["nothing",-1,"nothing"],
		}
	},
	13:{
		size:3,
		time:7,
		step:8,
		medal:[900,1200,1450],
		map:{
			1:["nothing",4,"nothing"],
			2:["nothing",-2,"nothing"],
			3:["nothing",-2,"nothing"],
		}
	},
	14:{
		size:3,
		time:8,
		step:7,
		medal:[950,1200,1400],
		map:{
			1:["nothing",1,"nothing"],
			2:["nothing","nothing","nothing"],
			3:["nothing",-2,"nothing"],
		}
	},
	15:{
		size:4,
		time:7,
        step:12,
		medal:[900,1200,1450],
		map:{
			1:[-1,-1,-1,6],
			2:[-1,"nothing","nothing","nothing"],
			3:[-1,"nothing","nothing","nothing"],
			4:[-1,"nothing","nothing","nothing"],
		}
	},
	16:{
		size:4,
		time:8,
		step:12,
		medal:[700,1150,1600],
		map:{
			1:["nothing",1,-1,"nothing"],
			2:["nothing","nothing","nothing","nothing"],
			3:[2,1,-1,-2],
			4:["nothing","nothing","nothing","nothing"],
		}
	},
	17:{
		size:5,
		time:10,
		step:15,
		medal:[800,1100,1400],
		map:{
			1:[-3,"nothing","nothing","nothing",-3],
			2:["nothing","nothing","nothing","nothing","nothing"],
			3:["nothing",3,"nothing",3,"nothing"],
			4:["nothing","nothing","nothing","nothing","nothing"],
			5:[-3,"nothing","nothing","nothing",-3],
		}
	},
	18:{
		size:5,
		time:8,
		step:23,
		medal:[800,1100,1300],
		map:{
			1:[-1,-3,"nothing",-3,-1],
			2:[-3,2,"nothing",2,-3],
			3:["nothing","nothing",18,"nothing","nothing"],
			4:[-3,2,"nothing",2,-3],
			5:[-1,-3,"nothing",-3,-1],
		}
	},
	19:{
		size:5,
		time:14,
		step:24,
		medal:[900,1300,1500],
		map:{
			1:[-1,-2,3,-2,-1],
			2:[-2,"nothing",-1,"nothing",5],
			3:[3,-1,-6,-1,3],
			4:[-1,"nothing",-1,"nothing",5],
			5:[-2,5,3,-3,-3],
		}
	},
	21:{
		size:3,
		time:7,
		step:9,
		medal:[700,1000,1350],
		map:{
			1:["nothing",2,"nothing"],
			2:["nothing",'barrier',"nothing"],
			3:["nothing",-5,"nothing"],
		}
	},
	22:{
		size:3,
		time:7,
		step:11,
		medal:[700,1250,1300],
		map:{
			1:[-3,2,-2],
			2:["barrier",5,"barrier"],
			3:[-3,3,-2],
		}
	},
	23:{
		size:4,
		time:10,
		step:14,
		medal:[700,1000,1440],
		map:{
			1:[1,2,"barrier","nothing"],
			2:["barrier","nothing",-2,"nothing"],
			3:[2,1,"barrier",-2],
			4:[-3,"nothing",-2,"nothing"],
		}
	},
	24:{
		size:5,
		time:13,
		step:20,
		medal:[600,1100,1480],
		map:{
			1:["nothing",-1,"nothing",-1,"nothing"],
			2:["barrier",1,-1,1,"barrier"],
			3:[1,-4,"barrier",-4,11],
			4:[1,"barrier",-2,"barrier",1],
			5:[-3,1,"nothing",1,-3],
		}
	},
	25:{
		size:5,
		time:13,
		step:19,
		medal:[800,1150,1450],
		map:{
			1:["barrier",3,"barrier",3,"nothing"],
			2:[2,-4,"barrier","nothing",-3],
			3:["barrier",-4,2,-3,"barrier"],
			4:[2,"nothing","barrier",-4,"nothing"],
			5:[-1,"nothing",1,4,"barrier"],
		}
	},
	26:{
		size:6,
		time:13,
		step:25,
		medal:[1000,1300,1600],
		map:{
			1:["nothing",7,"nothing","nothing",-1,"nothing"],
			2:["barrier",-2,"barrier","barrier",-3,1],
			3:["barrier","nothing",1,2,"nothing",1],
			4:["barrier","nothing",2,1,"nothing","barrier"],
			5:["barrier",-1,-1,-1,-3,"nothing"],
			6:["nothing",-6,"nothing",2,-1,"nothing"],
		}
	},
	27:{
		size:7,
		time:15,
		step:30,
		medal:[900,1300,1650],
		map:{
			1:["nothing",1,-2,1,"nothing",-1,"nothing"],
			2:["barrier","barrier","barrier",1,-1,3,"nothing"],
			3:["nothing",-1,"nothing",1,"nothing",-1,"nothing"],
			4:[-2,3,-2,1,"barrier","barrier","barrier"],
			5:["nothing",-1,"nothing",1,"nothing",-1,"nothing"],
			6:["barrier","barrier","barrier",1,-1,3,-6],
			7:["nothing",5,-2,1,"nothing",-1,"nothing"],
		}
	},
	28:{
		size:6,
		time:14,
		step:26,
		medal:[700,1200,1450],
		map:{
			1:["nothing","nothing","nothing",1,-5,"nothing"],
			2:[-4,"barrier","nothing",2,"barrier","nothing"],
			3:["barrier",-4,"nothing","barrier",-2,"nothing"],
			4:["nothing","nothing","nothing","nothing","nothing","nothing"],
			5:[3,"barrier",-2,"barrier",2,-4],
			6:["nothing",-1,"nothing",4,"nothing","nothing"],
		}
	},
	29:{
		size:6,
		time:14,
		step:30,
		medal:[1100,1300,1600],
		map:{
			1:[2,"nothing","nothing","nothing",-6,1],
			2:[3,"nothing","barrier",-7,"barrier",-5],
			3:[-2,"barrier",2,"nothing",-6,"nothing"],
			4:[-2,3,-1,2,"barrier","nothing"],
			5:[4,"barrier",3,"barrier","nothing","nothing"],
			6:["barrier",3,-1,2,2,-1],
		}
	},
}
function GetLevelMedal(level)
{
	if(player.best[level]<=0||player.best[level]==undefined) return 'none'
	else if(player.best[level]<LEVEL_DATA[level].medal[0]) return 'copper'
	else if(player.best[level]<LEVEL_DATA[level].medal[1]) return 'silver'
	else if(player.best[level]<LEVEL_DATA[level].medal[2]) return 'gold'
	else return 'platinum'
}
function GetCurrentMedal()
{
	if(tmp.totalScore<LEVEL_DATA[player.activeLevel].medal[0]) return 'copper'
	else if(tmp.totalScore<LEVEL_DATA[player.activeLevel].medal[1]) return 'silver'
	else if(tmp.totalScore<LEVEL_DATA[player.activeLevel].medal[2]) return 'gold'
	else return 'platinum'
}
function GetMedalColor()
{
	if(tmp.totalScore<LEVEL_DATA[player.activeLevel].medal[0]) return '#8B4513'
	else if(tmp.totalScore<LEVEL_DATA[player.activeLevel].medal[1]) return '#C0C0C0'
	else if(tmp.totalScore<LEVEL_DATA[player.activeLevel].medal[2]) return '#FFD700'
	else return '#87CEEB'
}
function GetMedalText()
{
	if(tmp.totalScore<LEVEL_DATA[player.activeLevel].medal[0]) return (LEVEL_DATA[player.activeLevel].medal[0]-formatWhole(tmp.totalScore))+'pts to silver medal'
	else if(tmp.totalScore<LEVEL_DATA[player.activeLevel].medal[1]) return (LEVEL_DATA[player.activeLevel].medal[1]-formatWhole(tmp.totalScore))+'pts to gold medal'
	else if(tmp.totalScore<LEVEL_DATA[player.activeLevel].medal[2]) return (LEVEL_DATA[player.activeLevel].medal[2]-formatWhole(tmp.totalScore))+'pts to platinum medal'
	else return 'You have got the platinum medal!'
}
function GetLevelUnl(level)
{
	if(level%10==1) return true
	else if(player.levelCompleted.includes(level-1)) return true
	else return false
}
function UpdateMedals()
{
let copper = 0
let silver = 0
let gold = 0
let platinum = 0
for(var i=11; i<=TOTAL_LEVEL; i++)
	{
        if(player.best[i]!=undefined && player.best[i]!=null) copper += 1
		if(player.best[i]!=undefined && player.best[i]!=null && player.best[i]>=LEVEL_DATA[i].medal[0]) silver += 1
		if(player.best[i]!=undefined && player.best[i]!=null && player.best[i]>=LEVEL_DATA[i].medal[1]) gold += 1
		if(player.best[i]!=undefined && player.best[i]!=null && player.best[i]>=LEVEL_DATA[i].medal[2]) platinum += 1
	}
tmp.copper = copper
tmp.silver = silver
tmp.gold = gold
tmp.platinum = platinum
}
function setupLevel(level)
{
	for(var i=1; i<=LEVEL_DATA[level].size; i++)
	{
		for(var j=1; j<=LEVEL_DATA[level].size; j++)
	    {
		    player.grid[i*10+j] = LEVEL_DATA[level].map[i][j-1]
	    }
	}
}
function EnterLevel(level)
{
    if(!GetLevelUnl(level)) return
	player.activeLevel = level
	setupLevel(level)
	player.steps = 0
	player.clicks = 0
	player.current = 11
	showTab("Game","normal")
}
function GetTotalScore()
{
	let total = new Decimal(0)
	for(var i=11; i<=TOTAL_LEVEL; i++)
	{
        if(player.best[i]!=undefined && player.best[i]!=null) total = total.add(player.best[i])
	}
	return total
}
function calcWeight()
{
	let weight = 45
	for(var i=1; i<=LEVEL_DATA[player.activeLevel].size; i++)
	{
		for (var j=1; j<=LEVEL_DATA[player.activeLevel].size; j++)
		{
	        if(typeof(player.grid[i*10+j])=='number'&&NaNCheck(player.grid[i*10+j])>0) weight+=player.grid[i*10+j]
		}
	}
	if(weight>45)return weight
	else for(var i=1; i<=LEVEL_DATA[player.activeLevel].size; i++)
	{
		for (var j=1; j<=LEVEL_DATA[player.activeLevel].size; j++)
		{
	        if(typeof(player.grid[i*10+j])=='number'&&NaNCheck(player.grid[i*10+j])<0) weight-=player.grid[i*10+j]
		}
	}
	return weight
}