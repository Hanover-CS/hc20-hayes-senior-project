import Tower from "../../Modules/Tower/Tower.js"

describe("Tower", function(){
    let tower = new Tower();
    it("Tower Creates Correctly", function(){
        chai.assert(tower.getFloor() == 1);
        chai.assert(tower.getWave() == 1);
    })

    it("getNextArea", function(){
        chai.assert(tower.getWave() == 1);
        chai.assert(tower.getFloor() == 1)
        
        for(let floor = 0; floor <= 100; floor++){
            chai.assert(tower.getFloor() == floor + 1);
            for(let wave = 1; wave <= 3; wave ++){
                chai.assert(tower.getWave() == (wave)); 
                tower.getNextArea();
            }
        } 
    })

    it("isAtTop", function(){
        let counterForFloors = -1;
        let counterForWaves = 0
        
        for(let floor = 0; floor <= 100; floor++){
            for(let wave = 1; wave <= 3; wave ++){
                chai.assert(tower.isAtTop(counterForFloors, counterForWaves) == false);

                if(counterForWaves == 3 && counterForFloors < 100){counterForWaves = 1;}
                else {counterForWaves+=1;}
            }
            counterForFloors += 1;
        } 
        chai.assert(tower.isAtTop(counterForFloors, counterForWaves) == true);
    })
})