
import Home from './Pages/Home';
import Menu from './Menu'
import { useStore, actions} from './store';
function App() {

    const [state, dispatch] = useStore()
    return (
        <div>
            <Home></Home>
        </div>
    )
}

export default App;
