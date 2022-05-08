

    let cartData = JSON.parse(localStorage.getItem("cart")) || [];



    var total = cartData.reduce(function(sum, elem, index, arr)
    {
        return sum + Number(elem.price)
    }, 0)

    var length = cartData.length;

    console.log(total)

    document.querySelector("#alrt").innerText = ` items in your cart ${length} total amount is ${total}`

    
    cartData.map(function(el, index)
    {
        let box = document.createElement("div")
        box.setAttribute = ("class", "innerBox");

        let delivery = document.createElement("p")
        delivery.innerText = el.delivery;
        delivery.setAttribute("class", "del1");

        let img1 = document.createElement("img")
        img1.src = el.imgUrl;
        img1.setAttribute("class", "im1")

        let name1 = document.createElement("h6")
        name1.innerText = el.name;


        let quantity = document.createElement("p")
        quantity.innerText = el.qty;

        let iner = document.createElement("div");
        iner.setAttribute("id", "inpr")

        let offer = document.createElement("p")
        offer.inerText = el.offer;


        let strickedoffprice = document.createElement("p")
        strickedoffprice.innerText = el.stPrice;
        strickedoffprice.setAttribute("class", "stpr");


        let price = document.createElement("p")
        price.innerText = el.price;
        price.setAttribute("class", "pric");


        var btn = document.createElement("button")
        btn.innerText = "Remove"
        btn.addEventListener("click", function()
        {
            removeItem(el, index)
        })

        

        iner.append(strickedoffprice, price);

        box.append(img1,delivery, name1, quantity, offer, btn);

        box.append(iner);

        document.querySelector("#cartContainer").append(box);

    });

    function removeItem(el, index)
    {
        console.log(el, index)
        cartData.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(cartData))
        window.location.reload()
    }

