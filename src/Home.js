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
                    title="Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling Headphones & Alexa Voice Control – (Black)"
                    price={100.96}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/3100PYQXsVL._AC_US240_FMwebp_QL65_.jpg"
                />
                 <Product 
                    id="1263454"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={162.45}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41MxN-0lMOL._AC_US240_FMwebp_QL65_.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                    id="1245434"
                    title="Boy's Plain Regular fit Cotton Shirt"
                    price={50.6}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/A1-nNRaE5gL._AC_UL480_FMwebp_QL65_.jpg"
                />
                 <Product 
                    id="123646344"
                    title="Pantaloons Junior
                    Boy's Regular Fit Shirt"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/818-F1grwfL._AC_UL480_FMwebp_QL65_.jpg"
                />
                 <Product 
                    id="123583534"
                    title="Pantaloons Junior
                    Boy's Regular Fit Shirt"
                    price={85.13}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/A1R69mTikUL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            
            <div className="home_row">
                <Product 
                    id="123583534"
                    title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    price={896.15}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY327_FMwebp_QL65_.jpg"
                />
                
            </div>
        </div>
    )
}

export default Home
