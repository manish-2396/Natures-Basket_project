import login_navbar from "../Components/navbar.js"
document.getElementById('main_export').innerHTML = login_navbar()

import {footerpage} from "../Components/footer.js"

document.querySelector("footer").innerHTML = footerpage();

let data=[
    {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
        name: "E-Gift Voucher",
        size: "500Rs",
        mrp: {m:"MRP: ₹",r:"500"},
        add : "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5559830.jpg"
   },
   {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
        name: "E-Gift Voucher",
        size: "1000Rs",
        mrp: {m:"MRP: ₹",r:"1000"},
        add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
   },
   {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
        name: "E-Gift Voucher",
        size: "2000Rs",
        mrp: {m:"MRP: ₹",r:"2000"},
        add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
   },
   {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
        name: "E-Gift Voucher",
        size: "3000Rs",
        mrp: {m:"MRP: ₹",r:"3000"},
        add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
   },
   {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
        name: "E-Gift Voucher",
        size: "10000Rs",
        mrp: {m:"MRP: ₹",r:"10000"},
        add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
   },
   {
        image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5179afc6-856c-428c-8ff7-41ddcce41710_425x425.jpg",
        name: "E-Gift Voucher",
        size: "5000Rs",
        mrp: {m:"MRP: ₹",r:"5000"},
        add : "https://cdn.vectorstock.com/i/1000x1000/94/61/simple-green-icon-shopping-cart-add-vector-11149461.webp"
   },
   ]

   //displaydata(data);
   window.addEventListener("load",function(){
        displaydata(data);
   })

   document.getElementById("relevance").addEventListener("click",sorted)

   function sorted(){
        let selected=document.getElementById("relevance").value;
       console.log(selected);
       if(selected=="htl"){
            data.sort((a,b) =>{
              return Number(b.mrp.r)-Number(a.mrp.r)
            })
            console.log(data)
            displaydata(data)
       }
       if(selected=="lth"){
            data.sort((a,b) =>{
              return Number(a.mrp.r)-Number(b.mrp.r)
            })
            console.log(data)
            displaydata(data)

       }
   }
   let addtocartarr=JSON.parse(localStorage.getItem("cart")) || [];

   let displaydata=(data)=>{
        document.getElementById("append").innerHTML=null
    data.map(el=>{
       let div=document.createElement("div")
       div.setAttribute("class","append_div")
       let img=document.createElement("img");
       img.src=el.image;
       img.setAttribute("class","image");

       let name= document.createElement("p");
       name.innerText=el.name;

       let size=document.createElement("p");
       size.innerText=el.size;

       let mrp_div=document.createElement("div");
       mrp_div.setAttribute("class","mrp_div");

       let price_div=document.createElement("div");
       price_div.setAttribute("class","price");

       let mrp=document.createElement("p");
       mrp.innerText=el.mrp.m+el.mrp.r;

       price_div.append(mrp)

       let div_add_img=document.createElement("div")
       div_add_img.setAttribute("class","div_add_img")

       let add=document.createElement("img");
       add.src=el.add;
       add.setAttribute("class","add_img")
       add.addEventListener("click",function(){
            addtocart(el)
       })

       div_add_img.append(add);

       mrp_div.append(price_div,div_add_img);

       div.append(img,name,size,mrp_div);

       document.getElementById("append").append(div)

   })
   }
   function addtocart(el){

    addtocartarr.push(el);
    localStorage.setItem("cart",JSON.stringify(addtocartarr))
   }






   //////////////////////////////


   



