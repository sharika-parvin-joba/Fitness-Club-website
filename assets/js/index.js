// const productName=document.querySelectorAll('.product-name')
// const productPrice=document.querySelectorAll('.product-prices')

// const url='https://fakestoreapi.com/products';


// async function setUrl(){
//     const response= await fetch(url);
//     const data=await response.json()
//     console.log(data)
   
// }
// setUrl();


// const displayProducts=(products)=>{
//     const productDiv=document.getElementById('products-div')
//     productDiv.innerHTML=''
    
//     products.foreach(product=>{
//         const newDiv=document.createElement('div')
//         newDiv.classList.add('col');
//         newDiv.innerHTML=`<div class="col-md-4 col-12">
//         <div class="m-2">
//             <img src="${product.image}" alt="" class="img-fluid">
//             <p class="product-title fs-4 fw-bold mb-0 product-name">${product.category}</p>
//             <p class="product-price fs-5 fw-bold product-prices"><strike>$15.75</strike>  ${product.price}</p>
//             <button class="btn1">ADD TO CARD</button>
//         </div>
//     </div>;
//         `
//         productDiv.appendChild(newDiv)
//     })
// }

