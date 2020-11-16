import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">

      <div className="home__container">
        <img className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product
            id="2993223"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}/>
          <Product
            id="2094393"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}/>
        </div>
        <div className="home__row">
          <Product
               id="33333"
               title="Samsung LDFDUDKEE 49' Curved LED Gaming Monitor"
               price={199.99}
               image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466.jpg"
               rating={3}/>
          <Product
                 id="4444"
               title="Amazon Echo (3dr generation) | Smart speaker with Alexa, Charcoal Fabric"
               price={29.99}
               image="https://media.very.co.uk/i/very/P6LGT_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
               rating={5}/>
          <Product
               id="555555"
               title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128G) - Silver (4th Generation)"
               price={598.99}
               image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
               rating={4}/>
        </div>

        <div
          className="home__row">
          <Product
            id="2993223"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}/>
        </div>

      </div>
    </div>
  )
}

export default Home
