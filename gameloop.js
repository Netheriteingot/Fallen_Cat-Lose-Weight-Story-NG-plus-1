function gameLoop(diff) {
	player.currTime = new Date().getTime();
	updateTemp();
	if (!gameLooping()) return;//游戏暂停时不再增长diff
	diff = NaNCheck(Math.max((player.currTime - player.currGameTime), 0));//获取时间差，得出该帧停留时间，从而生产资源(这玩意绝对不能低于0啊啊啊啊)
	doThoughtDiff(diff)
	player.currGameTime = new Date().getTime();
}

function gameLooping() {
	return true
}//游戏是否被暂停，真的会被暂停吗...
function doThoughtDiff(diff)
{
    if(player.activeLevel!=0&&tmp.state!='success'&&tmp.state!='failed')player.time = player.time.sub(diff/1000)
}