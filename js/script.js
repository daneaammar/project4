
const firstname = (localStorage.getItem("firstname"))
const email = (localStorage.getItem("email"))
const name = document.querySelector(".username")
const cart = document.querySelector(".cart");
const shop = document.querySelector(".shop");
const cartnumber = document.querySelector(".super");
const selectbtn = document.querySelectorAll(".btn-select");
const logoutb = document.querySelector(".logout")
const loginb = document.querySelector(".login")
const registerb = document.querySelector(".register")
const products = document.querySelector(".products")



let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let cartfav = JSON.parse(localStorage.getItem("newfav")) || [];

cartItems.forEach(element => {
   if (element.quantity === null || element.quantity === undefined) { element.quantity = 1; }

});
//number select

if(cartItems.length>0){
cartnumber.textContent = cartItems.length;
}

//
if (email) {
   logoutb.classList.remove("hidden")
   loginb.classList.add("hidden")
   registerb.classList.add("hidden")
   name.textContent = `hello,${firstname}`
   products.classList.remove("hidden")
    cartnumber.classList.remove("hidden")
    updateheart();
    
   

}
else {
   logoutb.classList.add("hidden")
   loginb.classList.remove("hidden")
   registerb.classList.remove("hidden")

   products.classList.add("hidden")
   name.textContent = ""
   logoutb.style.display = "none";
   cartnumber.classList.add("hidden")
}


let pr = [
   { id: 1, name: "Ruby Red Earrings", price: 100, title: "Elegant red", img: "img/1.jpg" },
   { id: 2, name: " Golden Necklace", price: 400, title: " Delicate golden ", img: "img/2.jpg" },
   { id: 3, name: " Pearl Bracelet  ", price: 100, title: "Beautiful pearl", img: "img/3.jpg" },
   { id: 4, name: "  Golden Bracelet  ", price: 100, title: "Stylish golden", img: "img/6.jpg" },
   { id: 5, name: "  Pearl Necklace  ", price: 100, title: " Classic pearl", img: "img/7.jpg" },
   { id: 6, name: "   Velvet Choker  ", price: 300, title: " Chic velvet", img: "img/8.jpg" },
   { id: 7, name: " Hydrating Face Cream  ", price: 400, title: " Soft moisturizing", img: "img/9.jpg" },
   { id: 8, name: " Diamond Ring   ", price: 500, title: "Sparkling elegant", img: "img/10.jpg" },
   { id: 9, name: "Makeup Brush Set  ", price: 800, title: "Soft professional", img: "img/12.jpg" },
   { id: 10, name: "  Red Lipstick   ", price: 400, title: " Bold rich", img: "img/14.jpg" },
   { id: 11, name: "   Cherry Lipstick  ", price: 500, title: " Smooth long-last", img: "img/15.jpg" },
   { id: 12, name: " Crystal Ring ", price: 500, title: " Delicate sparkling", img: "img/16.jpg" },
   { id: 13, name: " Pearl Earrings   ", price: 500, title: "  Timeless elegant", img: "img/17.jpg" },
   { id: 14, name: "Red Blush  ", price: 500, title: "Smooth radiant", img: "img/19.jpg" },

   { id: 15, name: "Ring", price: 500, title: "Chic velvet", img: "img/18.jpg" },
   { id: 16, name: "Floral ", price: 500, title: " floral", img: "img/20.jpg" },


]
let container = document.querySelector(".products");
container.innerHTML = pr.map((item) => {
   return `<div  id="pr-${item.id}" class="item  pb-2 w-full mt-5 md:w-[350px]    hover:-translate-y-3    hover:scale-101 duration-1000   max-h-[500px]  rounded-lg shadow-xl  flex flex-col  items-center items-center   gap-3 border-2">
                <img src="${item.img}" alt="${item.name}" class=" img-name w-full h-[65%]  rounded-t-lg">
                <h2 class="name-prodact text-2xl font-bold">${item.name}</h2>
                <span class="price text-xl font-bold">$${item.price.toFixed(2)}</span>
                <span class="title text-xl">${item.title}</span> <div class="grid grid-cols-2 text-center">
                <i class="fa-solid fa-heart  heart  text-black  cursor-pointer text-3xl"  data-id="${item.id}" onclick="addfav(${item.id})"></i>
                <button onclick="check(${item.id})" class="btn-select  bg-[#c68E45] text-white py-1 px-4 rounded-lg hover:bg-[#a87530]">Add to cart</button>
                </div>



            </div>
`
}).join("");
updatebuttons();
// add favorite

updateheart();




function addfav(id) {

   const found = cartfav.find(function (item) {
      return item.id == id;
   });

   if (found) {

      cartfav = cartfav.filter(function (item) {
         return item.id != id;
      });
   }
   else {

      const fav = pr.find(function (elem) {
         return elem.id == id;
      });

      cartfav.push(fav);
   }

   localStorage.setItem("newfav", JSON.stringify(cartfav));

   updateheart();
}

