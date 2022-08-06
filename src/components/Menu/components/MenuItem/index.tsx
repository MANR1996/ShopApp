import React from 'react';
import './index.css';

type MyProps = {
    item: string;
    key: number;
}

function MenuItem({ item, key }: MyProps) {

    return (
        <li className="MenuItem" key={key}>
            {item}
        </li>
    );
}

export default MenuItem;