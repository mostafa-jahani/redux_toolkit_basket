import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {getProducts} from "../redux/slices/productSlice";
import {addToCart} from "../redux/slices/cartSlice";
import Swal from "sweetalert2";


const Products = () => {

    //============================== Logic ===========================
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.list)

    useEffect(() => {
        getProductsApi()
    }, []);

    const getProductsApi = async () => {
        let res = await axios.get("http://localhost:3000/products");
        dispatch(getProducts(res.data))
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        Swal.fire({
            title: "Product added",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }

    //============================== Logic ===========================


    //============================ jsx =============================
    return (
        <div className="container">
            <div className="row mt-5 g-3">
                {products && products.map(product => (
                    <div className="col-md-3" key={product.id}>
                        <div className="card">
                            <img className="card-img-top" src={product.image} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">
                                    {product.description}
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button className="btn btn-sm btn-outline-success"
                                        onClick={() => handleAddToCart(product)}>
                                    Add to cart
                                </button>
                                <span>{product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
//============================ jsx =============================


export default Products;