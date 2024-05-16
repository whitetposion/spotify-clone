import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Searchbar from "../../components/Searchbar/Searchbar"
import Separater from "../../components/Seperater/Seperater"
import LoadingScreen from "../../components/Loader/Loader"
import SaltCard from "../../components/SaltCard/SaltCard"
import { getSalts } from "../../apis/getSalt"

import "./Home.scss"


const Home = () => {
  const params = useParams()
  const [search , setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [saltData, setSaltData] = useState(null)

  const onSearch = async( search) => {
    setLoading(true)
    setSaltData(await getSalts(search))
    setLoading(false)
  }
  useEffect(()=> {
    if(params.saltName) {
      setSearch(params.saltName)
      onSearch(params.saltName)
    }
  },[params])
  
  return (
    <div className="home scrollbar">
      <Searchbar 
        value={search} 
        setValue={setSearch} 
        onSearch={onSearch}
        isRoute={params?.saltName ? true : false}
      />
      <Separater expand={"100%"}/>
      {loading ? <LoadingScreen/> :
        saltData ?
        <div className="salt-container">
        {saltData.map((data, index)=>
          <SaltCard
            data={data}
            key={index}
          />
        )}
        </div> :
        !params?.saltName ?
        <div className="no-salt-screen">“ Find medicines with amazing discount “</div>
        :
        <div className="no-salt-screen">No exits</div>        
      }
      
    </div>
  )
}

export default Home
