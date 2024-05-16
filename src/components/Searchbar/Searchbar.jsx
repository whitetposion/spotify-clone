import { ArrowLeft, Search } from 'lucide-react'
import "./Searchbar.scss"
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
const Searchbar = ({
     value,
     setValue,
     onSearch,
     isRoute,
}) => {

     const navigate = useNavigate()
     const refInput = useRef();

     const handleSearch = () => {
          if (value) {
               navigate(`/${value}`);
          }
     };

     const handleKeyPress = (e) => {
          if (e.keyCode === 13) {
               handleSearch();
          }
     };

    useEffect(() => {
          const input = refInput.current;
          input.addEventListener('keypress', handleKeyPress);
          return () => {
               input.removeEventListener('keypress', handleKeyPress);
          };
     }, [value]);
  return (
    <div className='search-bar-container'>
          <div className='search-bar'>
               {isRoute ? <ArrowLeft onClick={()=>navigate(-1)} className = "icon" size={20}/> : <Search className="icon" size={20}/>}
               <input
                    ref={refInput}
                    placeholder = "Type your medicine name here"
                    className="search-bar-input"
                    value={value} 
                    onChange={e=> setValue(e.target.value)}
               />
               <button
                    onClick={handleSearch}
                    className='search-bar-btn'
               >
                    Search
               </button>
          </div>
    </div>
  )
}

export default Searchbar
