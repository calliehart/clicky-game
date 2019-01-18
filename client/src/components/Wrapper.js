import React from "react";
import ImageCard from "./ImageCard.js";
import ImageData from "./ImageData.js";

class Wrapper extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            clickedImages: ImageData,
            score: 0,
            message: ""
        };
    }


    handleClickEvent = (i) => {
        let temp = this.state.clickedImages;
        let message;
        let score = this.state.score;
        if (this.state.clickedImages[i].clicked === 0){
            temp[i].clicked = 1;
            message = "Your guess is correct!";
            score = score + 1;
            temp = this.shuffleImages(temp);   
        } else {
            message = "Sorry, you have lost";
            score = 0;
            temp = this.resetGame(temp);
        }
        this.setState({clickedImages : temp, message: message, score: score});
    };

    shuffleImages = (array) => {
        
        for(var k = this.state.clickedImages.length - 1; k > 0; k--){
            let randomNum = Math.floor(Math.random() * k);
            var x = array[k];
            array[k] = array[randomNum];
            array[randomNum] = x;  
        }
        return array;
    }

    resetGame = (array) => {
        for(var j = 0; j < array.length; j++){
            array[j].clicked = 0;
        }
        return this.shuffleImages(array);
    }

    renderImg(i) {
        return(
            <ImageCard
                image={this.state.clickedImages[i].src}
                onClick={() => this.handleClickEvent(i)}
            />
        )
    }
    render(){
        return (
            <div className="row">
                <div className="col-12">
                    <div className="scoreboard">
                        <h2 className="messageText">{this.state.message}</h2>
                        <h4>Your score is {this.state.score}</h4>
                    </div>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <div className="board-row">
                                    {this.renderImg(0)}
                                    {this.renderImg(1)}
                                    {this.renderImg(2)}
                                    {this.renderImg(3)}
                            </div>
                            <div className="board-row">
                                    {this.renderImg(4)}
                                    {this.renderImg(5)}
                                    {this.renderImg(6)}
                                    {this.renderImg(7)}
                            </div>
                            <div className="board-row">
                                    {this.renderImg(8)}
                                    {this.renderImg(9)}
                                    {this.renderImg(10)}
                                    {this.renderImg(11)}
                            </div>
                        </div>
                    </div>
               </div>
           </div> 
        );
    }
}

export default Wrapper;