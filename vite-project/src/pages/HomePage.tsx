
import { Helmet } from "react-helmet";
import SimpleCount from "./../components/SimpleCount" ;
import CountHangXom from "../components/SimpleCount/CountHangXom";
import { useProducts } from "../Hooks/useProducts";
import { useEffect } from "react";
//import { useBearStore } from "../Hooks/useBearStore";
import SwiperGallery from "../SwiperGallery";
import { Provider } from "react-redux";
import BankAccount from "../BankApp/BankAccount";
import { bankReducer } from "../BankApp/bankReducer";
import { createStore } from "redux";

// Create Store
const store = createStore(bankReducer);


const HomePage = () => {

  const {err, isLoading, products, fetchProducts} = useProducts();

  //const {bears, addABear} = useBearStore();

  useEffect(()=>{
    fetchProducts(); //gọi hàm này để đổ data vào cho product
  })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HOme PAge</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-3xl font-bold">Home Page</h1>

      <SwiperGallery/>
      <Provider store={store}>
        <BankAccount />
      </Provider>
      <hr/>
      {/*{bears}
      <button onClick={addABear}>+1</button>*/}
      <hr/>
      <SimpleCount />
      <hr/>
      <CountHangXom />
      <hr/>
      <h2>Product Store List</h2>
      {isLoading && <div>Loading....</div>}
      {err && <div>{err}</div>}
      <ul>
        {
          products.length > 0 && products.map ((product,index)=>{
            return <li key={index}>
              {product.title} - {product.price}
            </li>
          })
        }
      </ul>
    </>
  );
};

export default HomePage;