import React from "react";  
import ReactDOM from "react-dom/client";
const heading1 = React.createElement("h1",{ id : "title" ,},"namaste react 1");
const heading2 = React.createElement("h2", {} , "namstey react 2");
const heading3 = React.createElement("h3",{}, "namaste react 3");
const heading4= React.createElement("h1" , {} , "namstey react4");

const container = React.createElement("div", {id : "container"} , [heading1, heading2 ,heading3,heading4]);

/**
 *        Header 
 *  - Logo(Title)
 *  -Nav Iterms (Right Side)
 *  - Cart        
 * 
 *          Body 
 * -Search bar 
 * -RestraurantList (many cards)
 *         -Image
 *         -Name
 *         -Rating
 *         -Cusines
 * 
 *          Footer
 * -Links
 * -Copyright
 *    
 */










 const Title = () => (
   <a href="/">
    <img 
   className="logo"
   alt="logo"
   src="https://tse1.mm.bing.net/th?id=OIP._nsBEPa9cV8OUb_96KNxZAHaHa&pid=Api&P=0&h=180"
    //   
 />                                                                                                   
   
    </a>      
                                        
                                                                            
 );

                                                                                                                                                                                                         //  const HeaderComponent = () => {
                                                                                                                                                                                                        //     return (
                                                                                                                                                                                                        //         <div>
                                                                                                                                                                                                        //             <h2> Namaste React functional component</h2>
                                                                                                                                                                                                        //             <h2> this is a tag h2</h2>
                                                                                                                                                                                                        //         </div>
                                                                                                                                                                                                        //     );

                                                                                                                                                                                                        //  };

                                                                                                                                                                                                        //  var xyz = 10;  
