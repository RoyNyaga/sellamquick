import React, {useEffect} from "react";
import Routing from "./routes/routing";


export default function App(){

  useEffect(() => {
    console.log("ap has been called")
  })

  return(
    <div>
      <Routing/>
    </div>
    )
}
