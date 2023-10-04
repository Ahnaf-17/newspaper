import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {

    const [categories , setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="space-y-5">
            <h2 className="text-2xl">All categories</h2>
            {
                categories.map(category => <Link to={`/category/${category.id}`}
                className="block ml-4 text-xl font-semibold"
                     key={category.id}>{category.name} </Link>)
            }
        </div>
    );
};

export default LeftNav;