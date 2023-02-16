import './comicsMore.scss';


const ComicsMore = () => {
    return (
        <div className='comics__more'>
            <img src="" alt="" className='comics__more_img'/>
            <div className="comics__more_info">
                <div className="comics__more_title">X-Men: Days of Future Past</div>
                <div className="comics__more_description">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</div>
                <div className="comics__more_pages">144 pages</div>
                <div className="comics__more_language">Language: en-us</div>
                <div className="comics__more_price">9.99$</div>
            </div>
            <a href="#" className="comics__more_back">Back to all</a>
        </div>
    )
}

export default ComicsMore;