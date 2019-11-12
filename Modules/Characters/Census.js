
import FatZombie from "./Non-Playable Characters/Bosses/Floor10Bosses/FatZombie.js";
import Skeleton from "./Non-Playable Characters/Skeleton.js";
import Zombie from "./Non-Playable Characters/Zombie.js";
import Elemental from "./Playable Characters/Elementals.js";

let elemental = new Elemental;
let skeleton = new Skeleton;
let zombie = new Zombie;
let fatZombie = new FatZombie;

export class Census {
    constructor() { }

    lookUp(string) { return census[string]; }
    levelUpGuide(string) { return levelUp_Guides[string]; }
    allocation_Guide(string) { return allocation_Guides[string]; }
}

let census = {
    // Elemental Class
    "Salamander": elemental.getElemental("Salamander"),
    "Siren": elemental.getElemental("Siren"),
    "Sylph": elemental.getElemental("Sylph"),
    "Golom": elemental.getElemental("Golom"),

    // Zombie Class
    "Rotting Zombie": zombie.getZombie(),

    // Skeleton Class
    "Skeleton": skeleton.getSkeleton(),

    // Floor 10 Bosses
    "Fat Zombie": fatZombie.getFatZombie("Fat Zombie")
}

let levelUp_Guides = {
    "Salamander": elemental.getElemental("Salamander").levelUp_Guide(),
    "Siren": elemental.getElemental("Siren").levelUp_Guide(),
    "Sylph": elemental.getElemental("Sylph").levelUp_Guide(),
    "Golom": elemental.getElemental("Golom").levelUp_Guide(),
    "Rotting Zombie": zombie.getZombie().levelUpGuide(),
    "Skeleton": skeleton.levelUpGuide()
}

let allocation_Guides = {
    "Salamander": elemental.getElemental("Salamander").allocation_Guide(),
    "Siren": elemental.getElemental("Siren").allocation_Guide(),
    "Sylph": elemental.getElemental("Sylph").allocation_Guide(),
    "Golom": elemental.getElemental("Golom").allocation_Guide()
}


