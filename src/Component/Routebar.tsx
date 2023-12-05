import { BrowserRouter,Routes, Route } from "react-router-dom"
import LoginForm from "./LoginForm"
import ProjectList from "./ProjectList"
import { AddForm } from "./AddForm/AddForm"
//import { ListUI } from "./ListUI/ListUI"
import { lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";


function Routebar() {

    const aboutComponent = lazy(() => import('./ListUI/ListUI').then(module => ({
        default: module.ListUI
    })));

    const LazyComponent = (Component: any) => (
        <Suspense fallback={<Spinner animation="border" />}>
            <Component />
        </Suspense>
    );

return (
    <>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<LoginForm />}
                />
                <Route
                    path="/ProjectList"
                    element={<ProjectList />}
                />

                <Route
                    path="/AddForm"
                    element={<AddForm />}
                />

                <Route
                    path="/ListUI"
                    element={LazyComponent(aboutComponent)}  >
                    </Route>

                    {/* <Route
                    path="/ListUI"
                    element={<ListUI />}
                /> */}
            </Routes>
        </BrowserRouter>
    </>
)
}
export default Routebar
 