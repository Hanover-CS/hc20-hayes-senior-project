export default class Tower{
    constructor(){
        this.floor = 1;
        this.wave = 1;
    }

    getNextArea(){
        let wave = this.getWave();
 
        if(wave < 3){
            this.nextWave();
        }
        else{

            this.nextFloor();
            this.waveReset();
        }
    }
    
    isBossWave(floor, wave){
        if(floor%10 == 0 && wave == 3){return true;}
        else {return false}
    }
    
    isAtTop(floor, wave){
        if(floor === 100 && wave === 3){return true;}
        else{return false;}
    }
    
    towerReset(){
        this.waveReset();
        this.floorReset();
    }

    waveReset(){this.wave = 1;}

    floorReset(){this.floor = 1;}

    nextFloor(){this.floor += 1;}
    
    nextWave(){this.wave += 1;}

    getFloor(){return this.floor;}

    getWave(){return this.wave;}
}