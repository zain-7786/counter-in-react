import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {library, counter} from '@fortawesome/fontawesome-svg-core';
import {faPlusCircle, faShoppingCart, faSync, faRecycle} from '@fortawesome/free-solid-svg-icons';
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Item from './components/Item';

library.add(faPlusCircle);
library.add(faMinusCircle);
library.add(faTrash);
library.add(faShoppingCart);
library.add(faSync);
library.add(faRecycle);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      itemsCount: 0,
      counters:[{ id: 1, value: 0 },
                { id: 2, value: 0 },
                { id: 3, value: 0 },
                { id: 4, value: 0 }
              ]
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.remove = this.remove.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.updateItemsCart = this.updateItemsCart.bind(this);
    this.recyleItems = this.recyleItems.bind(this);
  }
 
  increment(id){
    const itemIndex = this.state.counters.findIndex(item => item.id === id )
    let newArray = [...this.state.counters]
    newArray[itemIndex] = {...newArray[itemIndex], value: newArray[itemIndex].value + 1}
    this.setState({
      counters: newArray,
      });

    this.updateItemsCart();
    //console.log("this is increment method"+{id:this.state.id});
    //console.log(this.setState({value:this.state.value + 1}));
  }
  decrement(id){
    const itemIndex = this.state.counters.findIndex(item => item.id === id )
    let newArray = [...this.state.counters]
    if(newArray[itemIndex].value > 0){
      newArray[itemIndex] = {...newArray[itemIndex], value: newArray[itemIndex].value - 1}
    }else{
      newArray[itemIndex].value = 0;
    }
    this.setState({
      counters: newArray,
    });
    
    this.updateItemsCart();
    //console.log("this is decrement method"+{id:this.state.id});
    //this.setState({value:this.state.value - 1});
  }
  remove(id){
    const newCounters = this.state.counters.filter(item => item.id !== id);
    this.setState({
      counters: newCounters
    });
  }
  refreshPage() {
    window.location.reload(false);
  }
  recyleItems(){
    const counters = this.state.counters;
    if(counters.map(item => 0)){
      window.location.reload(false);
    }
  }
  updateItemsCart(){
    /*const newCounters = this.state.counters.filter(item => item.value > 0)
    this.setState({
      counters: newCounters
    })*/
    const counters = this.state.counters;
    var c = 0;
    counters.map(item => {
        if(item.value > 0){
          c = c+1;
        }
    })
    this.setState({itemsCount: c})
    /*const counters = this.state.counters;
    let itemsCount = this.state.itemsCount; 
    counters.map(item =>{
      if(item.value != 0){
        this.setState({itemsCount: this.state.itemsCount + 1})
      }
      else{
        itemsCount = 0;
      }
    })*/
  }
  render(){
    return (
      <div>
        <nav className='navbar navbar-light bg-light'>
          <div class='navbar-brand fa-lg'>
            <FontAwesomeIcon icon='shopping-cart'/>
    <span className='badge badge-pill badge-info m-2' >{this.state.itemsCount}</span>items
          </div>
        </nav>
        <div className='container my-2'>
          <button onClick={() => window.location.reload(false)} className="btn btn-success my-2"><FontAwesomeIcon icon="sync"/></button>
          <button disabled={this.state.counters  ? false:true} onClick={this.recyleItems} className="btn btn-info my-2 mx-3"><FontAwesomeIcon icon="recycle"/></button>

          <Item counters={this.state.counters} increment={this.increment} decrement={this.decrement} remove={this.remove}/><br/>
         
        </div> 
      </div>
    );
  }
  
}
export default App;
