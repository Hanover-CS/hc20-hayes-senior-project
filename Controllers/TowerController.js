import Tower from "../Modules/Tower/Tower.js"

export default class TowerController{
    constructor(){
        this.tower = new Tower();
}

        nextFloor(){
            this.tower.getNextArea()
        }
        
        restartTower(){
            this.tower.towerReset();
        }
        
        getTowerInfo(){
            let floor = this.tower.getFloor();
            let wave = this.tower.getWave();
            let list = {floor: floor, wave: wave};
            return list;
        }

        isAtTop(){
            this.tower.isAtTop();
        }
}