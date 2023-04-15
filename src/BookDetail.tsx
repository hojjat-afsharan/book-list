import { useParams } from "react-router-dom";


function BookDetail() {
  const { bookId } = useParams();
  return (
    <div>
     {bookId}
    </div>
  );
}

export default BookDetail;