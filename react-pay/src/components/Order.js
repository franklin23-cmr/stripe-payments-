import React, { useEffect, useState } from 'react' 
import QRCode from 'qrcode.react';
function Order() {
    const domain = 'http://localhost:3000'
  
    return (
        <div>
            <QRCode
                value={`${domain}/checkout`}
                size={350}
                includeMargin={true}
            />   
        </div> 
    )
}

export default Order
