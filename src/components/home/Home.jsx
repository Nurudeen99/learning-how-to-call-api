import { useEffect, useState } from "react";
import Card from "../../shared/card/Card";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const getDetail = await fetch("https://fakestoreapi.com/products");
    const getDetailInJsonFormat = await getDetail.json();
    setProducts(getDetailInJsonFormat);
 console.log("getdetail:",getDetailInJsonFormat)
    
  };
  useEffect(()=>{
    getAllProducts()
  },[])
  return (
    <>
    <div className="p-[5rem] min-h-screen space-y-[3rem] ">
       

           <div className="grid grid-cols-3 gap-[4rem]">
                {products.map((product, i) => (<Card key={i} {...product} />))}
           </div>
         
    </div>
     
    </>
  );
};

export default Home;
