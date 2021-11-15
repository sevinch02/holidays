import '../index.css';


const ViewCountry = () => {
    return (
        <div className="container viewing">
            <div className="view-card">
                <img className="view-image" src="/public/img/cairo.jpg" alt=""/> 
                <div className="view-texts">
                    <h2 className="view-text">Borders: Afghanistan, Tajikistan, Turkmenistan, Kazahstan, Kirgizistan</h2>
                    <h2 className="view-text">Capital: Tashkent</h2>
                    <h2 className="view-text">Population: 250000</h2>
                </div>
            </div>
        </div>
    )
}

export default ViewCountry;