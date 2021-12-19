
import { useStore, actions } from './store';
import ControlsMenu from './componentMenu/ControlsMenu';
import Tables  from './componentMenu/Tables';
import Processing  from './componentMenu/Processing';
import TakeAway  from './componentMenu/TakeAway';

import "./css/style.css" ;
import "./css/base.css" ;



function Menu() {

    const [state, dispatch] = useStore()
    return (
        <div>
            <div className="app">
                <div className="container-md">
                    <header className="header">
                        <div className="header_options">
                            <i className="header_options-icon fas fa-bars"></i>
                        </div>
                        <div className="header_title">
                            <p>MY MENU</p>
                        </div>
                        <div className="header_notyuser">

                            <div className="header_notication">                  
                                    <i className="far fa-bell"></i>
                                    <p>Thông báo</p>
                            </div>
                            <div className="header_user">
                                <span className="header_user-image">
                                    <p>Name</p>
                                </span>
                
                            </div>
                        </div>
                    </header>
                </div>
                <div className="container-app container-md">
                    <div className="row">
                        <ControlsMenu></ControlsMenu>
                        <Processing></Processing>
                        <Tables></Tables>
                        <TakeAway></TakeAway>
                    </div>             

                </div>
            </div>
        </div>
    )
}

export default Menu;
