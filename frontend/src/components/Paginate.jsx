import React from "react";

export function Paginate({ pages, changePage }) {

    const fill = new Array(pages).fill();
    return (
        <div className="d-flex justify-content-end">
            <ul className="pagination">
                <li className="page-item" onClick={() => changePage(0)}><a className="page-link" href="#">Previous</a></li>
                { fill.map((page, index) => (
                    <li className="page-item" key={'list' + index} onClick={() => changePage(index)}><a className="page-link" href="#">{(index + 1)}</a></li>
                ))}
                <li className="page-item"><a className="page-link" href="#" onClick={() => changePage(pages)}>Next</a></li>
            </ul>
        </div>
    );
}