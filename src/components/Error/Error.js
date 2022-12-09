import './Error.css';
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className='error__information'>
            <h2 className='error__title'>
                404
            </h2>
            <p className='error__subtitle'>
                Страница не найдена
            </p>
            <Link to='/' className="error__link">
                Назад
            </Link>
        </div>
    )
}

export default Error;