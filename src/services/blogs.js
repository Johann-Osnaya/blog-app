import axios from 'axios'
const baseUrl = 'https://blog-app-backend-alpha.vercel.app/api/blogs'

let token = null

const setToken = newToken => {
	token = `Bearer ${newToken}`
}

const getAll = async () => {
	const request = await axios.get(baseUrl)
	return request.data
}

const create = async newObject => {
	const config = {
		headers: { Authorization: token },
	}

	const response = await axios.post(baseUrl, newObject, config)
	return response.data
}

const update = async (id, blogObject) => {
	const response = await axios.put(`${baseUrl}/${id}`, blogObject)
	return response.data
}

const erase = async (id) => {
	const config = {
		headers: { Authorization: token },
	}
	const response = await axios.delete(`${baseUrl}/${id}`, config )
	return response.data
}

const createComment = async (id, comment ) => {
	console.log(comment)
	const response = await axios.post(`${baseUrl}/${id}/comments`, comment)
	return response.data
}

export default { getAll, create, setToken, update, erase, createComment }