import RestrauntCard from "./RestrauntCard";
import { restrauList } from "./constants";

const Body = () => {
    return (
     <div className="restaurant-list">
       {restrauList.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} key = {restaurant.data.id} />
      })}

     </div>  
    );
 };
 

 export default Body ;