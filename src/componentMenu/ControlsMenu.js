import { useState } from 'react';
import MenuBlock from "./MenuBlock";
function ControlsMenu () {
    const controls = ['Thực đơn','Đồ uống', 'Sao kê'];
    const [onMenu, setOnmenu] = useState('')
    
    const handleTurnOffMenu = () => {
        setOnmenu('')
    };
        return (
        <div className="container_menu-controls">
            {controls.map((control) => (
                <h3 key={control}
                    onClick={e => setOnmenu(e.target.innerText)}
                >{control}</h3>                    
            ))} 
            {onMenu === 'Thực đơn' ? <MenuBlock turnOffMenu={handleTurnOffMenu}></MenuBlock> : ''}
        </div>

    )
};

export default ControlsMenu;