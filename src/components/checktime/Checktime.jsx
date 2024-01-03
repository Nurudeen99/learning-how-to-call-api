const TimeCheck=()=>{
    const now = new Date()
    let hour = now.getHours()
    let minutes = now.getMinutes()
    if(hour >= 0 && minutes >= 0){
        return ("HAPPY NEW YEAR!!!")
    }else{
        return ("NOT YET TIME")
    }
}
export default TimeCheck