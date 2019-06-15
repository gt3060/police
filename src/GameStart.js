const GameStart = ((_super) => {
    const GameStart = () => {
        GameStart.super(this);
        this.btnBack.on(Laya.Event.CLICK,this,this.onBtnBack)
    };
    Laya.class(GameStart,"GameStart",_super);

    const _proto = GameStart.prototype;
    _proto.onBtnBack = () => {
        console.log('点击了退出')
    }
    return GameStart;
})(ui.GameStartUI);