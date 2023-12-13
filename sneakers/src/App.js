import React, { useState } from 'react';
import Card from "./components/Card/Card";
import CarouselComponent from "./components/carouselComponent/carouselComponent";
import HeaderComponent from "./components/headerComponent/headerComponent";
import SearchBar from "./components/searchBar/searchBar";
import SideBarBasket from "./components/sideBarrBasket/sideBarBasket";

const arr = [
    {
        name: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: '12999'
    },
    {
        name: 'Мужские Кроссовки Nike Air Max 270',
        price: '8499'
    },
    {
        name: 'Кроссовки Puma X Aka Boku Future Rider',
        price: '8999'
    },
    {
        name: 'Мужские Кроссовки Jordan Air Jordan 11',
        price: '10799'
    }
]

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
                    {arr.map((item, index) =>
                        <Card name={item.name} price={item.price} key={index} />
                    )}
                </div>

            </div>
        </div>
    );
}

export default App;
