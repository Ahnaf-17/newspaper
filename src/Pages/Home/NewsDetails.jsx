import { useParams } from "react-router-dom";
import Header from "../Shared_pages/Header/Header";
import RightNav from "../Shared_pages/RightNav/RightNav";
import Navbar from "../Shared_pages/Navbar/Navbar";

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2>news Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                <RightNav ></RightNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;