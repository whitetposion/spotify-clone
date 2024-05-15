import "./SaltLabelling.scss"
const SaltLabelling = ({salt, stateManager}) => {
  const {Form, Strength, Packaging} = stateManager
  return (
    <div className='salt-label'>
     <div>
          {salt}
          <span>{Form} | {Strength} | {Packaging}</span>
          
     </div>

    </div>
  )
}

export default SaltLabelling
