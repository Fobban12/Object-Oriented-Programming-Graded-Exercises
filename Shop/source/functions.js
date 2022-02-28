const changeElementProducts = document.getElementById("Content");

//Not done cart.
function cartLook(){  
changeElementProducts.innerHTML =""
changeElementProducts.innerHTML =`
<div>
 <div>
  <div>Img</div>
  <div> Name </div>
  <div> Quantity </div>
  <div> Unit Price</div>
  <div> Unit price*quantity</div>
 </div>
 <div>
 <div> Go back </div>
 <div>Purchase</div>
 </div
</div>

`
}
//Details for the chosen product
function productDetailLook(product)
{
    changeElementProducts.innerHTML =""
    changeElementProducts.innerHTML = 
    `
    <div id="ProductDetails">
    <div><button id="Button" onclick="productLook()"> Go back</button></div>
      <div><img id="ImageProductDetails" src="${product.Images}"/></div>
      <div>${product.Name}</div> 
      <div> ${product.Price}&euro; </div>
      <div id="BuyNow"><button id="Button" onclick="cartLook()"> Buy now </Button> </div>
    </div>
    `
    
    
}

//Page for all products.
function productLook(){
    let target = document.getElementById("Content")
    target.innerHTML =""
    for (let i = 0; i < Products.length; i++)
    {
    let User = document.createElement('div');
    User.id = "Product";
    User.onclick = () => productDetailLook(Products[i])
    target.appendChild (User);
    
         User.innerHTML = `
        <div id="Product">
        <button id="Button" onclick="productDetailLook()"><img id="Image" src="${Products[i].Images}"/></button>
        <div><button id="Button" onclick="productDetailLook()">${Products[i].Name}</button></div>
        <div>${Products[i].Info}</div>
        <div>${Products[i].Price}&euro;</div>
        <div>-----------------------------------------------</div>
        </div>`
    
};}

// No idea how to get external json to work without running a server so this is in the place of that. Dunno if this counts as 2p.
 const Products=
[
    {
        id:1,
        Images: "https://media.partioaitta.fi/detail/2400000939405_a_midland_heavy_flannel_shirt_sasta_110.jpg",
        Name: "Shirt",
        Info: "For Men ",
        Price: 45
    },
    {
        id:2,
        Images: "https://media.gq-magazine.co.uk/photos/604a389378d908f40e6180ae/master/w_1920,h_1280,c_limit/Jeans_0006_Polo%20raplh%20lauren.jpg",
        Name: "Jeans",
        Info: "For Women",
        Price: 20
    },
    {
        id:3,
        Images:"https://www.fjallraven.com/4a49b3/globalassets/catalogs/fjallraven/f8/f898/f89813/f550/high_coast_trail_trousers_w_89813-550_a_main_fjr.jpg?width=2000&height=2000&mode=BoxPad&bgcolor=fff&quality=80",
        Name: "Trousers",
        Info: "For Men",
        Price: 20
    },
    {
        id:4,
        Images:"https://assets.adidas.com/images/w_600,f_auto,q_auto/e510f1d2d9dd4fb0a55fa8030006e4f0_9366/Solid_Crew_Socks_3_Pairs_Black_S21490_03_standard.jpg",
        Name: "Socks",
        Info: "For all",
        Price: 20
    },
    {
        id:5,
        Images:"https://img.joomcdn.net/94dbc89bdc6cdcdf6482894f33d534679a700318_original.jpeg",
        Name: "Jacket",
        Info: "For Men",
        Price: 20
    },
    {
        id:6,
        Images:"https://www.lafuma.com/media/catalog/product/cache/18/image/9df78eab33525d08d6e5fb8d27136e95/l/f/lfv11521-4809-bonnet-femme-gris-wonder-beanie-w_1.jpg",
        Name: "Beanie",
        Info: "For all",
        Price: 20
    },
    {
        id:7,
        Images:"https://n.nordstrommedia.com/id/sr3/32ed84e7-e575-4420-90cf-531d6ff67f36.jpeg?h=365&w=240&dpr=2",
        Name: "Sneakers",
        Info: "For Women",
        Price: 20
    },
    {
        id:8,
        Images:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a50d62bd-5802-47cd-8952-31e746332ecc/react-miler-2-road-running-shoes-HzpXdn.png",
        Name: "Running shoes",
        Info: "For all",
        Price: 20
    },
    {
        id:9,
        Images:"https://www.fjallraven.com/49be04/globalassets/catalogs/fjallraven/f8/f871/f87122/f030/greenland_winter_jacket_m_87122-030_a_main_fjr.jpg?width=680&height=680&mode=BoxPad&bgcolor=fff&quality=80",
        Name: "Winter jacket",
        Info: "For all",
        Price: 20
    },
    {
        id:10,
        Images:"https://www.rei.com/media/product/188309",
        Name: "Swimsuit",
        Info: "For Men",
        Price: 20
    },
]
