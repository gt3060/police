export default class Task extends Laya.Script {
    constructor() {
        super();
        this.owner.equipmentList.dataSource = []; // 装备列表数据初始化
        const equipments = []; // 装备数据 不知道是传进去还是直接写死，先置为空吧，可以用的时候直接读取json
    }
    onEnable() {
        this.loadEquipmentsData();
        this.renderEquipmentList();
        this.owner.btnTurnLeft.on(Laya.Event.CLICK, this, this.onBtnTurn('left'));
        this.owner.btnTurnRight.on(Laya.Event.CLICK, this, this.onBtnTurn('right'));
        this.owner.btnTurnEnter.on(Laya.Event.CLICK, this, this.onBtnChangeScene('forward'));
        this.owner.btnTurnCancel.on(Laya.Event.CLICK, this, this.onBtnChangeScene('backward'));
    }

    /**
     * @description 加载装备数据
     * @author gooff
     */
    // TODO: Before next commit
    loadEquipmentsData() {

    }

    /**
     * 渲染装备列表
     * @author gooff
     */
    // TODO: Before next commit
    renderEquipmentList() {

    }
    /**
     * 转向按钮的方法
     * @param {String} direction - 转向方向
     * @author gooff
     */
    // TODO: Before next commit
    onBtnTurn(direction) {

    }
    /**
     * 场景切换按钮（进入现场，离开现场）
     * @param {String} direction - 场景方向
     * @author gooff
     */
    // TODO: Before next commit
    onBtnChangeScene(direction) {

    }
}