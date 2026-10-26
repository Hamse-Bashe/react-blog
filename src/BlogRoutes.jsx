import { createBrowserRouter } from "react-router";
import { NotFound } from "./components/NotFound";
import { Home } from "./components/Home";
import { CreatePost } from "./components/CreatePost";
import { Login } from "./components/Login";
import App from "./App";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PostDetail } from "./components/PostDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "create",
                element: (
                    <ProtectedRoute element={<CreatePost/>}/>
                )
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "posts/:postId",
                element: <PostDetail/>
            },
        ]
    }
]) 