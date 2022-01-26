import "./panier.css"

function Panier(props) {
    return (
        <div>
            <div className={props.item.unity == 0 ? "basket hide" : "basket"}>
                <div className="product">
                    <img src={props.item.url} alt="" className="imgBasket" />
                    <p>{`Produit: ${props.item.nom} || Unités: ${props.item.unity} `}</p>
                </div>
                <button onClick={props.unbuy} className={props.item.unity == 0 ? "hide" : "btnRendre "}>Rendre</button>
            </div>
            {/* {console.log(props.item)} */}
        </div>
    )
}

export default Panier;

