import React from 'react';

function CustompointsLeft({img,body}) {
    return (
        <div>
            <div className="row">
            <div className="textwrap col-md-8">
                    <p>{body}</p>

                </div>
                <div className="textimg col-md-4">
                    <img src={img} height={200}></img>

                </div>
               
            </div>
            
        </div>
    );
}

export default CustompointsLeft;