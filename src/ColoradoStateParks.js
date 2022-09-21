import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, elevation, wildlife} from "./parks/RockyMountain";
function ColoradoStateParks() {
  howManyParks(); 
  elevation()
  wildlife()
  console.log(trees)

  return <h1>Colorado State Parks!</h1>;
}
export default ColoradoStateParks;
