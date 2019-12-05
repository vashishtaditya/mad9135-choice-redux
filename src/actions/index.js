
 const fetchUsers = (users) => {
    return {
        type: "FETCH_USERS",
        payload: users
    }
}

export default fetchUsers
