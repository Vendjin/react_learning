import React, { useState } from 'react';
import Card from "./components/Card/Card";
import CarouselComponent from "./components/carouselComponent/carouselComponent";
import HeaderComponent from "./components/headerComponent/headerComponent";
import SearchBar from "./components/searchBar/searchBar";
import SideBarBasket from "./components/sideBarrBasket/sideBarBasket";
import { homePageArr } from './mock/homePageMock';

function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='wrapperRoot'>
            <SideBarBasket isOpen={isOpen} setIsOpen={setIsOpen} />
            <HeaderComponent isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='content'>
                <CarouselComponent />
                <div className='subHeaderBlock'>
                    <h1>Все кроссовки</h1>
                    <SearchBar />
                </div>
                <div className="sneakersWrap">
                    {homePageArr.map((item, index) =>
                        <Card name={item.name} price={item.price} image={item.image} key={index} />
                    )}
                </div>

            </div>
        </div>
    );
}

export default App;
