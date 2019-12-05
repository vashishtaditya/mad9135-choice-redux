const fetchComments = (comments) => {
    return {
        type: "FETCH_COMMENTS",
        payload: comments
    }
}

export default fetchComments
