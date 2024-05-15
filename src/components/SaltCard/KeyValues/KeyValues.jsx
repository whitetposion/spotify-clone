import { useState } from 'react'
import Values from '../Values/Values'
import "./KeyValues.scss"

const hasNonNullValues = (obj) => {
     for (const key in obj) {
       if (obj[key] !== null && typeof obj[key] === 'object') {
         if (hasNonNullValues(obj[key])) {
           return true;
         }
       } else if (obj[key] !== null) {
         return true;
       }
     }
     return false;
};
 
const KeyValues = ({
     name,
     values,
     active,
     onPress,
     stateManager,
     saltfsp
}) => {
     const [hide, setHide] = useState(false)
     const getValues = (key) => {
          switch (key) {
            case 'Form':
              return saltfsp;
            case 'Strength':
              return saltfsp[stateManager.Form];
            case 'Packaging':
              return saltfsp[stateManager.Form][stateManager.Strength];
            default:
              return [];
          }
     };
     return (
     <div className='fsp-container'>
               <div className='title-fsp'>{name}: </div>
               <div className='container'>
                    {values.filter((_, index) => index < (hide ? values?.length : 4))
                    .map((value, index)=>{
                         let avaibility = hasNonNullValues(getValues(name, value))
                         return (
                         <Values
                              key={index}
                              name={name}
                              value={value}
                              isActive={value === active}
                              isAvailable={avaibility}
                              onPress={onPress}
                         />
                         )
                    })}
                    {values.length > 4 && (
                    <div className="more-hide" onClick={()=> setHide(!hide)}>
                         {!hide ? "more..": "hide.."}
                    </div>
               )}
               </div>
               
     </div>
     )
}

export default KeyValues
