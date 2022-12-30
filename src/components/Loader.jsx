import { MetroSpinner } from "react-spinners-kit";
import '../styles/Loader.scss';

const Loader = () => {
    return (
        <div className="loader">
            <MetroSpinner color='white' />
        </div>
    )
}

export default Loader;