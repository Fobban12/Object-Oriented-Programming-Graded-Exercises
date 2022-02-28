

const changeElementProducts = document.getElementById("Content");

function cartLook(){changeElementProducts.innerText = "Shopping cart stuff"}
function productDetailLook()
{
    changeElementProducts.innerText = "Shopping cart stuff"
}



function productLook(){
   changeElementProducts.innerHTML = ""

    for (let i = 0; i < Products.length; i++)
    {
    
         changeElementProducts.innerHTML += `
        <div id="Product">
        <button id="Button" onclick="productDetailLook()">${Products[i].Name}</button>
        ${Products[i].Info}
        ${Products[i].Price}
        </div>`
    
    };}

// No idea how to get external json to work without running a server so this is in the place of that. Dunno if this counts as 2p.
 const Products=
[
    {
        id:1,
        Name: "Shirt",
        Info: "Stuff",
        Price: 20
    },
    {
        id:2,
        Name: "Jeans",
        Info: "Stuff",
        Price: 20
    },
    {
        id:3,
        Name: "Trousers",
        Info: "Stuff",
        Price: 20
    },
    {
        id:4,
        Name: "Socks",
        Info: "Stuff",
        Price: 20
    },
    {
        id:5,
        Name: "Jacket",
        Info: "Stuff",
        Price: 20
    },
    {
        id:6,
        Name: "Beanie",
        Info: "Stuff",
        Price: 20
    },
    {
        id:7,
        Name: "Sneakers",
        Info: "Stuff",
        Price: 20
    },
    {
        id:8,
        Name: "Running shoes",
        Info: "Stuff",
        Price: 20
    },
    {
        id:9,
        Name: "Winter jacket",
        Info: "Stuff",
        Price: 20
    },
    {
        id:10,
        Name: "Swimsuit",
        Info: "Stuff",
        Price: 20
    },
]
