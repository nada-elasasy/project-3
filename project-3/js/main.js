var allProducts = document.querySelectorAll(".btn");
var content = document.querySelector("#content");
var btn1 = document.querySelector("#btn1");

allProducts.forEach(function(item){
    item.onclick = function(){
        content.innerHTML += item.textContent;
        btn1.style.display = "block";

    }

}

);

