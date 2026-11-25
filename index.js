const articles = [
    { id: 1, titre: "Femmes noires",  prix: 25000, image: "images/blackness.jpg" },
    { id: 2, titre: "Girls in Tech", prix: 18000, image: "images/deux.jpg" },
    { id: 3, titre: "Femme musulmane", prix: 27500, image: "images/muslima.jpg" },
    { id: 4, titre: "Jigeen ci Tech", prix: 20000, image: "images/trois.jpg" },
    { id: 5, titre: "Femme dans la Tech", prix: 25000, image: "images/un.jpeg" },
    { id: 6, titre: "Infra IT", prix: 18000, image: "images/wallpaper-1.jfif" },
    { id: 7, titre: "Wallpaper", prix: 27500, image: "images/wallpaper-2.jpeg" },
    { id: 8, titre: "Equipe foot nationnal", prix: 20000, image: "images/wallpaper-3.jpg" },
    { id: 9, titre: "Galaxy", prix: 25000, image: "images/wallpaper-4.png" },
    { id: 10, titre: "Galaxy Bis", prix: 18000, image: "images/wallpaper-5.jpg" },
    { id: 11, titre: "Ubuntu", prix: 27500, image: "images/wallpaper-6.jpg" },
    { id: 12, titre: "Infra IT Bis", prix: 20000, image: "images/wallpaper-7.jpg" },
    { id: 13, titre: "Femme noire", prix: 25000, image: "images/wallpaper-8.jpg" },
    { id: 14, titre: "Root", prix: 18000, image: "images/wallpaper-9.jpg" },
    { id: 15, titre: "Black Hat", prix: 27500, image: "images/wallpaper-10.jfif" },
    { id: 16, titre: "White Hat", prix: 20000, image: "images/wallpaper-11.jpg" },
    { id: 17, titre: "Ubuntu Bis", prix: 18000, image: "images/wallpaper-13.jpg" },
    { id: 18, titre: "Wallpaper Bis", prix: 27500, image: "images/wallpaper-14.png" },
    { id: 19, titre: "Intelligence", prix: 20000, image: "images/wallpaper-15.jpg" },
    { id: 20, titre: "Data", prix: 25000, image: "images/wallpaper-17.jpg" },
    { id: 21, titre: "Fire Wallpaper", prix: 18000, image: "images/wallpaper-18.jpg" },
    { id: 22, titre: "Archi IT", prix: 27500, image: "images/wallpaper-19.jpg" },
    { id: 23, titre: "Hacking", prix: 20000, image: "images/wallpaper-20.jpg" },
    { id: 24, titre: "World Data", prix: 25000, image: "images/wallpaper-21.jpg" },
    

];

const presentationArticles = document.getElementById("articlesDispo");
const contenuPanier =document.getElementById("contenuPanier")

let title = []
let price = []
let lien= []
function AfficherEntete(){
    let entete=`<h1>AFRO PIXEL</h1>
        <h2>LA REFERENCE DE LA VENTE D'IMAGES DE QUALITE</h2>
        <button type="button" id="bp" >
            <img src="images/cart-logo.png" alt="Panier" >
            <p>0</p>
        </button>`
        document.querySelector("header").innerHTML+=entete
}
function afficherArticles() {
    let tableauArticles = "";
    let i=0
    articles.forEach(article => {
        i+=1
        title[i] = article.titre
        price[i]= article.prix
        lien[i]= article.image
        tableauArticles += `
            <div class="artcl">
                <img src="${article.image}" alt="${article.titre}">
                <p>${title[i]}</p>
                <p>${price[i]} FCFA</p>
                <div class="AjoutRetrait">
                    <button onclick=ajouterArticle(${i})>+</button>
                    <p class="quantite${i}">0</p>
                    <button onclick=retirerArticle(${i})>-</button>
                </div>
            </div>
        `;
    });
    presentationArticles.innerHTML = tableauArticles;
}

function ajouterArticle(j) {
    let quantite=document.querySelector(".quantite"+j)
    let valeur=Number(quantite.innerHTML)
    quantite.innerHTML=valeur+1
}

function retirerArticle(j) {
   let quantite=document.querySelector(".quantite"+j)
    let valeur=Number(quantite.innerHTML)
    if (valeur>0)
        quantite.innerHTML=valeur-1
}
 

AfficherEntete()
afficherArticles();
