const wraooer=document.querySelector(".sliderWrapper")
const menuitems=document.querySelector(".menuitem")
menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100*index}vw)`
    })
}
)
    