function enter_mobile(){
     //console.log('click')
     // data.style.display = block
     
     let main_otp = document.getElementById('main_otp_login')
     main_otp.style.display = "block"
 
     let login_form_ok = document.querySelector(".login_form")
     login_form_ok.style.display= "none"
 
 
     }
 
 
 let ok1 = document.getElementById('reg_reg')
 ok1.addEventListener('click',function(){
     enter_mobile(ok1)
 })
 
 
 
 //continue
 
 let arr_mob = JSON.parse(localStorage.getItem("mob")) || []
 
 function continue_details(){
     console.log("continue")
     let main_otp = document.getElementById('main_otp_login')
     main_otp.style.display = "none"
 
     let details_form = document.getElementById('details')
     details_form.style.display = "block"
 
     let mob = document.getElementById('mob').value
      arr_mob.push(mob)
     localStorage.setItem("mob",JSON.stringify(+arr_mob))
 }
 
 
 
 let Continue = document.getElementById("continue")
 
     Continue.addEventListener('click',function(){
          continue_details(Continue)
     
     })
 
 
 // for registeration
 
 function to_reg(){
    // console.log("login")
   
     let login_form_ok = document.querySelector(".login_form")
     login_form_ok.style.display= "block"
 
     let main_otp = document.getElementById('main_otp_login')
     main_otp.style.display = "none"
 }
 
 
 
 
 let log_p = document.getElementById('log_one')
 log_p.addEventListener('click', function(){
         to_reg(log_p)
 })
 
 
 
 
 // for exit
 
 
 function exit_to_nav(){
     console.log("exit")
      document.getElementById('main_otp_login').style.display="none";
      document.getElementById('details').style.display="none";
      document.querySelector(".login_form").style.display="none"
 
      
 
    // document.getElementById('container').style.display="block"
 }
 
 
 let exits = document.getElementsByClassName("exit")
 
 for(let i=0;i<exits.length;i++){
     exits[i].addEventListener('click',function(){
         exit_to_nav(exits)
     })
 }
 
 
 
 
 
 
 //Local storage for registeration form
 
 let form_arr = JSON.parse(localStorage.getItem("myform")) || []
 
 function my_form(){
     event.preventDefault()
 
    var form_obj ={ 
     email : document.getElementById('email').value,
 
     pass : document.getElementById('pass').value
    }
    //console.log("form_obj",form_obj)
    document.getElementById("register").addEventListener("click",function(){
        alert("Registeration successful!")
    })
 
    form_arr.push(form_obj)
    localStorage.setItem("myform",JSON.stringify(form_arr))
 
   
 }
 
 let form_ok = document.getElementById('register').addEventListener('click',function(){
     my_form()
 })
 
 
 //document.getElementById("OTP").innerText= Number(form_arr)
 
 
 //login_data
 
  
 let login_arr = JSON.parse(localStorage.getItem("myform")) || []
 function my_login(){
 
     
     event.preventDefault()
 
     var login_obj= {
          e_email : document.getElementById('e_email').value,
          e_pass : document.getElementById('e_pass').value
     }
 //console.log('login_obj', login_obj)
 
  login_arr.push(login_obj); 
  console.log("login_arr",login_arr)
 
  for(let i=0;i<login_arr.length;i++){
     if(login_obj.e_email == login_arr[i].email ){
 
         if(login_obj.e_pass== login_arr[i].pass){
             //console.log('alert')
             alert('Login Successful')
         }
         else{
             alert('Invalid Credentials')
         }
     }
 
  }
 
 }
 
 
 let login_ok = document.getElementById('login').addEventListener('click', function(){
     my_login()
 })
 
 
 
 
 
 
 
 
 
 
 
 //let normal_obj=[{'x':'apple'},
 // {'x':'banana'},
 // {'x':'pears'},
 // {'x':'grapes'}]
 
 let normal_obj= ['Trending Searches','Organic','Fresh Artisinal Breads','Cold cuts & Seafood', 'Diabetic Friendly Foods', 'L Exclusif','Healthy Alternatives', 'Birthdat & Anniversary Gift Hampers', 'Platters & Dips','Smoked Cheese', 'Ice Cream & Desserts', 'Keto-Paleo']
 
 
 
 function get_querry(normal_arr){
     console.log("normal",normal_arr)
 
     document.getElementById('append').style.display="block"
    
     let div= document.getElementById('append')
     div.innerHTML=null;
     //div.setAttribute("id","querry_ka")
     normal_arr.forEach(function(elem){
         let div_dr= document.createElement('div')
         //let br= document.createElement('br')
         
         
         // let p= document.createElement('p')
         let titles = document.createElement('h3')
         titles.innerText= "*"+elem ;
 
         div_dr.append(titles)
         //let title2= titles.split('/n')
         
         
         
         div.append(div_dr)
         
     
     })
 
 }
 
 let querry = document.getElementById('querry')
 querry.addEventListener('click',function(){
     get_querry(normal_obj)
 })
 
 
 
 
 
 
 
 
 