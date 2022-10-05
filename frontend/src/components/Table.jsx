import React, { useEffect, useState } from "react";
import { Paginate } from "./Paginate";

export function Table({ headers, items, perPage }) {
    const [countPage, setCountpage] = useState(0);
    const [page, setPage] = useState(0);

    const headersDisplay = headers.map((header, index) =>
        <th key={'th' + index} className="text-center">{header.text}</th>
    );

    const columns = items.slice(page * perPage, page * perPage + perPage).map((item, indexItem) =>
        <tr key={'tr' + indexItem}>
            {headers.map((header, index) => <td key={'td' + index} className="text-center"> {item[header.value]} </td>)}
        </tr>
    );

    useEffect(() => {
        setCountpage(Math.ceil(items.length / perPage));
        if (page * perPage >= items.length && page !== 0) {
            setPage(current => current - 1);
        }
    }, [items])

    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered mb-0">
                    <thead className="table-dark">
                        <tr>
                            {headersDisplay}
                        </tr>
                    </thead>

                    <tbody>
                        {columns}
                    </tbody>
                </table>
            </div>
            {items.length > 5 ? <Paginate pages={countPage} changePage={setPage} /> : ''}
        </>
    );
}