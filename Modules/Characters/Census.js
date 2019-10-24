import {get_Race_From_String_From_Elemental_Class,
        get_The_levelUp_Guide_For_Elementals}       from "./Playable Characters/Elementals.js"
import {get_Race_From_String_From_Zombie_Class,
    get_The_levelUp_Guide_For_Zombies}              from "./Non-Playable Characters/Zombie.js"
import {get_Race_From_String_From_Skeleton_Class,
        get_The_levelUp_Guide_For_Skeletons}    from "./Non-Playable Characters/Skeleton.js"
import {get_Race_From_String_From_FatZombie_Class}  from "./Non-Playable Characters/Bosses/Floor10Bosses/FatZombie.js"


let census = {
    // Elemental Class
    "Salamander"	:get_Race_From_String_From_Elemental_Class("Salamander"),
    "Siren"         :get_Race_From_String_From_Elemental_Class("Siren"),
    "Sylph"         :get_Race_From_String_From_Elemental_Class("Sylph"),
    "Golom"         :get_Race_From_String_From_Elemental_Class("Golom"),

    // Zombie Class
    "Rotting Zombie":get_Race_From_String_From_Zombie_Class("Rotting Zombie"),

    // Skeleton Class
    "Skeleton"      :get_Race_From_String_From_Skeleton_Class("Skeleton"),

    // Floor 10 Bosses
    "Fat Zombie"    :get_Race_From_String_From_FatZombie_Class("Fat Zombie")
}

let levelUp_Guides = {
    "Salamander"    :get_The_levelUp_Guide_For_Elementals("Salamander"),
    "Siren"         :get_The_levelUp_Guide_For_Elementals("Siren"),
    "Sylph"         :get_The_levelUp_Guide_For_Elementals("Sylph"),
    "Golom"         :get_The_levelUp_Guide_For_Elementals("Golom"),
    "Rotting Zombie":get_The_levelUp_Guide_For_Zombies("Rotting Zombie"),
    "Skeleton"      :get_The_levelUp_Guide_For_Skeletons("Skeleton")
}


export function census_LookUp(string){
	return census[string];
}

export function get_The_LevelUp_Guide(string){
    return levelUp_Guides[string];
}

