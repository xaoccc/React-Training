import Pagination from "./pagination";
import SearchBar from "./searchBar";
import Table from "./table";

export default function Section() {
    return (
        <section className="card users-container">
            <SearchBar />

            <div className="table-wrapper">
                {/* <div className="loading-shade">
                    <div className="spinner"></div>
                </div> */}
                <Table />
            </div>

            <button className="btn-add btn">Add new user</button>
            <Pagination />

        </section>
    )
}