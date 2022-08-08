import React from 'react';
import './index.css';

type MyProps = {
    item: string;
    key: number;
}

function MenuItem({ item, key }: MyProps) {

    return (
        <a href='#' className="menu-item" key={key}>
            {item}
        </a>
    );
}

export default MenuItem;