import { useState} from 'react';
import { useStore, actions } from '../store';

import { initState } from '../store'
import storageTables from '../store/localStorage/storageTables';
import TableItem from './TableItem';


function Tables () {
    const [tableAdd, setTableAdd] = useState('');
    const [tables, setTables] = useState(storageTables.getTables());
    const [indexShowTable, setIndexShowTable] = useState('');

    
    const handleAdd = () => {
        if (tableAdd > 0 && tables.every(table => table.table !== tableAdd)) {
            setTables(prev => {
                const newTables = [...prev, {
                table: tableAdd,
                listFood: [],
                listDrink: [],

            }]
            storageTables.set(newTables);
            return newTables; 
        })
            
        } else {
            alert('NHẬP SỐ BÀN TRÙNG HOẶC KHÔNG HỢP LỆ!!!')
        }
        setTableAdd('');
    };
    const handleShowTable = (index) => {
        setIndexShowTable(index);
    };

    return (
        <div className="col-md-6 container_table">
            <div className="container_table-header">
                <div className="container_table-header--title">
                    <h3>Danh sách bàn: </h3>
                </div>
                <span className="container_table-search">
                    <input type="number" className="container_table-search--input"/>
                    <button className="container_table-search--btn">Search</button>
                </span>
                <div>
                    <input type="number" name="tableNumberAdd" className="tableNumberAdd"
                        value={tableAdd}
                        onChange={e => {
                            setTableAdd(e.target.value)
                        }}
                    /> 
                    <button className="btn-add" onClick={handleAdd}>Thêm</button>
                </div>
            </div>

            <div className="container_table-table">
                {tables.map((table, index) => (
                    <span key={index} 
                        onDoubleClick={() => handleShowTable(index)}
                    ><h3>{table.table}</h3>
                    {indexShowTable === index && <TableItem index={index}></TableItem>}
                    </span>
                ))}
            </div>
                    
        </div>
    )
};

export default Tables;