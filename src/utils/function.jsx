export const getMinimumSellingPrice = (saltFormsJson, form, strength, packaging) => {
     const packagingData = saltFormsJson?.[form]?.[strength]?.[packaging];
   
     if (!packagingData) {
       return null;
     }
   
     let minPrice = null;
   
     for (const key in packagingData) {
       if (Array.isArray(packagingData[key])) {
         for (const priceData of packagingData[key]) {
           if (minPrice === null || priceData.selling_price < minPrice) {
             minPrice = priceData.selling_price;
           }
         }
       }
     }
   
     return minPrice;
};