import { useState } from 'react'
import { storageTables, storageFoods, storageDrinks } from "../store/localStorage"




function OrderBlock ({ indexOrder, turnOffOrderBlock, type }) {
    const [tables, setTables] = useState(storageTables.getTables());
    const [table, setTable] = useState('');
    const [count, setCount] = useState(1)


    const handleOrderTable = () => {
        if (type === 'foods') {
            tables.map((tb) => {
                if (tb.table === table) {

                    if (tb.listFood.every(item => item.idFood !== storageFoods.getFoods()[indexOrder].id)) {
                        tb.listFood.push({
                            idFood: storageFoods.getFoods()[indexOrder].id,
                            count: Number(count),
                            table: table
                        })
                        setTables(tables)
                        storageTables.set(tables)
                        }
                    if(tb.listFood.filter(item => item.idFood === storageFoods.getFoods()[indexOrder].id)) {
                        const foodFilter = tb.listFood.filter(item => item.idFood === storageFoods.getFoods()[indexOrder].id)
                        foodFilter[0].count = Number(foodFilter[0].count) + count;
                        setTables(tables)
                        storageTables.set(tables)
                    };
                } 
            })

        }
        if (type === 'drinks') {
            tables.map((tb) => {
                if (tb.table === table && 
                    tb.listDrink.every(item => item.idDrink !== storageDrinks.getDrinks()[indexOrder].id)) {
                    tb.listDrink.push({
                       idDrink: storageDrinks.getDrinks()[indexOrder].id,
                       count: Number(count),
                       table: table

                    })
                    setTables(tables)
                    storageTables.set(tables)
                }
            })

        }
        turnOffOrderBlock()
        setTable('')
        setCount(1)
    };

    return (
        <div className="order-cover">
            <div className="order-block">
                <span className="order-block_header">
                    <h4>Thêm vào bàn:</h4>
                    <input type="number" className="table-order"
                        value={table}
                        onChange={e => setTable(e.target.value)}
                    />
                </span>
                <span className="order-count">
                    <h5 className="order_name">
                        {type === 'foods' ? storageFoods.getFoods()[indexOrder].name :
                            storageDrinks.getDrinks()[indexOrder].name
                        }</h5>
                    SL: 
                    <input type="number"
                        value={count} 
                        onChange={e => setCount(e.target.value)}   
                    />
                </span>
                <button className="order-block_button"
                    onClick={handleOrderTable}
                >Add</button>
                <i className="order_close fas fa-window-close"
                    onClick={turnOffOrderBlock}
                ></i>
            </div>    
        </div>   
    )
}

export default OrderBlock;