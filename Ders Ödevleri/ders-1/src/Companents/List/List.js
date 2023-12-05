import React, { useState } from 'react';
import "./List.css"

function List({ getListItems,setListItems }) {

  const deleteItem = (Items) => {
        setListItems(getListItems.filter((x)=>x.Params !== Items.Params))
  }

  const selectItem = (selectedItem) => {
    setListItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.Params === selectedItem.Params) {
          return {
            ...item,
            isSelect: !item.isSelect // Checkbox durumunu tersine çevir
          };
        }
        return item;
      });
    });
  }




  return (
    <div>
      <ul>
        {getListItems.map((item) => (
          <li className='list' key={item.id}>
            <input className='left-item' type='checkbox' onChange={()=>selectItem(item)} />
            <p className={`center-item ${item.isSelect ? "center-item-checked":""}`}>{item.Params}</p>
            <button className='right-item'onClick={()=>deleteItem(item)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
