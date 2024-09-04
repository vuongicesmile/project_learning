import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'antd';
// import 'antd/dist/antd.css';

function ExampleComponent() {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/example-data', {
            method: 'GET',
          })
            .then(async (res) => {
              if (res.ok) {
                return res.json();
              } else {
                let result = await res.json();
                callBackError(result);
                throw new Error(`Error status: ${res.status}`);
              }
            })
            .then((res) => console.log(res))
            .catch((err) => {});
        axios.get('/example-data')
            .then(response => {
                setMessage(response.data.message);
                setData(response.data.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>{message} </h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}
                     <Button type="primary"> Button</Button>
                     <hr></hr>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}

export default ExampleComponent;

if (document.getElementById('example')) {
    ReactDOM.render(<ExampleComponent />, document.getElementById('example'));
}
