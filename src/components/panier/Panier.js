import "./panier.css"

function Panier(props) {
    return (
        <div>
            <div className={props.item.unity == 0 ? "basket hide" : "basket"}> 
            {/* LE PRODUIT DISPARAIT QUAND IL N'YA PLUS DE QUANTITE  */}
                <div className="product">
                    <img src={props.item.url} alt="" className="imgBasket" />
                    <p>{`Produit: ${props.item.nom} || Unités: ${props.item.unity} `}</p>
                </div>
                <button onClick={props.unbuy} className="btnRendre">Rendre</button> 
                {/* LE BOUTON DISPARAIT QUAND IL N'Y A PLUS DE QUANTITE */}
            </div>
        </div>
    )
}

export default Panier;
// la class pour le bouton si jamais ça bug 
// className={props.item.unity == 0 ? "hide" : "btnRendre "}

