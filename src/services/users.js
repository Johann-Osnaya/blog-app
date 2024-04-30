import axios from 'axios'
const baseUrl = 'https://blog-app-backend-alpha.vercel.app/api/users'

const getUsers = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

export default { getUsers }