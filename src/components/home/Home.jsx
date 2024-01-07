import { useEffect, useState } from "react";
import Card from "../../shared/card/Card";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchIt,setSearhIt] = useState("")
  const filterIt = async (e) => {
    e.preventDefault()
    const getFilterIt = await fetch("https://fakestoreapi.com/products");
    const getFilterItInJsonFormat = await getFilterIt.json();
    const filter =await getFilterItInJsonFormat.filter(
        (filtering)=>filtering.category === searchIt)
    setProducts(filter);
 console.log("getFilterIt:",getFilterItInJsonFormat)
    
  };
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
       <form className="flex justify-center" onSubmit={filterIt} >
        <input placeholder="e.g men'clothing,jewelery,electronics,women's clothing" value={searchIt} onChange={(e)=>setSearhIt(e.target.value)} className="w-[30rem]  px-[1rem] py-[0.5rem] rounded-[1rem] border outline-none" type="text" />
        <button className="w-[10rem] px-[0.5rem] py-[0.5rem] rounded-[0.5rem] bg-blue-500 text-white">SEARCH</button>
       </form>

           <div className="grid grid-cols-3 gap-[4rem]">
                {products.map((product, i) => (<Card key={i} {...product} />))}
           </div>
         
    </div>
     
    </>
  );
};

export default Home;
