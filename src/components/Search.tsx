type SearchProps = {
    setSearch : any;
    handleSearchSubmit : any
}

export const Search = ({setSearch, handleSearchSubmit} : SearchProps) => {
    return (
        <div className="searchBar">
            <input placeholder="Search Products" type='text' onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={handleSearchSubmit}>Search</button>
        </div>
    )
}