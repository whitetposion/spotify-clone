import "./Values.scss"

const Values = ({
     name,
     value,
     isActive,
     isAvailable,
     onPress
}) => {
  return (
     <button 
          onClick={()=>onPress(name,value)} 
          className={`med-values ${isActive ? "active": "inActive"} ${isAvailable? "available": "unavailable"}`}
     >
          {value}
     </button>
  )
}

export default Values
