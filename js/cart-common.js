




  let cartItems= JSON.parse(localStorage.getItem("cartItems")) || [];


function showselectproduct(container){  
    if(cartItems.length==0){  return container.innerHtml="";
        
    }
       container.innerHtml=cartItems.map(function(elem){ return` <div class="w-full  p-1 h-[150px] bg-[#D8BFA1] color-white  mb-2 m-1  " > 
                        <div class=" flex flex-row justify-between p-5">
                        <p class="text-lg font-bold ">${elem.name}</p>
                        <p class=""> price: ${elem.price}</p>
                        
                        </div>
                     <div class="m-1"> <span  onclick="increaseproduct(${elem.id})" class="increase   hover:cursor-pointer  px-2  py-1 rounded bg-gray-900 text-white">+</span>
                     <span class="quant">${elem.quantity}</span>

                     <span   onclick="decreaseproduct(${elem.id})"class="drcrease   px-2  hover:cursor-pointer  py-1 bg-gray-900 text-white rounded ">-</span>
                     </div>

                        </div>`
                     }).join("");

                    }
                     showselectproduct()
                  function increaseproduct(id){
                    const elemselect= cartItems.find(function(elem){return elem.id==id})
                    elemselect.quantity++;
                    localStorage.setItem("cartItems",JSON.stringify(cartItems));
                     showselectproduct();


                  }

                  function decreaseproduct(id){
                      const elemselect= cartItems.find(function(elem){return elem.id==id})
                      if(elemselect.quantity>1)
                   { elemselect.quantity--;
                    }
                     else{
                       cartItems= cartItems.filter(function(elem){
                           return elem.id!==id;
                        })

                     }

                     localStorage.setItem("cartItems",JSON.stringify(cartItems));
                     showselectproduct();
                  }
