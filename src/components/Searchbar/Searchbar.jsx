import { Search, StepBack } from 'lucide-react'
import "./Searchbar.scss"
const Searchbar = ({
     value,
     setValue,
     isRoute
}) => {
  return (
    <div className='search-bar-container'>
          <div className='search-bar'>
               {isRoute ? <StepBack  className = "icon" size={20}/> : <Search className="icon" size={20}/>}
               <input 
                    placeholder = "Type your medicine name here"
                    className="search-bar-input"
                    value={value} 
                    onChange={e=> setValue(e.target.value)}
               />
               <button 
                    className='search-bar-btn'
               >
                    Search
               </button>
          </div>
    </div>
  )
}

export default Searchbar
