import React from 'react';

function Custompoints({img,body}) {
    return (
        <div>
            <div className="row">
                <div className="textimg col-md-4 px-4">
                    <img src={img} height={200} width={300}></img>

                </div>
                <div className="textwrap col-md-8">
                    <p>{body}</p>

                </div>
            </div>
            
        </div>
    );
}

export default Custompoints;