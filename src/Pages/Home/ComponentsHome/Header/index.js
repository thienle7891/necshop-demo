
import clsx from "clsx";
import { useStore } from "../../../../store";
import logo2 from "../ImageHome/logo2.png"
import './styles.css'
import './responsive.css'

function Header() {
    const navArray = ['about', 'contact', 'services', 'account']
    const filters = ['home', 'accessories', 'audio', 'headphone', 'pages', 'shop']
    const [state, dispatch] = useStore()
    return (
        <div className="grid">

            <div className={clsx('headerHome')}>
                <div className={clsx('nav', 'grid wide' )}>
                    <ul className={clsx('navList')}>
                        {navArray.map(navItem => (
                            <li key={navItem}
                                className={clsx('navItem')}
                            >
                                {navItem[0].toUpperCase() + navItem.slice(1)}
                            </li> 
                        ))}
                    </ul>
                    <span>
                        <span className={clsx('cart')}>
                            <i className={clsx('cartIcon', "fas fa-shopping-basket")}></i>
                        </span>
                    </span>
                </div>
                <div className={clsx('navControl', 'grid wide')}>
                    <span className={clsx('logo')}>
                        <img className={'logoimg'} 
                            src={logo2}

                        />
                    </span>
                    <div className={clsx('controlBlock')}>

                        <ul className={'filters'}>
                            {filters.map(filter => (
                                <li key={filter}
                                className={'filterItem'}>
                                    {filter.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                        <span className={clsx('search')}>
                            <input
                                className={'searchInput'}
                                placeholder='Search...'
                            />
                            <span className={'searchIcon'}>
                                <i className="fas fa-search"></i>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;