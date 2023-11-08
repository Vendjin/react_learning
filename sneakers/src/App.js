import HeaderComponent from "./components/headerComponent/headerComponent";
import CarouselComponent from "./components/carouselComponent/carouselComponent";
import CardComponent from "./components/cardComponent/cardComponent";
import SearchBar from "./components/searchBar/searchBar";
import SideBarBasket from "./components/sideBarrBasket/sideBarBasket";

function App() {

    return (
        <div className='wrapperRoot'>
            <SideBarBasket/>
            <HeaderComponent />
            <div className='content'>
                <CarouselComponent />
                <div className='subHeaderBlock'>
                    <h1>Все кроссовки</h1>
                    <SearchBar/>
                </div>
                <div className="sneakersWrap">
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </div>

            </div>
        </div>
    );
}

export default App;
