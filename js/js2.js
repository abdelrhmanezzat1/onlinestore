// filter prodcets
let swit = document.querySelectorAll(".slector li")
let allpro= document.querySelectorAll(".father .prodect")
swit.forEach((li)=>{
    li.addEventListener("click",function (){
        swit.forEach((li)=>{
            li.classList.remove("view");
            this.classList.add("view")
        })
    }
    );
    li.addEventListener("click",mange)

});
function mange (){
    allpro.forEach((ii)=>{
        ii.style.opacity = 0
      ii.style.display = "none"
       
    })
    document.querySelectorAll(this.dataset.cat).forEach((el)=>{
        el.style.opacity = 1
      el.style.display = "flex" 

      

    })
}
