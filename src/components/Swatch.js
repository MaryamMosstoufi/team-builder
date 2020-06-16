import React from 'react';

export default function Swatch(props) {
    const { swatch } = props;
    if (!swatch) {
        return ('fetching swatch')
    }

    return (
        <div>
            <div style={{ backgroundColor: swatch.colorCode, color: 'transparent', marginTop: '20px' }}> Swatch </div>
            <div>{swatch.colorCode}</div>
            <div>{swatch.colorName}</div>
            <div>{swatch.colorFamily}</div>
        </div >
    )
}