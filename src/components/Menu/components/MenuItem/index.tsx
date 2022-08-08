import React from 'react';
import './index.css';

type MyProps = {
    item: string;
}

function MenuItem({ item }: MyProps) {

    return (
        <a href='/' className="menu-item">
            {item}
        </a>
    );
}

export default MenuItem;