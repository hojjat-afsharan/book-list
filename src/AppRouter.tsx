import { createBrowserRouter,
    createRoutesFromElements,
    Route, Routes,
    RouterProvider,
    Router} from "react-router-dom";
import Books from "./Books";
import BookDetail from "./BookDetail";

function AppRouter() {
  return (
    <div>
        <h3>AppRouter</h3>

        <Routes>
            <Route element={<Books />} path="/books" />
            <Route element={<BookDetail />} path="/books/:bookId" />
            <Route element={<div>Not Found</div>} path="*" />
        </Routes>
    </div>
    
  );
}
export default AppRouter;