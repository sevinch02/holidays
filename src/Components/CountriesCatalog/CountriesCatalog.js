import { Radio, Input, Space } from 'antd';
import { useState } from 'react';

const CountriesCatalog = () => {

    const [continent, setContinent] = useState(0);

    const onChange = (e) => {
        console.log(e.target.value);
        setContinent(e.target.value);
    }

    return (
        <div className="countriesCatalog">
            <h1 className="catalogTitle">
                Country's Catalog
            </h1>
            <aside className="catalogAside">
                <input className="catalogSearch" />
                <div className="catalogContinents">
                    <h3 className="catalogConTit">Continent names</h3>
                    <Radio.Group onChange={onChange} value={continent}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4}>Option C</Radio>
        </Space>
      </Radio.Group>
                </div>
            </aside>

        </div>
    )
};

export default CountriesCatalog;