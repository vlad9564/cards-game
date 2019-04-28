import React from 'react';
import logo from './logo.svg';
import Card from './containers/card'
import * as DeckConstants from './utils/DeckConstants'
class App extends React.Component {

constructor(){
  super();

}

shuffle(){
  debugger;
}
  

render(){

  this.shuffle();
  return (
    <div className="App">
     <div>
       <Card my={DeckConstants.C2}> </Card>
     </div>
     <div >
      <Card my={DeckConstants.BACK } ></Card>
      <Card my={DeckConstants.BACK}></Card>
    </div>
    <div>
      <Card my={DeckConstants.C2}></Card>
      <Card my={DeckConstants.C2}></Card>
    </div>
    </div>
  );
}
}

export default App;
