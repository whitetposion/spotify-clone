import "./MinPrice.scss"
const MinPrice = () => {
     let price = 50
     return (
     <div className="med-result-price">
          {price ? 
               <div className="price">
                    From&#8377;<span>{price}</span>

               </div>
               :
               <div className="no-store">
                    No stores selling this <br/> product near you
               </div>
          }
     </div>
     )
}

export default MinPrice
