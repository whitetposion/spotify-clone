import { useState } from "react"

import FSPCombinator from "./FSPcombinator/FSPcombinator"
import MinPrice from "./MinimumPrice/MinPrice"
import SaltLabelling from "./SaltLabelling/SaltLabelling"
import { getMinimumSellingPrice } from "../../utils/function"

import "./SaltCard.scss"


const SaltCard = ({data}) => {
    const {
      salt,
      most_common,
      available_forms, 
      salt_forms_json
    } = data

    const [stateManager, setStateManager ] = useState({
      Form: most_common.Form, 
      Strength:most_common.Strength,
      Packaging:most_common.Packing
    })
    const onPress = (name, value) =>{
      if(name == "Form"){
        const newForm = value;
            const newStrength = Object.keys(salt_forms_json[newForm])[0];
            const newPackaging = Object.keys(salt_forms_json[newForm][newStrength])[0];

            setStateManager({
                Form: newForm,
                Strength: newStrength,
                Packaging: newPackaging
            });
      } else if (name === "Strength") {
          const newStrength = value;
          const newPackaging = Object.keys(salt_forms_json[stateManager.Form][newStrength])[0];

          setStateManager((prevState) => ({
              ...prevState,
              Strength: newStrength,
              Packaging: newPackaging
          }));
      } else if (name === "Packaging") {
          setStateManager((prevState) => ({
              ...prevState,
              Packaging: value
          }));
      }
    } 
    return (
      <div className="salt-card">
        <FSPCombinator 
          form={available_forms}
          saltfsp={salt_forms_json}
          stateManager={stateManager}
          onPress={onPress}
        />
        <SaltLabelling 
          salt={salt}
          stateManager={stateManager}
          />
        <MinPrice 
          minPrice={
            getMinimumSellingPrice(
              salt_forms_json,
              stateManager.Form,
              stateManager.Strength, 
              stateManager.Packaging
            )}
        />
      </div>
    )
}

export default SaltCard
