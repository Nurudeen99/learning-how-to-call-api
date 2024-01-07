import axios from "axios"
import { useState } from "react"


const Post = () => {

const [price , setPrice] = useState("")
const [lastname , setLastname] = useState("")
const [description , setDescription] = useState("")
const [category , setCategory] = useState("")
// const [image , setImage] = useState("")


     const submitAxiosData = async (e)=>{
        e.preventDefault()
       try {
        if(!price || !lastname || !description || !category){
            throw new Error("All fields is compilsory ")
        }
        const axiosData = await axios ({
            method: 'post',
            url:'https://fakestoreapi.com/products',
            data: {
                price: price,
                lastname: lastname,
                description: description,
                category: category,
                // image: image
            }
         })
         console.log("axiosData:",axiosData )
       } catch (error) {
        console.log(error)
       }
   } 
  return (
    <>
    <div className="flex justify-center item-center">
        <div >
            <form onSubmit={submitAxiosData} className="flex flex-col gap-[1rem] rounder-[1rem]">
                <input className="w-[20rem]  px-[1rem] py-[0.5rem] rounded-[1rem] border outline-none" onChange={(e)=>setPrice(e.target.value)} value={price}  type="text" placeholder="price"/>
                {/* <input className="w-[20rem]  px-[1rem] py-[0.5rem] rounded-[1rem] border outline-none" onChange={(e)=>setFirstname(e.target.value)} value={firstname}  type="text" placeholder="firstname"/> */}
                <input className="w-[20rem]  px-[1rem] py-[0.5rem] rounded-[1rem] border outline-none" onChange={(e)=>setLastname(e.target.value)} value={lastname}  type="text" placeholder="lastname"/>
                <input className="w-[20rem]  px-[1rem] py-[0.5rem] rounded-[1rem] border outline-none" onChange={(e)=>setDescription(e.target.value)} value={description}  type="text" placeholder="description"/>
                <input className="w-[20rem]  px-[1rem] py-[0.5rem] rounded-[1rem] border outline-none" onChange={(e)=>setCategory(e.target.value)} value={category}  type="text" placeholder="category"/>
                 <div className="flex justify-center">
                    <button className="w-[10rem] px-[0.5rem] py-[0.0.25rem] rounded-[0.5rem] bg-blue-500 text-white">SUBMIT</button>
                </div>
            </form>
            


        </div>

    </div>
    </>
  )
}

export default Post