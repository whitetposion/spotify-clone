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

const countRenderLength = (arr) => {
      let totalLength = 0;
      let index = 0;
   
      while (index < arr.length) {
        let currentString = arr[index];
        let currentLength = currentString.length;
    
        if (currentLength >= 14 && currentLength <= 14 && (index + 1 < arr.length && arr[index + 1].length >= 10)) {
          currentLength = 20;
        } else {
          currentLength += 2;
        }
    
        if (totalLength + currentLength > 40 ) {
          break;
        }
    
        totalLength += currentLength;
        index++;
      }
    
      return index;
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

     const getValues = (key,value) => {
        switch (key) {
          case 'Form':
            return saltfsp[value];
          case 'Strength':
            return saltfsp[stateManager.Form][value];
          case 'Packaging':
            return saltfsp[stateManager.Form][stateManager.Strength][value];
          default:
            return [];
        }
     };
     return (
     <div className='fsp-container'>
               <div className='title-fsp'>{name}: </div>
               <div className='container'>
                    {values.filter((_, index) => index < (hide ? values?.length : countRenderLength(values)))
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
