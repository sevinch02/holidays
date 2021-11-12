import { Radio, Input, Space } from 'antd';
import { useState, useEffect } from 'react';
import '../CountriesCatalog/CountriesCatalog.css'
import { Link } from 'react-router-dom';

const ALL_MOVIES_API = `https://restcountries.com/v3.1/all`;
const SEARCH_API = `https://restcountries.com/v3.1/name`;

const CountriesCatalog = () => {

    const [continent, setContinent] = useState(0);
    const [country, setCountry] = useState([])

    useEffect(() => {
        fetch(ALL_MOVIES_API).then(res => res.json()).then( data => {
            console.log(data)
            setCountry(data);
        });
    }, []);

    const mappedContinents = country.map( el => {
        return (
            <div className="wrapper">
            <div  className="cols" key={el.cca2}>
                      <Link to={`/country/${el.cca2}`} className="col" >
                          <div className="container">
                              <div className="front" style={{backgroundImage: `url(${el.flags.png})`}}>
                                  <div className="inner">
                                      <p>{el.name.common}</p>
                        <span>{el.capital}</span>
                                  </div>
                              </div>
                              <div className="back">
                                  <div className="inner">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                                  </div>
                              </div>
                          </div>
                      </Link>
                          </div>
                      </div>
               
        )
    })

    const onChange = (e) => {
        console.log(e.target.value);
        setContinent(e.target.value);
    }

    const handleSearch = (event) => {
        if(event.target.value.length > 2) {
            fetch(SEARCH_API + `/${event.target.value}`).then(res => res.json()).then( data => {
                console.log(data);
                setCountry(data);
            });
        }
    };

    return (
        <div className="countriesCatalog">
            <h1 className="catalogTitle">
                Country's Catalog
            </h1>
            <div className="countriesWrapper">
            <aside className="catalogAside">
                <input type="text" className="catalogSearch" placeholder="Search" onChange={handleSearch}/>
                <div className="catalogContinents">
                    <h3 className="catalogConTit">Continent names</h3>
                    <Radio.Group onChange={onChange} value={continent}>
        <Space direction="vertical">
          <Radio value={1}>Asia</Radio>
          <Radio value={2}>Europe</Radio>
          <Radio value={3}>Antarctica</Radio>
          <Radio value={4}>North America</Radio>
          <Radio value={5}>South America</Radio>
          <Radio value={6}>Australia</Radio>
          <Radio value={7}>Africa</Radio>
        </Space>
      </Radio.Group>
      <button type="submit" className="submit-button">Submit</button>
                </div>
            </aside>
           <div className='countries'>
                {mappedContinents}
             </div>
            
            </div>

        </div>
    )
};

export default CountriesCatalog;