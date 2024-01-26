import './SearchBar.css';

export default function SearchBar({onSearchChange}) {

    function updateSearchString (event) {
        const newSearchString = event.target.value;
        onSearchChange(newSearchString);
    }

    return (
        <div className="searchBox">
            <h3 className='searchHeading'>Search</h3>
            <input type="text" className='inputField' onChange={updateSearchString}/>
        </div>
    )
}