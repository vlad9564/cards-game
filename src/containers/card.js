import React from 'react';
import Ace from '../cards/2C.png'
import Back from '../cards/back.png'

class Card extends React.Component{

constructor(state,props){
    super(state,props);
    debugger;
    this.test = this.test.bind(this);
    this.state = { 
         card : this.props.my,
        status : "back"
                     }
    
       
    
}

test(){
    debugger;
    if(this.state.status === "back"){
        this.setState({card: Ace , status : "front"});  
    }
    else{
        this.setState({card: Back , status : "back"});  
    }
    // alert("DA" );  
    

}

render(){

    
    return(
            <div draggable>
            <img onClick={this.test} src={this.state.card} style={{width: "3cm"}} ></img>
            </div>
   
    )
}

}

export default Card;