function updateheart() {

   const hearts = document.querySelectorAll(".heart");

   hearts.forEach(function (heart) {

      const id = heart.dataset.id;

      const found = cartfav.find(function (item) {
         return item.id == id;
      });

      if (found) {
         heart.classList.remove("text-black");
         heart.classList.add("text-red-600");
      } else {
         heart.classList.remove("text-red-600");
         heart.classList.add("text-black");
      }

   });
}



//show fav


// show and hidden shop
shop.addEventListener("click", shopview)
function shopview() { cart.classList.toggle("hidden")
   if(cartItems.length==0){
      cart.innerHTML=""
      cart.classList.add("hidden");
     
   
    return; }}





function check(id) {
   if (!email) {
      alert("please login first")
      window.location.href = "login.html"
      return;

   };
   const founds = cartItems.find(function (item) { return item.id === id; });
   if (founds) {
      cartItems = cartItems.filter(function (elem) {
         return elem.id !== id;
      })

   }
   else {
      const choseenitem = pr.find(function (item) { return item.id === id; });

      cartItems.push({ ...choseenitem, quantity: 1 });
   }
   localStorage.setItem("cartItems", JSON.stringify(cartItems))
   if(cartItems.length>0){
cartnumber.textContent = cartItems.length;
}
   showselectproduct()
   updatebuttons()



}
function updatebuttons(e) {
   
   const buttons = document.querySelectorAll(".btn-select")
   buttons.forEach(function (btn, index) {
      const id = pr[index].id;
      const founds = cartItems.find(function (elem) {
         return elem.id == id;
      })
      if (founds) {
         btn.textContent = "Remove From Cart"
       
         
         btn.style.backgroundColor="#791507";

               }
      else {
         btn.textContent = "Add To Cart";
          btn.style.backgroundColor="#C68E45";
   
      }
   }
   )
}


function showselectproduct() {
   cart.innerHTML = cartItems.map(function (elem) {
      return ` <div class="w-full  p-1 h-[150px] bg-[#D8BFA1] color-white  mb-2 m-1" > 
                        
                        <div class=" flex flex-row justify-between p-5">
                        <p class="text-lg font-bold ">${elem.name}</p>
                        <p class=""> price: <br> ${elem.price * elem.quantity}$</p>
                        
                        </div>
                     <div class="m-1"> <span  onclick="increaseproduct(${elem.id})" class="increase  hover:bg-gray-600  hover:cursor-pointer  px-2  py-1 rounded bg-gray-900 text-white">+</span>
                     <span class="quant">${elem.quantity}</span>

                     <span   onclick="decreaseproduct(${elem.id})"class="drcrease hover:bg-gray-600   px-3  hover:cursor-pointer  py-1 bg-gray-900 text-white rounded ">-</span>
                     </div>

                        </div>`
   }).join("") + `<a href="cartproduct.html" class="font-bold text-lg text-center text-[#3B0010] ">view all product</a>`;


}

showselectproduct()
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









// logout button

logoutb.addEventListener("click", function (e) {
   e.preventDefault();
   alert("you are logout")
   localStorage.removeItem("email");


   setTimeout(() => {
      logoutb.classList.add("hidden")
      loginb.classList.remove("hidden")
      registerb.classList.remove("hidden")
      cartnumber.classList.add("hidden")

      products.classList.add("hidden")
      name.textContent = ""
      window.location.href = "home.html"
   }, 1000)
});
console.log(cartItems);
//search
const textinput = document.querySelector(".textinput");
const selectoption = document.querySelector(".selectoption");
const send = document.querySelector(".send")
send.addEventListener("click", search)
function search(e) {
   e.preventDefault();
   document.querySelectorAll(".item").forEach(function (elem) {
      elem.classList.add("hidden");
   });
   let text = textinput.value;
   let type = selectoption.value;

   if (type === "name") {
      const prsearch = pr.find(function (elem) {
         return elem.name.trim().toLowerCase() === text.trim().toLowerCase();
      });
      if (prsearch) {
         const element = document.getElementById(`pr-${prsearch.id}`);
         element.classList.remove("hidden");
          
         }

      }
      else {
         alert("please enter a valid search term");
               document.querySelectorAll(".item").forEach(function (elem) {
              elem.classList.remove("hidden");
      });
   }

         if (type === "title") {
          const prsearch = pr.find(function (elem) {
         return elem.title.trim().toLowerCase() === text.trim().toLowerCase();

      });
      if (prsearch) {
         const element = document.getElementById(`pr-${prsearch.id}`);
        
         element.classList.remove("hidden");
      }
      else {
         alert("please enter a valid search term");
          document.querySelectorAll(".item").forEach(function (elem) {
      elem.classList.remove("hidden");
   });
      }


   }}
   textinput.addEventListener("input",research)
   function research(e){

       e.preventDefault();
       if(textinput.value===""){
            document.querySelectorAll(".item").forEach(function (elem) {
      elem.classList.remove("hidden");}
   );
      return textinput.textContent="";

   }
}


  

// npx @tailwindcss/cli -i ./css/input.css -o ./css/output.css --watch 