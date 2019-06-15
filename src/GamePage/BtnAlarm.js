export default class BtnAlarm extends Laya.Script {
    constructor() {
        super()
    }
    onClick() {
        console.log('接警')
        // 场景切换可使用以下方式
        // Laya.Scene.open(Scene_Name);
    }
}