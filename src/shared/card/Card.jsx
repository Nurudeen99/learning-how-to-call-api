


const Card = ({image,price,category,rating,title}) => {
  return (
      <>
      <div className="pt-[2rem] bg-gray-200 rounded-[3rem] drop-shadow-xl w-[22rem] h-[20rem] justify-center">
        <div className="flex pb-[2rem] justify-center h-[10rem] ">
            <img src={image} alt="" />
       </div>
        <div>
            <div>{price}</div>
            <div>{category}</div>
            <div>{rating.rate}</div>
            <div className="text-center w-[20rem]">{title}</div>
        </div>
      </div>
      </>
    )
}

export default Card