import { Data } from "../../assets/data"
import KeyValues from "./KeyValues/KeyValues"

import "./SaltCard.scss"
import SaltLabelling from "./SaltLabelling/SaltLabelling"
const FSPCombinator = () =>{
  return (
    <div className="fsp-combine" >
      <KeyValues/>
      <KeyValues/>
      <KeyValues/>
    </div>
    
  )
}
const SaltCard = () => {
     
    return (
      <div className="salt-card">
        <FSPCombinator/>
        <SaltLabelling/>
        <div>oijoij</div>
      </div>
    )
}

export default SaltCard
