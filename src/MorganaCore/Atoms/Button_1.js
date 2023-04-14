import React from 'react';

// Elementele din folderul Atoms sunt elemente pe care le refolosesti intre widgets
// Pentru site-ul curent, nu mai este nevoie sa definesti alt element in Atoms, ajunge doar Button_1.js

export default function Button_1 ({
    textParam,
    bgColorParam,
    paddingParam,
    fontSizeParam
})
{
    let text = textParam ? textParam : 'default'
    
    return (
        <button
            style={{
                backgroundColor: bgColorParam ? bgColorParam : 'red' ,
                padding: paddingParam ? paddingParam : '0px 0px',
                fontSize: fontSizeParam ? fontSizeParam : '3rem'
            }}
        >
            {text}
        </button>
    )
}