const Header = () => {
    return (
        <div className="header">
           
                                                                                                                                                                                          {/* {xyz}  whenever we write jsx  we can write any piece of javascript code in { } */}
            <Title/>
             <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
             </ul>                                                                                                                                                                              {/* <h2> Namaste React functional component</h2> */}
                   </div>                                                                                                                                                                        {/* <h2> this is a tag h2</h2>         */}
        </div>
    );

 };
 const config = [
    {

    }
 ]

 const restrauList = [
            {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "319936",
            "name": "La Pino'z Pizza",
            "uuid": "2f19fa25-05fe-45f2-8cb9-678556f0eb62",
            "city": "35",
            "area": "Model Town",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "lfmlerdw9cd7bal7tx2y",
            "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 4.599999904632568,
            "slugs": {
              "restaurant": "la-pino'z-pizza-model-town-model-town",
              "city": "ludhiana"
            },
            "cityState": "35",
            "address": "Ground floor, Shop number 7, Goel market, Model Town , Ludhiana",
            "locality": "Goel market",
            "parentId": 4961,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7213417~p=1~eid=00000189-5cf8-c22c-0f17-fff400a1013c~srvts=1689481953836",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "4.5 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "15% OFF",
              "subHeader": "UPTO ₹80",
              "discountTag": "",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "319936",
              "deliveryTime": 29,
              "minDeliveryTime": 29,
              "maxDeliveryTime": 29,
              "lastMileTravel": 4.599999904632568,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.8",
            "totalRatings": 5000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "327288",
            "name": "New Delhi Chole Bhature",
            "uuid": "fe865737-de48-449d-a0bb-b5be9f007574",
            "city": "35",
            "area": "Industrial Area",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "deix4b5lopvrhgosd4wf",
            "cuisines": [
              "North Indian"
            ],
            "tags": [
              
            ],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 45,
            "minDeliveryTime": 45,
            "maxDeliveryTime": 45,
            "slaString": "45 MINS",
            "lastMileTravel": 2.799999952316284,
            "slugs": {
              "restaurant": "new-delhi-chole-bhature-gill-road-gill-road",
              "city": "ludhiana"
            },
            "cityState": "35",
            "address": "Shop 33, Gill Road, Kartar Singh Sarabha Market, Gill Road, Industrial Area, Ludhiana",
            "locality": "Gill Road",
            "parentId": 11549,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 1400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.7 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "327288",
              "deliveryTime": 45,
              "minDeliveryTime": 45,
              "maxDeliveryTime": 45,
              "lastMileTravel": 2.799999952316284,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "129854",
            "name": "K Chawla Ice Cream & Sweets",
            "uuid": "497a1038-03dd-45b8-b39a-fc056506100a",
            "city": "35",
            "area": "Industrial Area",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "ui0avqud3o8i4jvhnrhl",
            "cuisines": [
              "Ice Cream",
              "Italian",
              "Snacks",
              "Continental",
              "Beverages",
              "Sweets"
            ],
            "tags": [
              
            ],
            "costForTwo": 23000,
            "costForTwoString": "₹230 FOR TWO",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "slaString": "22 MINS",
            "lastMileTravel": 2.4000000953674316,
            "slugs": {
              "restaurant": "k-chawla-ice-cream-sweets-na-koorkenchery",
              "city": "ludhiana"
            },
            "cityState": "35",
            "address": "17, Gill Road, Opposite Janta Nagar Chowk, Ludhiana",
            "locality": "Gill Road",
            "parentId": 112659,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 1400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.4 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "129854",
              "deliveryTime": 22,
              "minDeliveryTime": 22,
              "maxDeliveryTime": 22,
              "lastMileTravel": 2.4000000953674316,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "111814",
            "name": "Barista Coffee",
            "uuid": "9a0747d9-9b1c-44fa-8014-8513e04984c9",
            "city": "35",
            "area": "BRS Nagar",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "02731f6bd73f982bc74a522edd9c1b01",
            "cuisines": [
              "Beverages",
              "Snacks",
              "Desserts"
            ],
            "tags": [
              
            ],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "slaString": "21 MINS",
            "lastMileTravel": 3.799999952316284,
            "slugs": {
              "restaurant": "barista-model-town-model-town",
              "city": "ludhiana"
            },
            "cityState": "35",
            "address": "224 - L, Model Town Ludhiana",
            "locality": "BRS Nagar",
            "parentId": 2359,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 1400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7346024~p=4~eid=00000189-5cf8-c22c-0f17-fff500a10463~srvts=1689481953836",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "3.7 kms",
            "hasSurge": false,
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120",
              "discountTag": "",
              "headerTypeV2": 0
            },
            "sla": {
              "restaurantId": "111814",
              "deliveryTime": 21,
              "minDeliveryTime": 21,
              "maxDeliveryTime": 21,
              "lastMileTravel": 3.799999952316284,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.6",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        {
            "type": "restaurant",
            "data": {
              "type": "F",
              "id": "111814",
              "name": "Barista Coffee",
              "uuid": "9a0747d9-9b1c-44fa-8014-8513e04984c9",
              "city": "35",
              "area": "BRS Nagar",
              "totalRatingsString": "100+ ratings",
              "cloudinaryImageId": "02731f6bd73f982bc74a522edd9c1b01",
              "cuisines": [
                "Beverages",
                "Snacks",
                "Desserts"
              ],
              "tags": [
                
              ],
              "costForTwo": 25000,
              "costForTwoString": "₹250 FOR TWO",
              "deliveryTime": 21,
              "minDeliveryTime": 21,
              "maxDeliveryTime": 21,
              "slaString": "21 MINS",
              "lastMileTravel": 3.799999952316284,
              "slugs": {
                "restaurant": "barista-model-town-model-town",
                "city": "ludhiana"
              },
              "cityState": "35",
              "address": "224 - L, Model Town Ludhiana",
              "locality": "BRS Nagar",
              "parentId": 2359,
              "unserviceable": false,
              "veg": false,
              "select": false,
              "favorite": false,
              "tradeCampaignHeaders": [
                
              ],
              "ribbon": [
                {
                  "type": "PROMOTED"
                }
              ],
              "chain": [
                
              ],
              "feeDetails": {
                "fees": [
                  {
                    "name": "distance",
                    "fee": 1400,
                    "message": ""
                  },
                  {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                  },
                  {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                  }
                ],
                "totalFees": 1400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1400",
                "icon": ""
              },
              "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
              },
              "longDistanceEnabled": 0,
              "rainMode": "NONE",
              "thirdPartyAddress": false,
              "thirdPartyVendor": "",
              "adTrackingID": "cid=7346024~p=4~eid=00000189-5cf8-c22c-0f17-fff500a10463~srvts=1689481953836",
              "badges": {
                "imageBased": [
                  
                ],
                "textBased": [
                  
                ],
                "textExtendedBadges": [
                  
                ]
              },
              "lastMileTravelString": "3.7 kms",
              "hasSurge": false,
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120",
                "discountTag": "",
                "headerTypeV2": 0
              },
              "sla": {
                "restaurantId": "111814",
                "deliveryTime": 21,
                "minDeliveryTime": 21,
                "maxDeliveryTime": 21,
                "lastMileTravel": 3.799999952316284,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
              },
              "promoted": true,
              "avgRating": "3.6",
              "totalRatings": 100,
              "new": false
            },
            "subtype": "basic"
          },
          {
            "type": "restaurant",
            "data": {
              "type": "F",
              "id": "129854",
              "name": "K Chawla Ice Cream & Sweets",
              "uuid": "497a1038-03dd-45b8-b39a-fc056506100a",
              "city": "35",
              "area": "Industrial Area",
              "totalRatingsString": "10000+ ratings",
              "cloudinaryImageId": "ui0avqud3o8i4jvhnrhl",
              "cuisines": [
                "Ice Cream",
                "Italian",
                "Snacks",
                "Continental",
                "Beverages",
                "Sweets"
              ],
              "tags": [
                
              ],
              "costForTwo": 23000,
              "costForTwoString": "₹230 FOR TWO",
              "deliveryTime": 22,
              "minDeliveryTime": 22,
              "maxDeliveryTime": 22,
              "slaString": "22 MINS",
              "lastMileTravel": 2.4000000953674316,
              "slugs": {
                "restaurant": "k-chawla-ice-cream-sweets-na-koorkenchery",
                "city": "ludhiana"
              },
              "cityState": "35",
              "address": "17, Gill Road, Opposite Janta Nagar Chowk, Ludhiana",
              "locality": "Gill Road",
              "parentId": 112659,
              "unserviceable": false,
              "veg": true,
              "select": false,
              "favorite": false,
              "tradeCampaignHeaders": [
                
              ],
              "chain": [
                
              ],
              "feeDetails": {
                "fees": [
                  {
                    "name": "distance",
                    "fee": 1400,
                    "message": ""
                  },
                  {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                  },
                  {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                  }
                ],
                "totalFees": 1400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "1400",
                "icon": ""
              },
              "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
              },
              "longDistanceEnabled": 0,
              "rainMode": "NONE",
              "thirdPartyAddress": false,
              "thirdPartyVendor": "",
              "adTrackingID": "",
              "badges": {
                "imageBased": [
                  
                ],
                "textBased": [
                  
                ],
                "textExtendedBadges": [
                  
                ]
              },
              "lastMileTravelString": "2.4 kms",
              "hasSurge": false,
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL",
                "headerTypeV2": 0
              },
              "sla": {
                "restaurantId": "129854",
                "deliveryTime": 22,
                "minDeliveryTime": 22,
                "maxDeliveryTime": 22,
                "lastMileTravel": 2.4000000953674316,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
              },
              "promoted": false,
              "avgRating": "4.2",
              "totalRatings": 10000,
              "new": false
            },
            "subtype": "basic"
          },
 ];
 

const RestrauntCard = ({
   name,
   cuisines,
   cloudinaryImageId,
   lastMileTravelString,
}) => {
  
     return (
         <div className= "card">
             <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
              cloudinaryImageId} />
             <h2>{ name}</h2>
             <h3> {cuisines.join(" ,")}</h3>
             <h4>{lastMileTravelString} minutes</h4>
         </div>
     ) ;
} ;

 const Body = () => {
    return (
     <div className="restaurant-list">
       {restrauList.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} key = {restaurant.data.id} />
      })}

     </div>  
    );
 };

 const Footer = () => {
    return (
      <h4> Footer</h4>  
    )
 }

 const AppLayout = () => {
  return (
    <React.Fragment>
    <Header/>
    <Body/>
    <Footer/>
    </React.Fragment>
  );
 };

const root = ReactDOM.createRoot(
   
    document.getElementById("root"));
                                                                                                                     // root.render(container); 
 
                                                                                                                          // root.render(heading);
    root.render(<AppLayout/>)






