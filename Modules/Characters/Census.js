import get_Race_From_String_From_Elemental_Class from "./Playable Characters/Elementals.js"


let census = {
    "Salamander"	:get_Race_From_String_From_Elemental_Class("Salamander"),
    "Siren"         :get_Race_From_String_From_Elemental_Class("Siren")
}


export default function census_LookUp(string){
	return census[string];
}

