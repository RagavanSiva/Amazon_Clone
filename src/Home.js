import React from 'react'
import  "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg" alt=""/>
        
            <div className="home_row">
                <Product 
                    id="1234"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41MxN-0lMOL._AC_US240_FMwebp_QL65_.jpg"
                />
                 <Product 
                    id="1263454"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41MxN-0lMOL._AC_US240_FMwebp_QL65_.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                    id="1245434"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41MxN-0lMOL._AC_US240_FMwebp_QL65_.jpg"
                />
                 <Product 
                    id="123646344"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41MxN-0lMOL._AC_US240_FMwebp_QL65_.jpg"
                />
                 <Product 
                    id="123583534"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41MxN-0lMOL._AC_US240_FMwebp_QL65_.jpg"
                />
            </div>
            
            <div className="home_row">
                <Product 
                    id="123583534"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41MxN-0lMOL._AC_US240_FMwebp_QL65_.jpg"
                />
                
            </div>
        </div>
    )
}

export default Home
