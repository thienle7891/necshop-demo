import { useState, useEffect, useMemo } from "react";

import { storageTables, storageFoods, storageDrinks } from "../store/localStorage"



function Processing () {
    const [foodOrder, setFoodOrder] = useState([])
    const [listFoodOrder, setListFoodOrder] =  useState()
    useMemo(() => {
        
        const listFoodOrderTable = storageTables.getTables().reduce((acc, table) => {
            return acc.concat(table.listFood)
        }, [])
        setListFoodOrder(listFoodOrderTable)
        const fds =  listFoodOrderTable.reduce((acc, item) => {
            const fd = storageFoods.getFoods().filter(food => food.id === item.idFood)
            if (fd) {
                const newFd = [...acc, ...fd].map((food) => {
                    return {
                        name: food.name,
                        id: food.id,
                        price: food.price,
                    }
                })
                return newFd
                
            }
            
        }, [])
        
        setFoodOrder(fds)
   
    }, []) 
    return (
        <div className="col-md-3 container_menu">
            <div className="container_menu-processing">
                <h3>Đang xử lí</h3>
            </div>
            <ul className="container_menu-oder-list">
                {foodOrder.map((item, index) => (

                    <li key={index} className="container_menu-oder-item">
                        <h5>{item.name}</h5>
                        <span>

                            <h5>SL: {listFoodOrder[index].count}</h5>
                            <h5>Bàn: {listFoodOrder[index].table}</h5>
                        </span>
                    </li>
                ))}
                
            </ul>                        
        </div>
    )
};

export default Processing;