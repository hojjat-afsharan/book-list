import { Link } from "react-router-dom";

function Books() {
    return (
        <div>
            <h1>Books</h1>
            <nav>
                <Link to={"/books/1"}>Book 1</Link>
                <Link to={"/books/2"}>Book 2</Link>
                <Link to={"/books/3"}>Book 3</Link>
            </nav>
        </div>
    );
}

export default Books;