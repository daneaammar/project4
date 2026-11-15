


let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const cartp = document.querySelector(".elementchoseen")
const cartforfav = document.querySelector(".cartforfav")
function showselectproduct() {

   cartp.innerHTML = cartItems.map(function (elem) {
      return ` <div class=" border-1 border-gray-300 color-white   text-lg p-3  max-h-[400px]  hover:-translate-y-3    hover:scale-101 duration-1000   grid grid-cols-3 scale-100 text-center rounded-lg" > 
                         <img src="${elem.img}" alt="${elem.name}" class=" w-full h-[200px]  justify-self-center rounded-lg">
                        <div class="mt-5">

                        <p class=" font-bold mt-1 ">${elem.name}</p>
                         <p class="mt-1"> categore: ${elem.title}</p>
                        <p class="mt-2"> price: ${elem.price * elem.quantity}$</p>
                        
                     
                     <div class="m-1 mt-10 "> <span  onclick="increaseproduct(${elem.id})" class="increase   hover:cursor-pointer  px-2  py-1 rounded bg-gray-900 text-white">+</span>
                     <span class="quant">${elem.quantity}</span>

                     <span   onclick="decreaseproduct(${elem.id})"class="drcrease   px-3  hover:cursor-pointer  py-1 bg-gray-900 text-white rounded ">-</span>
                     </div>
                     </div>
                      <button onclick="clearelem(${elem.id})" class="btn-select justify-self-center mt-[100%] bg-red-900 max-h-[70px]  ml-3 text-white py-2 px-4 rounded-lg hover:bg-[#a87530]">remove from cart</button>


                     

                        </div>`
   }).join("");
   let total = cartItems.reduce(function (sum, elem) { return sum + (elem.price * elem.quantity) }, 0)
   const totalp=document.querySelector(".tprice")
   totalp.innerHTML = ` <p>Total Price <br>${total}$<p>`

}

showselectproduct();
function clearelem(id) {
   cartItems = cartItems.filter(function (elem) {
      return elem.id !== id;
   })


   localStorage.setItem("cartItems", JSON.stringify(cartItems))
   showselectproduct();


}




function increaseproduct(id) {
   const elemselect = cartItems.find(function (elem) { return elem.id == id })
   elemselect.quantity++;
   localStorage.setItem("cartItems", JSON.stringify(cartItems));
   showselectproduct();


}

function decreaseproduct(id) {
   const elemselect = cartItems.find(function (elem) { return elem.id == id })
   if (elemselect.quantity > 1) {
      elemselect.quantity--;
   }
   else {
      cartItems = cartItems.filter(function (elem) {
         return elem.id !== id;
      })

   }

   localStorage.setItem("cartItems", JSON.stringify(cartItems));
   showselectproduct();
}
//show element for fav
let cartfav = JSON.parse(localStorage.getItem("newfav")) || [];
function showfav(){
cartforfav.innerHTML = cartfav.map(function (elem) {
   return `<div class="  border-gray-300   hover:-translate-y-3 max-h-[500px] hover:border-[#3B0010] duration-1000 mt-20 mb-10    rounded-lg shadow-xl  flex flex-col   items-center   gap-3 border-2">
                <img src="${elem.img}" alt="${elem.name}" class="img-name w-full max-h-[70%]  rounded-t-lg">
                <h2 class="name-prodact text-2xl font-bold">${elem.name}</h2>
              
                <span class="title text-xl">${elem.title}</span> <div class="grid grid-cols-2 text-center">
                <i class="fa-solid  text-red-700 fa-heart text-3xl cursor-pointer " onclick="tooglefav(${elem.id})" data-id="${elem.id}"></i>

            </div>   </div>
`

}).join("");
}

showfav();

function tooglefav(id) {
   
      cartfav = cartfav.filter(function (elem) {
         return elem.id != id;
      });

   
  
   localStorage.setItem("newfav", JSON.stringify(cartfav));
   
showfav();
   
}
//w-h-div
const divs=document.querySelector(".divscale ");
const hscale=document.querySelector(".hscale");
hscale.addEventListener("mouseenter",bigger)
function bigger(){
   divs.style.transform="scalex(1.2)"
   divs.style.backgroundColor="#c9a645"
}
hscale.addEventListener("mouseleave",normall)
function normall(){
   divs.style.transform="scalex(1)";
    divs.style.backgroundColor="#0f0b06"
}




