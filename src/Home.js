import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGentlemen/GENTL_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB404268992_.jpg" />
          <div className="home__row">


            <Product 
            id="1221"
            title="The lean startup: How constant Innovation creates"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX342_SY445_QL70_ML2_.jpg"
            />
            <Product 
            id="1221"
            title="The lean startup: How constant Innovation creates"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX342_SY445_QL70_ML2_.jpg"
            />
          </div>
          <div className="home__row">
          <Product 
            id="1221"
            title="The lean startup: How constant Innovation creates"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX342_SY445_QL70_ML2_.jpg"
            />
            <Product 
            id="1221"
            title="The lean startup: How constant Innovation creates"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX342_SY445_QL70_ML2_.jpg"
            />
            <Product 
            id="1221"
            title="The lean startup: How constant Innovation creates"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX342_SY445_QL70_ML2_.jpg"
            />
          </div>
          <div>
          <Product 
            id="1221"
            title="The lean startup: How constant Innovation creates"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX342_SY445_QL70_ML2_.jpg"
            />
          </div>
        </div>
    )
}

export default Home
