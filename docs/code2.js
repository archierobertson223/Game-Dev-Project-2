gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.GDBackgroundBrownLightObjects1= [];
gdjs.Title_32ScreenCode.GDBackgroundBrownLightObjects2= [];
gdjs.Title_32ScreenCode.GDBackgroundBrownObjects1= [];
gdjs.Title_32ScreenCode.GDBackgroundBrownObjects2= [];
gdjs.Title_32ScreenCode.GDCloudObjects1= [];
gdjs.Title_32ScreenCode.GDCloudObjects2= [];
gdjs.Title_32ScreenCode.GDGrassPlatObjects1= [];
gdjs.Title_32ScreenCode.GDGrassPlatObjects2= [];
gdjs.Title_32ScreenCode.GDBridgeObjects1= [];
gdjs.Title_32ScreenCode.GDBridgeObjects2= [];
gdjs.Title_32ScreenCode.GDCoinObjects1= [];
gdjs.Title_32ScreenCode.GDCoinObjects2= [];
gdjs.Title_32ScreenCode.GDScoreObjects1= [];
gdjs.Title_32ScreenCode.GDScoreObjects2= [];
gdjs.Title_32ScreenCode.GDSlimeObjects1= [];
gdjs.Title_32ScreenCode.GDSlimeObjects2= [];
gdjs.Title_32ScreenCode.GDLeftObjects1= [];
gdjs.Title_32ScreenCode.GDLeftObjects2= [];
gdjs.Title_32ScreenCode.GDRightObjects1= [];
gdjs.Title_32ScreenCode.GDRightObjects2= [];
gdjs.Title_32ScreenCode.GDBushObjects1= [];
gdjs.Title_32ScreenCode.GDBushObjects2= [];
gdjs.Title_32ScreenCode.GDFloatButtonObjects1= [];
gdjs.Title_32ScreenCode.GDFloatButtonObjects2= [];
gdjs.Title_32ScreenCode.GDTimeObjects1= [];
gdjs.Title_32ScreenCode.GDTimeObjects2= [];
gdjs.Title_32ScreenCode.GDGrassBlocObjects1= [];
gdjs.Title_32ScreenCode.GDGrassBlocObjects2= [];
gdjs.Title_32ScreenCode.GDGameOverObjects1= [];
gdjs.Title_32ScreenCode.GDGameOverObjects2= [];
gdjs.Title_32ScreenCode.GDNewObjectObjects1= [];
gdjs.Title_32ScreenCode.GDNewObjectObjects2= [];
gdjs.Title_32ScreenCode.GDHighSpikesObjects1= [];
gdjs.Title_32ScreenCode.GDHighSpikesObjects2= [];
gdjs.Title_32ScreenCode.GDForestBackgroundObjects1= [];
gdjs.Title_32ScreenCode.GDForestBackgroundObjects2= [];
gdjs.Title_32ScreenCode.GDWallObjects1= [];
gdjs.Title_32ScreenCode.GDWallObjects2= [];
gdjs.Title_32ScreenCode.GDBlueLaser05Objects1= [];
gdjs.Title_32ScreenCode.GDBlueLaser05Objects2= [];

