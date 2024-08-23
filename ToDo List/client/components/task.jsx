import { useState, useEffect } from "react";

// 3. Destructure props into id, title, status, changeStatusHandler and get them
export default function Task({_id, title, status, changeStatusHandler}) {       

    // 4. Pass changeStatusHandler to the button event click listener
    function changeStatus() {
        changeStatusHandler(_id)
    }

    return (
        <tr _id={_id} className={`todo ${(status) ? "is-completed" : ""}`}>
            <td>{title}</td>
            <td>{(status) ? "Complete" : "Incomplete"}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={changeStatus}>Change status</button>
            </td>
        </tr>
    )
}