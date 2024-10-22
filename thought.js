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
const TOTAL_LEVEL = 69
const x="nothing", b="barrier"
const LEVEL_DATA = {
	11:{
		name:"Fat girl",
		size:3,
		time:7,
		step:7,
		medal:[500,1000,1400],
		map:{
			1:[x,x,x],
			2:[x,1,x],
			3:[x,-1,x],
		}
	},
	12:{
		name:"Short Chain",
		size:3,
		time:7,
		step:7,
		medal:[700,1100,1350],
		map:{
			1:[x,2,x],
			2:[x,-1,x],
			3:[x,-1,x],
		}
	},
	13:{
		name:"On and On and On",
		size:3,
		time:7,
		step:8,
		medal:[900,1200,1450],
		map:{
			1:[x,4,x],
			2:[x,-2,x],
			3:[x,-2,x],
		}
	},
	14:{
		name:"Lazy Girl",
		size:3,
		time:8,
		step:7,
		medal:[950,1200,1400],
		map:{
			1:[x,1,x],
			2:[x,x,x],
			3:[x,-2,x],
		}
	},
	15:{
		name:"Long Chain",
		size:4,
		time:7,
        step:12,
		medal:[900,1200,1450],
		map:{
			1:[-1,-1,-1,6],
			2:[-1,x,x,x],
			3:[-1,x,x,x],
			4:[-1,x,x,x],
		}
	},
	16:{
		name:"Double Chain",
		size:4,
		time:8,
		step:12,
		medal:[700,1150,1600],
		map:{
			1:[x,1,-1,x],
			2:[x,x,x,x],
			3:[2,1,-1,-2],
			4:[x,x,x,x],
		}
	},
	17:{
		name:"CH2=CH2",
		size:5,
		time:10,
		step:15,
		medal:[800,1100,1400],
		map:{
			1:[-3,x,x,x,-3],
			2:[x,x,x,x,x],
			3:[x,3,x,3,x],
			4:[x,x,x,x,x],
			5:[-3,x,x,x,-3],
		}
	},
	18:{
		name:"Space-Filling Model",
		size:5,
		time:8,
		step:23,
		medal:[800,1100,1300],
		map:{
			1:[-1,-3,x,-3,-1],
			2:[-3,2,x,2,-3],
			3:[x,x,18,x,x],
			4:[-3,2,x,2,-3],
			5:[-1,-3,x,-3,-1],
		}
	},
	19:{
		name:"Rotunda",
		size:5,
		time:14,
		step:24,
		medal:[900,1300,1500],
		map:{
			1:[-1,-2,3,-2,-1],
			2:[-2,x,-1,x,5],
			3:[3,-1,-6,-1,3],
			4:[-1,x,-1,x,5],
			5:[-2,5,3,-3,-3],
		}
	},
	21:{
		name:"Break Through The Barrier",
		size:3,
		time:7,
		step:9,
		medal:[700,1000,1350],
		map:{
			1:[x,2,x],
			2:[x,'barrier',x],
			3:[x,-5,x],
		}
	},
	22:{
		name:"Double Barrier",
		size:3,
		time:7,
		step:11,
		medal:[700,1250,1300],
		map:{
			1:[-3,2,-2],
			2:[b,5,b],
			3:[-3,3,-2],
		}
	},
	23:{
		name:"Cloud Girl",
		size:4,
		time:10,
		step:14,
		medal:[700,1000,1440],
		map:{
			1:[1,2,b,x],
			2:[b,x,-2,x],
			3:[2,1,b,-2],
			4:[-3,x,-2,x],
		}
	},
	24:{
		name:"Hide by your side",
		size:5,
		time:13,
		step:20,
		medal:[600,1100,1480],
		map:{
			1:[x,-1,x,-1,x],
			2:[b,1,-1,1,b],
			3:[1,-4,b,-4,11],
			4:[1,b,-2,b,1],
			5:[-3,1,x,1,-3],
		}
	},
	25:{
		name:"Tiptoe around and don't get circulated",
		size:5,
		time:13,
		step:19,
		medal:[800,1150,1450],
		map:{
			1:[b,3,b,3,x],
			2:[2,-4,b,x,-3],
			3:[b,-4,2,-3,b],
			4:[2,x,b,-4,x],
			5:[-1,x,1,4,b],
		}
	},
	26:{
		name:"Leave your worries behind",
		size:6,
		time:13,
		step:25,
		medal:[1000,1300,1600],
		map:{
			1:[x,7,x,x,-1,x],
			2:[b,-2,b,b,-3,1],
			3:[b,x,1,2,x,1],
			4:[b,x,2,1,x,b],
			5:[b,-1,-1,-1,-3,x],
			6:[x,-6,x,2,-1,x],
		}
	},
	27:{
		name:"Throw away your sorrows",
		size:7,
		time:15,
		step:30,
		medal:[900,1300,1650],
		map:{
			1:[x,1,-2,1,x,-1,x],
			2:[b,b,b,1,-1,3,x],
			3:[x,-1,x,1,x,-1,x],
			4:[-2,3,-2,1,b,b,b],
			5:[x,-1,x,1,x,-1,x],
			6:[b,b,b,1,-1,3,-6],
			7:[x,5,-2,1,x,-1,x],
		}
	},
	28:{
		name:"Let me ring the bell to put you to sleep",
		size:6,
		time:14,
		step:26,
		medal:[700,1200,1450],
		map:{
			1:[x,x,x,1,-5,x],
			2:[-4,b,x,2,b,x],
			3:[b,-4,x,b,-2,x],
			4:[x,x,x,x,x,x],
			5:[3,b,-2,b,2,-4],
			6:[x,-1,x,4,x,x],
		}
	},
	29:{
		name:"Another Path",
		size:6,
		time:14,
		step:30,
		medal:[1100,1300,1600],
		map:{
			1:[2,x,x,x,-6,1],
			2:[3,x,b,-7,b,-5],
			3:[-2,b,2,x,-6,x],
			4:[-2,3,-1,2,b,x],
			5:[4,b,3,b,x,x],
			6:[b,3,-1,2,2,-1],
		}
	},
	20:{
		name:"One time",
		size:8,
		time:1,
		step:65,
		medal:[1560,1590,1620],
		map:{
			1:[1,1,1,1,1,1,x,x],
			2:[1,1,1,x,x,1,1,x],
			3:[1,1,1,1,1,x,1,1],
			4:[1,-51,x,1,1,1,1,1],
			5:[1,1,1,1,1,1,1,1],
			6:[1,1,1,x,1,1,x,1],
			7:[1,1,1,x,1,1,1,1],
			8:[1,1,1,1,1,x,1,x],
		}
	},
	30:{
		name:"One time",
		size:8,
		time:1,
		step:65,
		medal:[1560,1590,1620],
		map:{
			1:[1,1,1,1,1,1,x,x],
			2:[1,1,1,x,x,1,1,x],
			3:[1,1,1,1,1,x,1,1],
			4:[1,-51,x,1,1,1,1,1],
			5:[1,1,1,1,1,1,1,1],
			6:[1,1,1,x,1,1,x,1],
			7:[1,1,1,x,1,1,1,1],
			8:[1,1,1,1,1,x,1,x],
		}
	},
	31:{
		name:"First Multiplication",
		size:3,
		time:5,
		step:7,
		medal:[850,1100,1300],
		map:{
			1:[x,4,x],
			2:[x,"x2",x],
			3:[x,-2,x],
		}
	},
	32:{
		name:"Quantum Exercise",
		size:4,
		time:10,
		step:14,
		medal:[700,1000,1440],
		map:{
			1:[x,x,x,-3],
			2:[-2,"x2",x,x],
			3:[4,x,"x2",x],
			4:[-1,9,-2,x],
		}
	},
	33:{
		name:"Yin Yang",
		size:3,
		time:7,
		step:14,
		medal:[700,1000,1300],
		map:{
			1:[15,x,-4],
			2:["x3",x,"x2"],
			3:[-3,x,10],
		}
	},
	34:{
		name:"DataError",
		size:5,
		time:15,
		step:28,
		medal:[2300,3100,3750],
		map:{
		    1:[3,x,2,b,x],
			2:[x,3,-1,"x0",-6],
			3:[x,-2,b,-3,x],
			4:[-5,x,-1,3,x],
			5:["x0",b,7,x,3],
		},
	},
	35:{
		name:"Restrictions",
		size:5,
		time:17,
		step:25,
		medal:[800,1100,1600],
		map:{
		    1:[b,4,-1,-2,b],
			2:[-2,b,1,b,4],
			3:[-1,1,"x2",1,-1],
			4:[1,b,1,b,2],
			5:[b,x,-2,"x0",b],
		},
	},
	36:{
		name:"Math Problem",
		size:4,
		time:14,
		step:30,
		medal:[3000,6600,9600],
		map:{
			1:["x2",14,"x2",50],
			2:[-1,"x0",-1,"x1"],
			3:["x2",-1,"x2",40],
			4:[-1,"x2",50,"x2"],
		}
	},
	37:{
		name:"Fallen_Cat's Scream",
		size:5,
		time:17,
		step:32,
		medal:[1200,1600,2000],
		map:{
		    1:[5,x,13,b,"x2"],
			2:[x,x,-5,-1,8],
			3:[-3,b,"x0",x,x],
			4:[x,x,b,x,-3],
			5:["x2",b,-2,x,1],
	        },
		},
	38:{
		name:"The Guru",
		size:6,
		time:20,
		step:40,
		medal:[1500,3000,4500],
		map:{
		1:[x,-2,5,-3,x,-2],
		2:[-3,x,"x2",x,-3,x],
		3:[x,5,x,4,b,x],
		4:[x,b,4,x,x,14],
		5:[x,-3,x,"x2",x,-2],
		6:[-2,x,-3,5,-3,x],
		},
	},
	39:{
		name:"Spasmodic",
		size:5,
		time:15,
		step:28,
		medal:[1700,2300,2900],
		map:{
		    1:[-1,x,"x2",x,-1],
			2:[x,1,x,5,x],
			3:[-2,x,-2,x,-2],
			4:[x,5,x,1,x],
			5:[x,1,"x2",x,-3],
	    },
	},
	41:{
		name:"Easiest level in the whole pack xd",
		size:4,
		time:15,
		step:28,
		medal:[1200,1800,2440],
		map:{
		    1:[6,x,b,-5],
			2:[b,x,"x2",x],
			3:[x,"x2",x,b],
			4:[2,b,x,1],
	    },
	},
	42:{
		name:"A classical Pack 2 level ?",
		size:7,
		time:25,
		step:42,
		medal:[1680,1800,1980],
		map:{
		    1:[-1,x,-2,x,-11,2,1],
			2:[2,x,7,x,b,x,3],
			3:[x,b,x,2,-4,5,b],
			4:[-2,-2,x,-2,x,x,2],
			5:[4,-3,-3,"x0",4,2,-4],
			6:[-3,x,x,4,b,x,-3],
			7:[x,-1,2,-4,x,3,4],
	    },
	},
	43:{
		name:"micro.wav",
		size:6,
		time:18,
		step:38,
		medal:[1650,1800,1950],
		map:{
		    1:[x,-5,10,x,x,"x2"],
			2:["x0",b,b,b,x,b],
			3:[1,"x2",x,-3,-2,b],
			4:[x,b,b,b,x,x],
			5:[-2,b,x,b,x,x],
			6:[x,x,x,x,1,6],
	    },
	},
	44:{
		name:"How...?",
		size:6,
		time:20,
		step:45,
		medal:[2050,2250,2550],
		map:{
		    1:[x,1,"x2",x,"x1","x0"],
			2:[1,x,x,x,1,x],
			3:["x3",1,-3,1,x,"x3"],
			4:[1,x,x,x,1,x],
			5:[x,1,x,x,x,1],
			6:[1,x,"x2",1,x,x]
	    },
	},
	45:{
		name:"6th Ark",
		size:6,
		time:20,
		step:35,
		medal:[1200,1500,1720],
		map:{
		    1:[10,x,-5,-5,x,14],
			2:[x,-2,1,x,-2,x],
			3:[-2,x,b,x,x,-2],
			4:[x,b,"x2",1,b,x],
			5:[1,6,x,b,x,x],
			6:[x,x,1,x,x,"x2"],
	    },
	},
	/*
	46:{
		name:"test",
		size:4,
		time:15,
		step:28,
		medal:[1000,1700,2300],
		map:{
		    1:[-1,1,'l','l'],
			2:['d',x,x,'u'],
			3:['d',x,x,'u'],
			4:['r','r','r','u'],
	    },
	},
	*/
	46:{
		name:"Easiest in the whole pack...",
		size:5,
		time:15,
		step:28,
		medal:[1000,1700,2300],
		map:{
		    1:[6,x,b,-5],
			2:[b,x,"x2",x],
			3:[x,"x2",x,b],
			4:[2,b,x,1],
	    },
	},
	47:{
		name:"Easiest in the whole pack...",
		size:5,
		time:15,
		step:28,
		medal:[1000,1700,2300],
		map:{
		    1:[6,x,b,-5],
			2:[b,x,"x2",x],
			3:[x,"x2",x,b],
			4:[2,b,x,1],
	    },
	},
	48:{
		name:"Easiest in the whole pack...",
		size:5,
		time:15,
		step:28,
		medal:[1000,1700,2300],
		map:{
		    1:[6,x,b,-5],
			2:[b,x,"x2",x],
			3:[x,"x2",x,b],
			4:[2,b,x,1],
	    },
	},
	49:{
		name:"Easiest in the whole pack...",
		size:5,
		time:15,
		step:28,
		medal:[1000,1700,2300],
		map:{
		    1:[6,x,b,-5],
			2:[b,x,"x2",x],
			3:[x,"x2",x,b],
			4:[2,b,x,1],
	    },
	},
	40:{
		name:"Labyrinth",
		size:7,
		time:520,
		step:535,
		medal:[1000,1700,2300],
		map:{
			1:[50,50,50,b,50,50,50],
			2:[50,b,50,50,50,b,50],
			3:[50,50,b,x,b,50,50],
			4:[b,50,b,"x9",b,50,b],
			5:[50,50,b,b,b,50,50],
			6:[50,b,50,-282,50,b,50],
			7:[50,50,50,b,50,50,50],
	    },
	},
	50:{
		name:"Labyrinth",
		size:7,
		time:520,
		step:535,
		medal:[1000,1700,2300],
		map:{
			1:[50,50,50,b,50,50,50],
			2:[50,b,50,50,50,b,50],
			3:[50,50,b,x,b,50,50],
			4:[b,50,b,"x9",b,50,b],
			5:[50,50,b,b,b,50,50],
			6:[50,b,50,-282,50,b,50],
			7:[50,50,50,b,50,50,50],
	    },
	},
	51:{
		name:"Introduction to XOR",
		size:3,
		time:7,
		step:7,
		medal:[1050,1200,1350],
		map:{
			1:[x,3,x],
			2:[x,"^2",x],
			3:[x,-1,x],
	    },
	},
	52:{
		name:"Another introduction to XOR",
		size:3,
		time:7,
		step:11,
		medal:[1050,1200,1350],
		map:{
			1:[x,7,x],
			2:[x,"^4",x],
			3:[x,-7,x],
	    },
	},
	53:{
		name:"Another Path Pt.II",
		size:4,
		time:10,
		step:15,
		medal:[1900,2400,2900],
		map:{
			1:[x,x,-2,x],
			2:[x,"^3",x,x],
			3:[-3,x,x,x],
			4:[x,x,4,x],
	    },
	},
	54:{
		name:"Combine them together...",
		size:4,
		time:15,
		step:25,
		medal:[2000,2250,2500],
		map:{
			1:[x,b,6,x],
			2:[x,"^3",x,x],
			3:[x,x,b,"x2"],
			4:[-2,x,-3,x],
	    },
	},
	55:{
		name:"Chronomia",
		size:5,
		time:20,
		step:30,
		medal:[1200,1450,1700],
		map:{
			1:[x,x,"x2",x,1],
			2:[x,14,x,x,"^7"],
			3:[-2,x,-2,x,"^5"],
			4:[x,2,-2,5,x],
			5:[x,5,"x2",x,-1],
	    },
	},
	56:{
		name:"DM me on discord if you see this name",
		size:6,
		time:15,
		step:28,
		medal:[1450,1750,2050],
		map:{
			1:[x,x,x,x,x,x],
			2:[x,x,b,"^8",b,x],
			3:["x2",x,x,5,x,-9],
			4:["x1",x,4,x,x,x],
			5:[6,b,1,b,x,x],
			6:[x,x,x,"x2",x,x],
	    },
	},
	57:{
		name:"Parity",
		size:5,
		time:15,
		step:28,
		medal:[1990,2190,2390],
		map:{
		    1:[5,x,x,"x2",x],
			2:[x,x,x,x,x],
			3:[x,"^5",4,x,x],
			4:[x,x,x,x,x],
			5:[5,x,x,-10,x],
	    },
	},
	58:{
		name:"Easiest in the whole pack...",
		size:5,
		time:15,
		step:28,
		medal:[1000,1700,2300],
		map:{
		    1:[6,x,b,-5],
			2:[b,x,"x2",x],
			3:[x,"x2",x,b],
			4:[2,b,x,1],
	    },
	},
	59:{
		name:"Easiest in the whole pack...",
		size:5,
		time:15,
		step:28,
		medal:[1000,1700,2300],
		map:{
		    1:[6,x,b,-5],
			2:[b,x,"x2",x],
			3:[x,"x2",x,b],
			4:[2,b,x,1],
	    },
	},
	61:{
		name:"Slide slide",
		size:3,
		time:7,
		step:7,
		medal:[1370,1430,1490],
		map:{
			1:[1,"r","d"],
			2:[x,x,"d"],
			3:[-1,"l","l"],
	    },
	},
	62:{
		name:"Crave Wave",
		size:5,
		time:7,
		step:11,
		medal:[700,1000,1300],
		map:{
			1:[3,x,x,6,"x2"],
			2:["d",b,"^7",b,"u"],
			3:["d",b,"u",b,"u"],
			4:["d",b,7,b,"u"],
			5:[4,-7,x,x,-3],
	    },
	},
	63:{
		name:"Another Path Pt.III",
		size:5,
		time:10,
		step:15,
		medal:[1600,1800,2000],
		map:{
			1:[x,x,6,x,x],
			2:[x,x,"d",x,x],
			3:[-6,"l","l","l",5],
			4:[x,x,"d",x,x],
			5:[x,x,-6,x,x],
	    },
	},
	64:{
		name:"Combine them together...",
		size:4,
		time:15,
		step:25,
		medal:[2000,2250,2500],
		map:{
			1:[x,b,6,x],
			2:[x,"^3",x,x],
			3:[x,x,b,"x2"],
			4:[-2,x,-3,x],
	    },
	},
	65:{
		name:"Chronomia",
		size:5,
		time:20,
		step:30,
		medal:[1200,1450,1700],
		map:{
			1:[x,x,"x2",x,1],
			2:[x,14,x,x,"^7"],
			3:[-2,x,-2,x,"^5"],
			4:[x,2,-2,5,x],
			5:[x,5,"x2",x,-1],
	    },
	},
	66:{
		name:"DM me on discord if you see this name",
		size:6,
		time:15,
		step:28,
		medal:[1450,1750,2050],
		map:{
			1:[x,x,x,x,x,x],
			2:[x,x,b,"^8",b,x],
			3:["x2",x,x,5,x,-9],
			4:["x1",x,4,x,x,x],
			5:[6,b,1,b,x,x],
			6:[x,x,x,"x2",x,x],
	    },
	},
	67:{
		name:"Parity",
		size:5,
		time:15,
		step:28,
		medal:[1990,2190,2390],
		map:{
		    1:[5,x,x,"x2",x],
			2:[x,x,x,x,x],
			3:[x,"^5",4,x,x],
			4:[x,x,x,x,x],
			5:[5,x,x,-10,x],
	    },
	},
	68:{
		name:"Easiest in the whole pack...",
		size:5,
		time:15,
		step:28,
		medal:[1000,1700,2300],
		map:{
		    1:[6,x,b,-5],
			2:[b,x,"x2",x],
			3:[x,"x2",x,b],
			4:[2,b,x,1],
	    },
	},
	69:{
		name:"Easiest in the whole pack...",
		size:5,
		time:15,
		step:28,
		medal:[1000,1700,2300],
		map:{
		    1:[6,x,b,-5],
			2:[b,x,"x2",x],
			3:[x,"x2",x,b],
			4:[2,b,x,1],
	    },
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
function calcScore(level, score)
{
	if(score<=LEVEL_DATA[level].medal[0])return 20;
	else return 20+80*(score-LEVEL_DATA[level].medal[0])/(LEVEL_DATA[level].medal[2]-LEVEL_DATA[level].medal[0]);
}
function GetTotalScore()
{
	let total = new Decimal(0)
	for(var i=11; i<=TOTAL_LEVEL; i++)
	{
        if(player.best[i]!=undefined && player.best[i]!=null) total = total.add(calcScore(i, player.best[i]))
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
	        if(typeof(player.grid[i*10+j])=='number'&&(NaNCheck(player.grid[i*10+j])>0)) weight+=player.grid[i*10+j]
		}
	}
	if(weight>45)return weight
	else for(var i=1; i<=LEVEL_DATA[player.activeLevel].size; i++)
	{
		for (var j=1; j<=LEVEL_DATA[player.activeLevel].size; j++)
		{
	        if(typeof(player.grid[i*10+j])=='number'&&(NaNCheck(player.grid[i*10+j])<0)) weight+=player.grid[i*10+j]
		}
	}
	return weight
}
