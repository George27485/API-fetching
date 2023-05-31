async function fetchProductData() {
    try {
      let response = await fetch('https://dummyjson.com/products/');
      let translatedData = await response.json();
      let actualProductData = translatedData;
      console.log(actualProductData);
      return actualProductData;
    } catch (error) {
      console.error(error);
    
    } 
  }
  
  async function renderProducts() {
    let prodContainer = document.getElementById("products-container");
    let myproducts = await fetchProductData();
  
    for(let i =0; i < myproducts.length; i++){
        let myCurrProductObj = products[i];
      let newProductEle = document.createElement('p');
      newProductEle.innerText = `${myCurrProductObj.title}  ${myCurrProductObj.price}`;
      newProductEle.style.border = "3px solid black";
      prodContainer.appendChild(newProductEle);
    };
  }
  
  async function fetchPostData() {
    try {
      let postResponse = await fetch('https://dummyjson.com/posts/');
      let translatedPostData = await postResponse.json();
      let actualPostData = translatedPostData;
      console.log(actualPostData);
      return actualPostData;
    } catch (error) {
      console.error(error);
      
    }
  }
  
  async function renderPost() {
    let poContain = document.getElementById("posts-container");
    let myposts = await fetchPostData();
  
    for(let i = 0; i < myposts.length; i++){
        let myCurrPostObj= myposts[i];
      let newPostEle = document.createElement('p');
      newPostEle.innerText = myCurrPostObj.title;
      newPostEle.style.border = "3px solid red";
      poContain.appendChild(newPostEle);
    };
  }
 
    renderProducts();
    renderPost();
  