import { Outlet } from "react-router-dom";
import Header from "../../Componenets/Header/Header";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;