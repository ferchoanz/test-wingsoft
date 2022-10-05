import React, { useEffect, useState } from "react";
import { get } from "../plugins/axios";
import { error, spinner } from "../plugins/notification";
import { Graph } from "./Graph";



export function Statistic() {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([]);

    const usersBackgroundColors = [
        'rgba(255, 99, 132, 0.5)',
        'rgba(53, 162, 235, 0.5)',
        'rgba(53, 200, 235, 0.5)',
    ];

    const postsBackgroundColors = [
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(53, 162, 235, 0.5)',
        'rgba(53, 200, 235, 0.5)',
    ];

    const loadData = async () => {
        const swal = spinner()
        const response = await get('users/statistics');
        swal.close();

        if (response.status) {
            setUsers(response.data.users);
            setPosts(response.data.posts);
        } else {
            error(response.data.message);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <>
            <h1 className="text-center mt-5">Statistics</h1>
            <Graph
                key={1}
                title="Users Views"
                footers={['Users']}
                arrayData={users}
                colors={usersBackgroundColors}
            />

            <Graph
                key={2}
                title="Most Viewed Posts"
                footers={['Posts']}
                arrayData={posts}
                colors={postsBackgroundColors}
            />  
        </>
    );
} 