gdjs.Title_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Title_32ScreenCode.GDSlimeObjects1});gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Title_32ScreenCode.GDLeftObjects1});gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Title_32ScreenCode.GDSlimeObjects1});gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Title_32ScreenCode.GDRightObjects1});gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueLaser05"), gdjs.Title_32ScreenCode.GDBlueLaser05Objects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Title_32ScreenCode.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Title_32ScreenCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Title_32ScreenCode.GDRightObjects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDRightObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "countdown");
}{runtimeScene.getGame().getVariables().get("Timer").setNumber(99);
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDGameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDBlueLaser05Objects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDBlueLaser05Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Title_32ScreenCode.GDSlimeObjects1);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDSlimeObjects1[i].getVariableString(gdjs.Title_32ScreenCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Title_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32ScreenCode.GDSlimeObjects1[k] = gdjs.Title_32ScreenCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDSlimeObjects1.length = k;}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Title_32ScreenCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Title_32ScreenCode.GDSlimeObjects1);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDSlimeObjects1Objects, gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDLeftObjects1Objects, false, runtimeScene, false);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDSlimeObjects1[i].returnVariable(gdjs.Title_32ScreenCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDSlimeObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Title_32ScreenCode.GDRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Title_32ScreenCode.GDSlimeObjects1);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDSlimeObjects1Objects, gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDRightObjects1Objects, false, runtimeScene, false);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDSlimeObjects1[i].returnVariable(gdjs.Title_32ScreenCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDSlimeObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Title_32ScreenCode.GDSlimeObjects1);

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDSlimeObjects1[i].getVariableString(gdjs.Title_32ScreenCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.Title_32ScreenCode.condition0IsTrue_0.val = true;
        gdjs.Title_32ScreenCode.GDSlimeObjects1[k] = gdjs.Title_32ScreenCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDSlimeObjects1.length = k;}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Title_32ScreenCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BlueLaser05"), gdjs.Title_32ScreenCode.GDBlueLaser05Objects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDBlueLaser05Objects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDBlueLaser05Objects1[i].addPolarForce(0, 50, 0);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Title_32ScreenCode.GDBlueLaser05Objects1.length !== 0 ? gdjs.Title_32ScreenCode.GDBlueLaser05Objects1[0] : null), true, "", 0);
}}

}


{


{
}

}


};

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDBackgroundBrownLightObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBackgroundBrownLightObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBackgroundBrownObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBackgroundBrownObjects2.length = 0;
gdjs.Title_32ScreenCode.GDCloudObjects1.length = 0;
gdjs.Title_32ScreenCode.GDCloudObjects2.length = 0;
gdjs.Title_32ScreenCode.GDGrassPlatObjects1.length = 0;
gdjs.Title_32ScreenCode.GDGrassPlatObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBridgeObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBridgeObjects2.length = 0;
gdjs.Title_32ScreenCode.GDCoinObjects1.length = 0;
gdjs.Title_32ScreenCode.GDCoinObjects2.length = 0;
gdjs.Title_32ScreenCode.GDScoreObjects1.length = 0;
gdjs.Title_32ScreenCode.GDScoreObjects2.length = 0;
gdjs.Title_32ScreenCode.GDSlimeObjects1.length = 0;
gdjs.Title_32ScreenCode.GDSlimeObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLeftObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLeftObjects2.length = 0;
gdjs.Title_32ScreenCode.GDRightObjects1.length = 0;
gdjs.Title_32ScreenCode.GDRightObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBushObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBushObjects2.length = 0;
gdjs.Title_32ScreenCode.GDFloatButtonObjects1.length = 0;
gdjs.Title_32ScreenCode.GDFloatButtonObjects2.length = 0;
gdjs.Title_32ScreenCode.GDTimeObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTimeObjects2.length = 0;
gdjs.Title_32ScreenCode.GDGrassBlocObjects1.length = 0;
gdjs.Title_32ScreenCode.GDGrassBlocObjects2.length = 0;
gdjs.Title_32ScreenCode.GDGameOverObjects1.length = 0;
gdjs.Title_32ScreenCode.GDGameOverObjects2.length = 0;
gdjs.Title_32ScreenCode.GDNewObjectObjects1.length = 0;
gdjs.Title_32ScreenCode.GDNewObjectObjects2.length = 0;
gdjs.Title_32ScreenCode.GDHighSpikesObjects1.length = 0;
gdjs.Title_32ScreenCode.GDHighSpikesObjects2.length = 0;
gdjs.Title_32ScreenCode.GDForestBackgroundObjects1.length = 0;
gdjs.Title_32ScreenCode.GDForestBackgroundObjects2.length = 0;
gdjs.Title_32ScreenCode.GDWallObjects1.length = 0;
gdjs.Title_32ScreenCode.GDWallObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBlueLaser05Objects1.length = 0;
gdjs.Title_32ScreenCode.GDBlueLaser05Objects2.length = 0;

gdjs.Title_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
