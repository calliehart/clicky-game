import React from "react";

function ImageCard(props)  {

        return (
            <div className="card text-center imageSquare">
                <div className="card-body">
                    <img className="characterImage" src={props.image} alt="cannot find" onClick={() => props.onClick()}></img>
                </div>
            </div>
        );
}

export default ImageCard;
