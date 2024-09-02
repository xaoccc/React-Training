import { useState, useEffect } from "react";
import TableRow from "./tableRow";
import CreateForm from "./createForm";
import UserDetails from "./userDetails";
import NoUsers from "./noUsers";


export default function Table({input, criteria, startSearch}) {
    const [data, setData] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [getUserInfo, setGetUserInfo] = useState({});


    useEffect(() => {
        if (startSearch) {  
            fetch('http://localhost:3030/jsonstore/users')
            .then((res) => res.json())
            .then((result) => {
                setData(Object.values(result));
                console.log(Object.values(result));
                if (startSearch) {                   
                    setData(Object.values(result).filter(userData => userData[criteria] === input));
                }
                
            })
            .catch((error) => console.log(error))
        }
        
    }, [startSearch])


    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/users')
            .then((res) => res.json())
            .then((result) => {
                setData(Object.values(result));               
            })
            .catch((error) => console.log(error))
    }, [data])


    function createUserClickHandler() {
        setShowCreateForm(true);
    }

    function hideUserForm() {
        setShowCreateForm(false);

        
    }

    function showUserInfoClickHandler(e) {
        let userInfo = data.find((entry) => entry._id === e.target.closest('tr').id);
        setGetUserInfo(userInfo);
        setShowUserInfo(true);
    }

    function editUserClickHandler(e) {
        let userInfo = data.find((entry) => entry._id === e.target.closest('tr').id);
        setGetUserInfo(userInfo);
    }
    
    function hideUserInfoClickHandler() {
        setShowUserInfo(false);
    }


    return (


        <div className="table-wrapper" >
            {/* <div className="loading-shade">s
                    <div className="spinner"></div>
                </div> */}
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {(data.length === 0) ? <NoUsers /> : null}
                    {data.map((userData) => <TableRow userData={userData} key={userData._id} createUserClickHandler={createUserClickHandler} showUserInfoClickHandler={showUserInfoClickHandler} editUserClickHandler={editUserClickHandler} />)}
                </tbody>

            </table>
            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>
            
            {(showCreateForm) ? <CreateForm hideUserForm={hideUserForm} /> : null}
            {(showUserInfo) ? <UserDetails hideUserInfoClickHandler={hideUserInfoClickHandler} userInfo={getUserInfo} /> : null}
        </div>
    )
}