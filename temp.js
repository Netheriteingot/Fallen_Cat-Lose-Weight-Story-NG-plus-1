function updateTemp() {
	updateTempThought();
}
//更新所有游戏内二级变量的数值
function updateTempThought()
{
    tmp.currSize = NaNCheck(LEVEL_DATA[player.activeLevel])
    list = {1:tmp.currSize>=1?1:'',2:tmp.currSize>=2?1:'',3:tmp.currSize>=3?1:'',4:tmp.currSize>=4?1:'',5:tmp.currSize>=5?1:'',6:tmp.currSize>=6?1:'',7:tmp.currSize>=7?1:'',8:tmp.currSize>=8?1:'',9:tmp.currSize>=9?1:''}
    tmp.state = statePending()
    if(tmp.state!='out'){
    tmp.clickScore = new Decimal(NaNCheck(player.clicks-LEVEL_DATA[player.activeLevel].time)).mul(-1).floor().mul(30)
    if(player.clicks<=(LEVEL_DATA[player.activeLevel].time-3)) tmp.clickScore=tmp.clickScore.add(300)
    tmp.stepScore = new Decimal(NaNCheck(player.steps-LEVEL_DATA[player.activeLevel].step)).mul(-1).floor().mul(80)
    if(player.steps<=(LEVEL_DATA[player.activeLevel].step-5)) tmp.stepScore=tmp.stepScore.add(500)
    tmp.weightScore = Decimal.mul(45-calcWeight(),500)
    tmp.totalScore = tmp.stepScore.add(tmp.weightScore).add(tmp.clickScore)
    tmp.medal = GetCurrentMedal()
    tmp.medalColor = GetMedalColor()
    tmp.medalText = GetMedalText()
    }
    if(tmp.state == 'success'||tmp.state == 'failed') showTab("Result","normal")
    tmp.totalPoints = GetTotalScore()
    UpdateMedals()
}