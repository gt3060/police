var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var Scene=Laya.Scene;
/**
 * 游戏页面
 */
const GameStartUI = ((_super) => {
    const GameStartUI = () => {
        this.timeBar = null
    }
    CLASS$(GameStartUI, 'ui.GameStartUI', _super);
    const _proto_ = GameStartUI.prototype;
    _proto_.createChildren = () => {
        laya.ui.Component.prototype.createChildren.call(this);
		this.createView(GameUI.uiView);
    }

    STATICATTR$(GameStartUI, ['uiView', () => this.uiView = {"type":"View","props":{"width":750,"visible":true,"height":1334},"compId":2,"child":[{"type":"Sprite","props":{"y":-50,"x":750,"visible":true,"texture":"game/timg.jpg","rotation":90,"height":750},"compId":3},{"type":"Sprite","props":{"y":1120,"x":94,"var":"btnBack","texture":"game/exit.png","rotation":90},"compId":8},{"type":"Sprite","props":{"y":0,"x":421,"width":330,"texture":"game/npc.png","rotation":90,"height":418},"compId":9},{"type":"Sprite","props":{"y":484,"x":594,"width":603,"texture":"game/dialog-bg.png","rotation":90,"height":365},"compId":10},{"type":"Text","props":{"y":555,"x":533,"wordWrap":true,"width":467,"var":"dialogContent","valign":"middle","text":"文案文案文案文案文案文案文案文案文案文案文案","rotation":90,"height":182,"fontSize":25,"font":"Microsoft YaHei","color":"#fdfdfd","align":"center","runtime":"laya.display.Text"},"compId":11},{"type":"Sprite","props":{"y":820.5,"x":337,"width":92,"texture":"game/no.png","rotation":90,"height":57},"compId":12},{"type":"Sprite","props":{"y":680,"x":337,"width":92,"texture":"game/yes.png","rotation":90,"height":57},"compId":13}],"loadList":["game/timg.jpg","game/exit.png","game/npc.png","game/dialog-bg.png","game/no.png","game/yes.png"],"loadList3D":[]}])
})(View)
if(!window.ui) window.ui={};
console.log(window.ui);
export {ui as default};