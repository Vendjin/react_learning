import HeaderComponent from "./components/headerComponent/headerComponent";
import CarouselComponent from "./components/carouselComponent/carouselComponent";
import CardComponent from "./components/cardComponent/cardComponent";
import SearchBar from "./components/seacrhBar/searchBar";

function App() {

    return (
        <div className='wrapperRoot'>
            <HeaderComponent />
            <div className='content'>
                <CarouselComponent />
                <div className='subHeaderBlock'>
                    <h1>Все кросовки</h1>
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
