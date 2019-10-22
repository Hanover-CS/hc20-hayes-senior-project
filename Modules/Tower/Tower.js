export default class Tower{
    constructor(){
        this.floor = 1;
        this.wave = 1;
    }

    getNextArea(){
        // let floor = this.getFloor();
        let wave = this.getWave();

        if(wave < 3){
            
            this.nextWave();
        }
        else{
            this.nextFloor();
            this.waveReset();
        }
    }
    
    // isBossWave(floor, wave){
    //     if(floor % 10 == 0 && wave == 3){return true;}
    //     else {return false}
    // }
    
    isAtTop(floor, wave){
        if(floor === 100 && wave === 3){return true;}
        else{return false;}
    }
    
    // towerReset(){
    //     this.getWave() = 1;
    //     this.getFloor() = 1;
    
    // }

    waveReset(){
        this.wave = 1;
    }

    nextFloor(){
        this.floor += 1;
    }
    
    nextWave(){
        this.wave += 1;
    }

    getFloor(){
        return this.floor;
    }

    getWave(){
        return this.wave;
    }
}