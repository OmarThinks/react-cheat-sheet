const deletePost = (id) => {
	return { type : "DELETE_POST" , id : id }
}

export { deletePost as deletePost}