import { useState } from 'react'
import Values from '../Values/Values'
import "./KeyValues.scss"
const KeyValues = ({
     onPress
}) => {
     let name = "Packaging"
     let values = ["100mg", "50mg", "100mg", "150mg", "400mg"]
     const [hide, setHide] = useState(false)
  return (
    <div className='fsp-container'>
          <div className='title-fsp'>{name}: </div>
          <div className='container'>
               {values.filter((_, index) =>  
                    index < (hide ? values.length : 4)
               ).map((value, index)=>{
                    return (
                    <Values
                         key={index}
                         name={name}
                         value={value}
                         isActive={false}
                         isAvailable={true}
                         onPress={onPress}
                    />
                    )
               })}
          </div>
          {values.length > 4 && (
               <div className="more-hide" onClick={()=> setHide(!hide)}>
                    {!hide ? "more..": "hide.."}
               </div>
          )}
    </div>
  )
}

export default KeyValues
