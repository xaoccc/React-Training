import { useState } from "react";
import Pagination from "./pagination";
import SearchBar from "./searchBar";
import Table from "./table";

export default function Section() {

    const [criteria, setCriteria] = useState('');
    const [input, setInput] = useState('');   
    const [startSearch, setStartSearch] = useState(false); 

    function search(e) {
        e.preventDefault();    
        setInput(document.querySelector('.search-input-container input').value);    
        setCriteria(document.querySelector('.filter select').value);
        
        setStartSearch(true);      

    }



    return (
        <section className="card users-container">
            <SearchBar search={search} />            
            <Table input={input} criteria={criteria} startSearch={startSearch} />
            <Pagination />
        </section>
    )
}