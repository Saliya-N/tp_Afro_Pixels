import {lignePanier} from './lignePanier.js'

export class Panier{
    constructor(){
        this.lignesPanier=[];
    }

    render(){
         let entete = "";
        entete +=`
            <button type="button" id="croix" >X</button>
            <table>
                <caption>Mon Panier</caption>
                <tr>
                    <th></th>
                    <th>Articles</th>
                    <th>Quantite</th>
                    <th>Prix</th>
                </tr>
            </table>
        ` ;
        let tableau= ""
        for (const lp of this.lignesPanier) {
            if(lp.quantite>0)
            {tableau += `
                <tr id="lp${lp.url}">
                    <td> <img src="${lp.url}"> </td>
                    <td> ${lp.titre} </td>
                    <td>${lp.quantite}</td>
                    <td> ${lp.prixTotal} </td>
                </tr>
            `}
        }
        let pied =  `
            <p>Total:</p>
            <button type="button" id="commande" >COMMANDER</button>
        `
        document.querySelector("#contenuPanier").innerHTML= entete
        document.querySelector("table").innerHTML+= tableau
        document.querySelector("#contenuPanier").innerHTML+= pied

        document.getElementById("croix").addEventListener("click", () => {
        document.getElementById("contenuPanier").style.display = "none";
    });
    }

    ajouterAuPanier(art){
        let trouve=false
        for (const lp of this.lignesPanier) {
            if( lp.titre == art.titre) {
                lp.quantite+=1
                lp.prixTotal=lp.quantite*art.prix
                this.render()
                trouve=true
                break
            }
        }
        if (trouve==false) {
            this.lignesPanier.push(new lignePanier(art))   
            this.render()
        }
        this.calculerTotal()
        this.quantiteArticle()
    }

     retirerDuPanier(art){
        for (const lp of this.lignesPanier) {
            if( lp.titre == art.titre && lp.quantite>0) {
                lp.quantite-=1
                lp.prixTotal=lp.quantite*art.prix
                this.render()
                if (lp.quantite==0) {
                   const lpSupp=document.getElementById("lp"+lp.url)
                   lpSupp.remove();
                }
                break
            }
        }
        this.calculerTotal()
        this.quantiteArticle()
    }

    afficherPanier(){
        let bp=document.getElementById("bp")

        bp.addEventListener('click', ()=>{
        document.getElementById("contenuPanier").style.display='block';
        this.quantiteArticle()
        this.calculerTotal()
        })
    }

    calculerTotal() {
        let total = 0
        for (const lp of this.lignesPanier) {
            total += lp.prixTotal;
        }
            document.querySelector("#contenuPanier p").innerHTML = `Total : ${total} Fcfa`
    }

    quantiteArticle(){    
        let total = 0;
        for (const lp of this.lignesPanier) {
            total += lp.quantite;
        }
        document.querySelector("#bp").lastElementChild.innerHTML = `${total}`
    }
}