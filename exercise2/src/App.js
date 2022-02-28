import Otsikko from './components/Otsikko'
import './App.css';
import Title from './components/Title'
import { useState } from 'react';
import ShoppingListItem from './components/ShoppingListItem';


function App() {
  const [ counterValue, setCounterValue ] = useState(0);
  const [ shoppinListItems, setShoppingListItems ] = useState([
    { 
      id: 1,
      name: "Coca-cola Zero", qty: 4,
      isChecked: false
    },
    { 
      id: 2,
      name: "Sipsi",
      qty: 1,
      isChecked: false
    },
    { 
      id: 3,
      name: "Dippi",
      qty: 9,
      isChecked: false
    },
    { 
      id: 4,
      name: "Suklaa",
      qty: 9,
      isChecked: false
    },
  
  ]);

  const handleItemCheckedToggle = (item) => {
    console.log("toggling statys");

    let newShoppingListItems = [...shoppinListItems];
    let itemClickedIndex = newShoppingListItems.findIndex(i => item.id == i.id);
    if(itemClickedIndex != -1){
      let newElement = {...shoppinListItems[itemClickedIndex]}
      newElement.isChecked = !newElement.isChecked;
      newShoppingListItems[itemClickedIndex] = newElement;
      setShoppingListItems(newShoppingListItems);
    }
  }

  const onListAddition = (quantity, description) => {
    
    let newShoppinListItems = [...shoppinListItems, { 
      id: shoppinListItems.length + 1, 
      name: description,
      qty : quantity,
      isChecked : false
     }];
     setShoppingListItems(newShoppinListItems); 
  
  }

  const addTuote = (item) => {


    console.log(item);
    let newShoppingListItems = [...shoppinListItems];
    let itemClickedIndex = newShoppingListItems.findIndex(M => M.name === item); ;
    
    console.log(itemClickedIndex);
    if(itemClickedIndex != -1) {
      console.log("tasa2")
      let newElement = {...shoppinListItems[itemClickedIndex]}
      newElement.qty = newElement.qty+1;
      newShoppingListItems[itemClickedIndex] = newElement;
      setShoppingListItems(newShoppingListItems);
    }
    else if (itemClickedIndex == -1) {
      let newShoppinListItems = [...shoppinListItems, { 
  
        id: shoppinListItems.length + 1, 
        name: item,
        qty : 1,
        isChecked : false
        
    
       }];
       setShoppingListItems(newShoppinListItems);
    }
    }  
    
  return (
    
    
    <div className="App">
      <Title/>
      <Otsikko/>
    
      <ShoppingListItem listItems= { shoppinListItems } itemClickedEvent={ handleItemCheckedToggle } />
      
      <button onClick={() => addTuote("Coca-cola Zero") }> Coca-cola Zero</button>
      <button onClick={() => addTuote("Sipsi") }> Sipsi</button>
      <button onClick={() => addTuote("Dippi") }> Dippi</button>
      <button onClick={() => addTuote("Suklaa") }> Suklaa</button>
    </div>
  );
}

export default App;