export const SearchField = ({setSearch,search}) => {
    return (
        <div className="srch_bar">
            <div className="stylish-input-group">
                <input onChange={(e)=>setSearch(e.target.value)} value={search} id="search" type="text" className="search-bar" placeholder="Search" />
                <span className="input-group-addon">
                    <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                </span>
            </div>
        </div>
    )
}