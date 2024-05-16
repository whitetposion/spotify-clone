import "./MinPrice.scss"
const MinPrice = ({minPrice}) => {

     return (
     <div className="med-result-price">
          {minPrice ? 
               <div className="price">
                    From&#8377;<span>{minPrice}</span>

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
