const SALT_URL = import.meta.env.VITE_REACT_APP_SALT_URL

export const getSalts = async (saltName) =>{
     try{
          const reponse = await fetch(`${SALT_URL}q=${saltName}&pharmacyIds=1,2,3`)
          if(!reponse) return null
          const saltData = await reponse.json()
          return saltData.data.saltSuggestions
     }catch(error){
          console.log(error)
     }
}