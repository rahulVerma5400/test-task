import { Navbar } from "@/components/navbar/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Search } from "@/components/Search";
import { useEffect, useState } from "react";

// type ProductsProp = {
//     props : any
// }

export default function Products(props: {data : {items  : []}}){
    console.log(props)
    const [search, setSearch] = useState<string>("")
    const [data,  setData] = useState<[]>([])

    useEffect(() => {
        setData(props.data.items)
    }, [])

    function handleSearchSubmit () {
        console.log(search)
        let data = props.data.items.filter((el:{name : string}) => el.name.includes(search))
        setData(data)
    }

    return (
        <>
            <Navbar />
            <Search setSearch={setSearch} handleSearchSubmit={handleSearchSubmit}/>
            <div className="productContainer">
                {
                    data.map((el:object, i:number) => (
                        <ProductCard {...el} key={i}/>
                    ))
                }
            </div>
        </>
    )
}

export async function getServerSideProps(){
    let data = await fetch('http://localhost:3000/api/products')
    var products = await data.json()
    
    return {
        props : {
            data : products
        }
    }
}