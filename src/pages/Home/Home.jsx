import { useEffect, useState } from "react"
import Searchbar from "../../components/Searchbar/Searchbar"
import "./Home.scss"
import Separater from "../../components/Seperater/Seperater"
import { useParams } from "react-router-dom"
import LoadingScreen from "../../components/Loader/Loader"
import SaltCard from "../../components/SaltCard/SaltCard"


const Home = () => {
  const params = useParams()
  const [search , setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  useEffect(()=> {
    if(params.saltName) setSearch(params.saltName)
    setLoading(false)
  },[params])
  return (
    <div className="home">
      <Searchbar value={search} setValue={setSearch} isRoute={params?.saltName ? true : false}/>
      <Separater expand = {"100%"}/>
      {search === "" ?
        <div className="no-salt-screen">“ Find medicines with amazing discount “</div>
        :
        loading ? <LoadingScreen/> :
        <div className="no-salt-screen">No exits</div>
      }
      <SaltCard/>
    </div>
  )
}

export default Home
