import { useState, useEffect, useRef } from 'react';

import { storageTables, storageFoods, storageDrinks } from "../store/localStorage"
import { initState } from '../store';

import OrderBlock from './OrderBlock';

function MenuBlock ({ turnOffMenu }) {
    const menuLists = ['foods','drinks']
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('foods');
    const [foods, setFoods] = useState(storageFoods.getFoods());
    const [drinks, setDrinks] = useState(storageDrinks.getDrinks());
    const [editIndex, setEditIndex] = useState();
    const [editIndexPrice, setEditIndexPrice] = useState()
    const [newName, setNewName] = useState()
    const [newPrice, setNewPrice] = useState()

    const [showOrder, setShowOrder] = useState(false)

    const [indexBtnEdit, setIndexBtnEdit] = useState()

    const [indexOrder, setIndexOrder] = useState()


    const handleAdd = () => {
        if (name && price > 0) {
            console.log(foods.length)
            if (type === 'foods') {
                setFoods(prev => {
                    const newFoods = [...prev, {
                        name,
                        price,
                        id: foods[foods.length - 1].id + 1
                    }]
                    storageFoods.set(newFoods)
                    return newFoods
                });

            };
            if (type === 'drinks') {
                setDrinks(prev => {
                    const newDrinks = [...prev, {
                        name,
                        price,
                        id: drinks[drinks.length - 1].id + 1

                    }]
                    storageDrinks.set(newDrinks)
                    return newDrinks
                });

            }
        }
        setName('');
        setPrice('')
    };
    const handleStartEditName = (index) => {
        setEditIndex(index);

        if (type === 'foods') {

            setNewName(foods[index].name)
        }
        if (type === 'drinks') {

            setNewName(drinks[index].name)
        }

    };
    const handleStartEditPrice = (index) => {
        setEditIndexPrice(index);
        if (type === 'foods') {

            setNewPrice(foods[index].name)
        }
        if (type === 'drinks') {

            setNewPrice(drinks[index].name)
        }

    };
    const handleEndEditName = (e) => {
        if (e.key === 'Enter') {
            if (type === 'foods' && editIndex !== '') {
                if (newName) {

                    foods[editIndex].name = newName;
                    setEditIndex('')
                }
                if (newName === '') {
                    foods.splice(editIndex, 1)
                    setEditIndex('')

                }
                storageFoods.set(foods)
            }
        }
        if (e.key === 'Enter') {
            if (type === 'drinks' && editIndex !== '') {
                if (newName) {

                    drinks[editIndex].name = newName;
                    setEditIndex('')
                }
                if (newName === '') {
                    drinks.splice(editIndex, 1)
                    setEditIndex('')

                }
                storageDrinks.set(drinks)
            }
        }
    };
    const handleBlurEditName = () => {
            if (type === 'foods' && editIndex !== '') {
                
                if (newName) {

                    foods[editIndex].name = newName;
                    setEditIndex('')
                }
                if (newName === '') {
                    foods.splice(editIndex, 1)
                    setEditIndex('')

                }
                storageFoods.set(foods)
            }
            if (type === 'drinks' && editIndex !== '') {
                
                if (newName) {

                    drinks[editIndex].name = newName;
                    setEditIndex('')
                }
                if (newName === '') {
                    drinks.splice(editIndex, 1)
                    setEditIndex('')

                }
                storageDrinks.set(drinks)
            }
            
    };
    

    const handleEndEditPrice = (e) => {
        if (e.key === 'Enter') {
            if (type === 'foods' && editIndexPrice !== '') {
                
                foods[editIndexPrice].price = newPrice;
                setEditIndexPrice('')
                storageFoods.set(foods)
            }
            if (type === 'drinks' && editIndexPrice !== '') {
                
                drinks[editIndexPrice].price = newPrice;
                setEditIndexPrice('')
                storageDrinks.set(drinks)
            }
        }
    };
    const handleBlurEditPrice = () => {
        if (type === 'foods' && editIndexPrice !== '') {
            
            foods[editIndexPrice].price = newPrice;
            setEditIndexPrice('')
            storageFoods.set(foods)
        }
        if (type === 'drinks' && editIndexPrice !== '') {
            
            drinks[editIndexPrice].price = newPrice;
            setEditIndexPrice('')
            storageDrinks.set(drinks)
        }
    };

    const handleShowOrder = (index) => {
        setShowOrder(true);
        setIndexOrder(index);
    };

    const handleTurnOffOrderBlock = () => {
        setShowOrder(false)
    };

    const handleShowBtnEdit = (index) => {
        setIndexBtnEdit(index);
    };
    const handleHideBtnEdit = () => {
        setIndexBtnEdit('');
    };
    

    
    
   

    return (
        <div className="menu-layout">
            <div className="menu-block">
                <h1>Menu</h1>
                <div>
                    <div className="menu-block_header">
                        {menuLists.map((menu) => (
                            <span key={menu}
                                style={type === menu ?{ 
                                    backgroundColor: 'var(--primary-color)',
                                    opacity: 1,
                                    color: 'var(--white-color)',
                                } : {}}
                                onClick={() => setType(menu)}
                            >
                                <h4>{menu}</h4>
                            </span>
                        ))}
                    </div>
                    <div className="menu-block_list"> 
                        <table className="menu-block_table" border="2"  width="100%">
                            <thead>

                                <tr height="30px">
                                    <th width="5%">STT</th>
                                    <th width="70%">Name</th>
                                    <th width="25%">Price</th>

                                </tr>
                            </thead>
                            <tbody>
                                {type === 'foods' && foods.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td 
                                            onDoubleClick={() => handleStartEditName(index)}>  
                                            <span onMouseLeave={handleHideBtnEdit}>
                                                
                                                <h5 className={index === editIndex ? "editing" : ''}
                                                    onMouseEnter={()=> handleShowBtnEdit(index)}
                                                >{item.name}</h5>
                                                <button className={indexBtnEdit === index ? "btn-order show" : "btn-order"}
                                                    onClick={()=> handleShowOrder(index)}
                                                >Order</button>

                                            </span>  
                                            <input className={index === editIndex ? "menu-block_table-input editing" : 'menu-block_table-input'}
                                                type="text"
                                                value={index === editIndex ? newName : item.name}
                                                style={{
                                                    fontSize: 14
                                                }}
                                                onChange={e=> setNewName(e.target.value)}
                                                onKeyPress={handleEndEditName}
                                                onBlur={handleBlurEditName}
                                            />
                                            {showOrder === true && <OrderBlock type={type} indexOrder={indexOrder} turnOffOrderBlock={handleTurnOffOrderBlock}></OrderBlock>}
                     
                                        </td>
                                        <td
                                            onDoubleClick={() => handleStartEditPrice(index)}>    
                                            <h5 className={index === editIndexPrice ? "editing-price" : ''}>{item.price}</h5>
                                            <input className={index === editIndexPrice ? "editing-price" : 'menu-block_table-input'}
                                                value={index === editIndexPrice ? newPrice : item.price}
                                                style={{
                                                    fontSize: 14
                                                }}
                                                onChange={e=> setNewPrice(e.target.value)}
                                                onKeyPress={handleEndEditPrice}
                                                onBlur={handleBlurEditPrice}

                                            />
                                        </td>
                                    </tr>
                                ))}
                                {type === 'drinks' && drinks.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td 
                                            onDoubleClick={() => handleStartEditName(index)}>    
                                            <span onMouseLeave={handleHideBtnEdit}>
                                                
                                                <h5 className={index === editIndex ? "editing" : ''}
                                                    onMouseEnter={()=> handleShowBtnEdit(index)}
                                                >{item.name}</h5>
                                                <button className={indexBtnEdit === index ? "btn-order show" : "btn-order"}
                                                    onClick={() => handleShowOrder(index)}
                                                >Order</button>

                                            </span> 
                                            <input className={index === editIndex ? "menu-block_table-input editing" : 'menu-block_table-input'}
                                                value={index === editIndex ? newName : item.name}
                                                style={{
                                                    fontSize: 14
                                                }}
                                                onChange={e=> setNewName(e.target.value)}
                                                onKeyPress={handleEndEditName}
                                                onBlur={handleBlurEditName}

                                            />
                                            {showOrder === true && <OrderBlock type={type} indexOrder={indexOrder} turnOffOrderBlock={handleTurnOffOrderBlock}></OrderBlock>}
                                        </td>
                                        <td
                                            onDoubleClick={() => handleStartEditPrice(index)}>    
                                            <h5 className={index === editIndexPrice ? "editing-price" : ''}
                                            
                                            >{item.price}</h5>
                                            <input className={index === editIndexPrice ? "editing-price" : 'menu-block_table-input'}
                                                value={index === editIndexPrice ? newPrice : item.price}
                                                style={{
                                                    fontSize: 14
                                                }}
                                                onChange={e=> setNewPrice(e.target.value)}
                                                onKeyPress={handleEndEditPrice}
                                                onBlur={handleBlurEditPrice}

                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>                
                           
                    </div>
                </div>
                <div className="menu-block_add">
                    <span className="menu-block_add-name">
                        <label>Name</label>
                        <input type="text" name="name" id="name-input"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </span>
                    <span className="menu-block_add-price">
                        <label>Price</label>
                        <input type="number" name="price" id="price-input"
                            value={price}
                            onChange={e => setPrice(e.target.value)}

                        />
                    </span>
                    <button onClick={handleAdd}>Add</button>
                </div>
                <span className="menu-block_close"
                    onClick={turnOffMenu}
                >
                    <i className="fas fa-window-close"></i>
                </span>
            </div>
        </div>     
    )
}

export default MenuBlock;
