type ProductCardType = {
    name : string;
    description : string;
    price : number;
}

export const ProductCard = ({
    name ,
    description,
    price
} : ProductCardType) => {
    return (
        <div className="productCard">
            <div>
                <p>{name}</p>
                <div>
                    <span>{description}</span>
                    <span>{price}</span>
                </div>
            </div>
        </div>
    )
}