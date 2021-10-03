// toggle Nav Bar 
let toggle = document.querySelector(".toggle");
let navbar = document.querySelector(".navbar")
toggle.addEventListener("click",()=>{
    toggle.classList.toggle("active")
    navbar.classList.toggle("active")
})
// make slider Right and Left 
let div = document.querySelectorAll(".slider .div")
let right = document.querySelectorAll(".main")
let left = document.querySelector("#left")
let btn =   document.querySelector(".btn")
let btn1 =document.querySelector(".btn1")
let movebar = 27;
let maxmove = 179;
let cuntrn = 0 ;
let di = Math.ceil(div.length / 3)   
let mob = window.matchMedia("(min-width: 768px)")
if (mob.matches){
    movebar = 27;
    maxmove = 179;
}
let mobile = window.matchMedia(" (min-width: 375px) and (max-width: 768px) ")
if (mobile.matches){
    movebar = 100;
    maxmove = 450;
}
btn.onclick = ()=>{R();}
btn1.onclick = ()=>{L();}
let R = ()=>{
    if(div == 1){cuntrn == 0}
    cuntrn = cuntrn + movebar;
    for ( let chil of div){
        if (cuntrn> maxmove) /*{cuntrn -= movebar}*/{cuntrn -= movebar}
        chil.style.left = `-${cuntrn}%`
    }
}
let L = ()=>{
    if (cuntrn<=0){cuntrn = 0 ;}
    cuntrn = cuntrn - movebar;
    for (let chi of div){
        if (di > 1 ) 
        chi.style.left = `-${cuntrn}%`
    }
}
// maker a boxs
let our = document.querySelectorAll(".ourimges img")
let all = document.querySelector(".sli")
our.forEach((img)=>{
    img.addEventListener("click",()=>{
        let div = document.createElement("div")
        div.className = "box"
        let im = document.createElement("img")
        im.className = "copy"
        im.src = img.src
        let pre = document.createElement("div")
        pre.className ="pre"
        let h1 =document.createElement("h1")
        let h1text = document.createTextNode(img.alt)
        h1.append(h1text)
        let buy = document.createElement("div")
        buy.className = "buy"
        let a = document.createElement("a")
        a.setAttribute("href","#")
        let texta = document.createTextNode("Buy Now")
        a.append(texta)
        let h4 =document.createElement("h4")
        let texth4 =document.createTextNode(img.title)
        let coles = document.createElement("span")
        coles.className = "coles"
        let x = document.createTextNode("X")
        coles.prepend(x)
        div.prepend(coles)
        h4.append(texth4)
        pre.append(h1)
        pre.append(buy)
        buy.append(a)
        buy.append(h4)
        div.append(pre)
        div.prepend(im)
        all.prepend(div)
        coles.onclick = ()=>{
            div.remove();
        }
    })

})

