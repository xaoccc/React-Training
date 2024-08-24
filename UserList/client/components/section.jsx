import Pagination from "./pagination";
import SearchBar from "./searchBar";
import Table from "./table";


export default function Section() {
    return (
        <section className="card users-container">
            <SearchBar />            
            <Table />
            <Pagination />
        </section>
    )
}