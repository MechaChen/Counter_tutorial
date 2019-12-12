import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    const minus = () => {
        setCount(count - 1);
    }

    return (
        <div className="container">
            <button className="btn btn-primary add-btn" onClick={add}>+</button>
            <span className="counter">{count}</span>
            <button className="btn btn-success minus-btn" onClick={minus}>-</button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));


