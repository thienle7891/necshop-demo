import { useState } from 'react'

import { storageTables, storageFoods, storageDrinks } from "../store/localStorage"


function TableItem ( {index}) {
    return (
        <div className="table-item_cover">
            <div className="table-item">
                <div className="table-item_header">
                    <h3>BÀN {index}</h3>
                </div>
                <div className="table-item_container">
                    <ul className="table-item_order">

                    </ul>
                </div>
                <div className="table-item_footer">

                </div>
            </div>
        </div>
    )
}

export default TableItem