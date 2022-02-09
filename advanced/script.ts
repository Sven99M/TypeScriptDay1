var products : Array <{name:string, image:string,price:number,description:string;}>= [
    {
    name: "Schnitzel",
    image: "https://cdn.pixabay.com/photo/2016/11/19/02/22/schnipo-1837703__340.jpg",
    price: 15.00,
    description: "Schwein,Erdäpfel,Salat"
},
{
    name: "Käsespätzle",
    image: "https://img.chefkoch-cdn.de/rezepte/1062121211526182/bilder/668460/crop-960x540/schnelle-kaesespaetzle.jpg",
    price: 15.00,
    description: "Spätzle,Käse,Zwiebel"
},
{
    name: "Rindsrouladen",
    image: "https://www.kuechengoetter.de/uploads/media/1800x1200/04/58234-rindsrouladen-mit-gurkerl-und-speck.jpg?v=1-0",
    price: 15.00,
    description: "Rinds,Gemüse,Erdäpfelpüree"
},
{
    name: "Erdäpfelsalat",
    image: "https://www.gutekueche.at/storage/media/recipe/33711/conv/erdapfelsalat-default.jpg",
    price: 15.00,
    description: "Erdäpfel, Mayodressing"
},
{
    name: "Gurkensalat",
    image: "https://www.gutekueche.at/storage/media/recipe/101825/conv/gurkensalat-mit-sauerrahm-default.jpg",
    price: 15.00,
    description: "Gurken,Essig,Öl"
},
{
    name: "Roter Rüben Salat",
    image: "https://www.gutekueche.at/storage/media/recipe/15780/conv/roter-ruebensalat-mit-kren-default.jpg",
    price: 15.00,
    description: "Rote Rüben, Essig"
},
{
    name: "Kaiserschmarrn",
    image: "https://www.gutekueche.ch/upload/rezept/4327/1600x1200_omas-kaiserschmarren.jpg",
    price: 15.00,
    description: "Eier,Mehl,Milch,Apfelmus"
},
{
    name: "Mohr im Hemd",
    image: "https://img.chefkoch-cdn.de/rezepte/129351055507344/bilder/24105/crop-960x540/mohr-im-hemd-mit-schokosauce-und-sahne.jpg",
    price: 15.00,
    description: "Eier,Mehl,Milch,Schokolade,Schokosauce"
},
{
    name: "Mohnnudeln",
    image: "http://www.vienna-sunday.kitchen/wp-content/uploads/2017/10/04square-Mohnnudeln.jpg",
    price: 15.00,
    description: "Germ,Mohn,Apfelmus"
}
];
for (let val of products) {
document.getElementsByClassName("products")[0].innerHTML += 
`<div class="product col-12 col-md-6 col-lg-4 text-center fw-bold mb-3">
<p class ="product-title h3 m-3">${val.name}</p>
<img class ="product-image" src="${val.image}" width="200"  height="200">
<div class="product-details">
<p class="product-desc m-3">${val.description}</p>
    <p class="product-price h4 m-3">${ val.price} €</p>
    

</div>
</div>
`
}