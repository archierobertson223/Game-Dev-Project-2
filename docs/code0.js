gdjs.Level_321Code = {};
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDBackgroundBrownLightObjects1= [];
gdjs.Level_321Code.GDBackgroundBrownLightObjects2= [];
gdjs.Level_321Code.GDBackgroundBrownObjects1= [];
gdjs.Level_321Code.GDBackgroundBrownObjects2= [];
gdjs.Level_321Code.GDCloudObjects1= [];
gdjs.Level_321Code.GDCloudObjects2= [];
gdjs.Level_321Code.GDGrassPlatObjects1= [];
gdjs.Level_321Code.GDGrassPlatObjects2= [];
gdjs.Level_321Code.GDBridgeObjects1= [];
gdjs.Level_321Code.GDBridgeObjects2= [];
gdjs.Level_321Code.GDCoinObjects1= [];
gdjs.Level_321Code.GDCoinObjects2= [];
gdjs.Level_321Code.GDScoreObjects1= [];
gdjs.Level_321Code.GDScoreObjects2= [];
gdjs.Level_321Code.GDSlimeObjects1= [];
gdjs.Level_321Code.GDSlimeObjects2= [];
gdjs.Level_321Code.GDLeftObjects1= [];
gdjs.Level_321Code.GDLeftObjects2= [];
gdjs.Level_321Code.GDRightObjects1= [];
gdjs.Level_321Code.GDRightObjects2= [];
gdjs.Level_321Code.GDBushObjects1= [];
gdjs.Level_321Code.GDBushObjects2= [];
gdjs.Level_321Code.GDFloatButtonObjects1= [];
gdjs.Level_321Code.GDFloatButtonObjects2= [];
gdjs.Level_321Code.GDTimeObjects1= [];
gdjs.Level_321Code.GDTimeObjects2= [];
gdjs.Level_321Code.GDGrassBlocObjects1= [];
gdjs.Level_321Code.GDGrassBlocObjects2= [];
gdjs.Level_321Code.GDGameOverObjects1= [];
gdjs.Level_321Code.GDGameOverObjects2= [];
gdjs.Level_321Code.GDNewObjectObjects1= [];
gdjs.Level_321Code.GDNewObjectObjects2= [];
gdjs.Level_321Code.GDHighSpikesObjects1= [];
gdjs.Level_321Code.GDHighSpikesObjects2= [];
gdjs.Level_321Code.GDForestBackgroundObjects1= [];
gdjs.Level_321Code.GDForestBackgroundObjects2= [];
gdjs.Level_321Code.GDWallObjects1= [];
gdjs.Level_321Code.GDWallObjects2= [];
gdjs.Level_321Code.GDStatsObjects1= [];
gdjs.Level_321Code.GDStatsObjects2= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Level_321Code.GDCoinObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Level_321Code.GDSlimeObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Level_321Code.GDLeftObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Level_321Code.GDSlimeObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Level_321Code.GDRightObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Level_321Code.GDSlimeObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Level_321Code.GDSlimeObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloatButtonObjects1Objects = Hashtable.newFrom({"FloatButton": gdjs.Level_321Code.GDFloatButtonObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloatButtonObjects1Objects = Hashtable.newFrom({"FloatButton": gdjs.Level_321Code.GDFloatButtonObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHighSpikesObjects1Objects = Hashtable.newFrom({"HighSpikes": gdjs.Level_321Code.GDHighSpikesObjects1});gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level_321Code.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level_321Code.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level_321Code.GDRightObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDLeftObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDRightObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRightObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}{runtimeScene.getGame().getVariables().get("Timer").setNumber(99);
}{for(var i = 0, len = gdjs.Level_321Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGameOverObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_321Code.GDPlayerObjects1.length !== 0 ? gdjs.Level_321Code.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Level_321Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level_321Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Level_321Code.GDSlimeObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSlimeObjects1[i].getVariableString(gdjs.Level_321Code.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDSlimeObjects1[k] = gdjs.Level_321Code.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSlimeObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level_321Code.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Level_321Code.GDSlimeObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeObjects1[i].returnVariable(gdjs.Level_321Code.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level_321Code.GDRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Level_321Code.GDSlimeObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeObjects1[i].returnVariable(gdjs.Level_321Code.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Level_321Code.GDSlimeObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSlimeObjects1[i].getVariableString(gdjs.Level_321Code.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDSlimeObjects1[k] = gdjs.Level_321Code.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSlimeObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Level_321Code.GDSlimeObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level_321Code.GDGameOverObjects1);
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGameOverObjects1[i].setString(gdjs.Level_321Code.GDGameOverObjects1[i].getString() + ("\nYou were killed by a slime"));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Level_321Code.GDSlimeObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
/* Reuse gdjs.Level_321Code.GDSlimeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Stats"), gdjs.Level_321Code.GDStatsObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSlimeObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDStatsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsObjects1[i].returnVariable(gdjs.Level_321Code.GDStatsObjects1[i].getVariables().getFromIndex(3)).add(1);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "countdown");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stats"), gdjs.Level_321Code.GDStatsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.Level_321Code.GDTimeObjects1);
{runtimeScene.getGame().getVariables().get("Timer").sub(1);
}{for(var i = 0, len = gdjs.Level_321Code.GDTimeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDTimeObjects1[i].setString("Time: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Timer")));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}{for(var i = 0, len = gdjs.Level_321Code.GDStatsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsObjects1[i].returnVariable(gdjs.Level_321Code.GDStatsObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Timer")) == 0;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level_321Code.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGameOverObjects1[i].setString(gdjs.Level_321Code.GDGameOverObjects1[i].getString() + ("\nYou ran out of time"));
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "countdown");
}{for(var i = 0, len = gdjs.Level_321Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGameOverObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().get("Timer").setNumber(-(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatButton"), gdjs.Level_321Code.GDFloatButtonObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloatButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(200);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatButton"), gdjs.Level_321Code.GDFloatButtonObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDFloatButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(1000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HighSpikes"), gdjs.Level_321Code.GDHighSpikesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDHighSpikesObjects1Objects, false, runtimeScene, true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level_321Code.GDGameOverObjects1);
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDGameOverObjects1[i].setString(gdjs.Level_321Code.GDGameOverObjects1[i].getString() + ("\nYou were killed by a spike"));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Stats"), gdjs.Level_321Code.GDStatsObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDStatsObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDStatsObjects1[i].getVariableString(gdjs.Level_321Code.GDStatsObjects1[i].getVariables().getFromIndex(0)) == "off" ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDStatsObjects1[k] = gdjs.Level_321Code.GDStatsObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDStatsObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDStatsObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDStatsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsObjects1[i].returnVariable(gdjs.Level_321Code.GDStatsObjects1[i].getVariables().getFromIndex(0)).setString("on");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDStatsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsObjects1[i].setString("Time spent in this game session: " + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDStatsObjects1[i].getVariables().getFromIndex(2)))) + "\\n\\M\\o\\n\\s\\t\\e\\r\\s\\ \\v\\a\\n\\q\\u\\i\\s\\h\\e\\d\\:\\ \"");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDStatsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Stats"), gdjs.Level_321Code.GDStatsObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDStatsObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDStatsObjects1[i].getVariableString(gdjs.Level_321Code.GDStatsObjects1[i].getVariables().getFromIndex(0)) == "on" ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDStatsObjects1[k] = gdjs.Level_321Code.GDStatsObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDStatsObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDStatsObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDStatsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsObjects1[i].returnVariable(gdjs.Level_321Code.GDStatsObjects1[i].getVariables().getFromIndex(0)).setString("off");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDStatsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDStatsObjects1[i].hide();
}
}}

}


{


{
}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDBackgroundBrownLightObjects1.length = 0;
gdjs.Level_321Code.GDBackgroundBrownLightObjects2.length = 0;
gdjs.Level_321Code.GDBackgroundBrownObjects1.length = 0;
gdjs.Level_321Code.GDBackgroundBrownObjects2.length = 0;
gdjs.Level_321Code.GDCloudObjects1.length = 0;
gdjs.Level_321Code.GDCloudObjects2.length = 0;
gdjs.Level_321Code.GDGrassPlatObjects1.length = 0;
gdjs.Level_321Code.GDGrassPlatObjects2.length = 0;
gdjs.Level_321Code.GDBridgeObjects1.length = 0;
gdjs.Level_321Code.GDBridgeObjects2.length = 0;
gdjs.Level_321Code.GDCoinObjects1.length = 0;
gdjs.Level_321Code.GDCoinObjects2.length = 0;
gdjs.Level_321Code.GDScoreObjects1.length = 0;
gdjs.Level_321Code.GDScoreObjects2.length = 0;
gdjs.Level_321Code.GDSlimeObjects1.length = 0;
gdjs.Level_321Code.GDSlimeObjects2.length = 0;
gdjs.Level_321Code.GDLeftObjects1.length = 0;
gdjs.Level_321Code.GDLeftObjects2.length = 0;
gdjs.Level_321Code.GDRightObjects1.length = 0;
gdjs.Level_321Code.GDRightObjects2.length = 0;
gdjs.Level_321Code.GDBushObjects1.length = 0;
gdjs.Level_321Code.GDBushObjects2.length = 0;
gdjs.Level_321Code.GDFloatButtonObjects1.length = 0;
gdjs.Level_321Code.GDFloatButtonObjects2.length = 0;
gdjs.Level_321Code.GDTimeObjects1.length = 0;
gdjs.Level_321Code.GDTimeObjects2.length = 0;
gdjs.Level_321Code.GDGrassBlocObjects1.length = 0;
gdjs.Level_321Code.GDGrassBlocObjects2.length = 0;
gdjs.Level_321Code.GDGameOverObjects1.length = 0;
gdjs.Level_321Code.GDGameOverObjects2.length = 0;
gdjs.Level_321Code.GDNewObjectObjects1.length = 0;
gdjs.Level_321Code.GDNewObjectObjects2.length = 0;
gdjs.Level_321Code.GDHighSpikesObjects1.length = 0;
gdjs.Level_321Code.GDHighSpikesObjects2.length = 0;
gdjs.Level_321Code.GDForestBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDForestBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDWallObjects1.length = 0;
gdjs.Level_321Code.GDWallObjects2.length = 0;
gdjs.Level_321Code.GDStatsObjects1.length = 0;
gdjs.Level_321Code.GDStatsObjects2.length = 0;

gdjs.Level_321Code.eventsList0(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
