export class lignePanier{
    constructor(art){
        this.url=art.url;
        this.titre=art.titre;
        this.quantite=art.quantite
        this.prixTotal=art.prix*this.quantite;
    }

    render(){
        return `
                <tr>
                    <td> <img src="${this.url}"> </td>
                    <td> ${this.titre} </td>
                    <td>${this.quantite}</td>
                    <td> ${this.prixTotal} </td>
                </tr>
            `; 
    }
}