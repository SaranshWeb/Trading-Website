import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='images/largestBroker.svg'/>
                </div>
                <div className='col-6'>
                    <h1 className='mt-5'>  Empowering Your Trades with Every Click .</h1>
                    {/* <p> 2+ million clients contribute to over 15% of all retail order volumes in india daily by trading and investing in: </p> */}
                    <div className='row mt-5'>
                        <div className='col-6 '>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivates</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li> Stocks and IPOS</li>
                                <li> Direct mutual funds</li>
                                <li> Brand and Govt. Securities</li>
                            </ul>
                        </div>
                        <div>
                            <img style={{width:"90%"}}className='mt-5' src='images/pressLogos.png'/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Awards ;