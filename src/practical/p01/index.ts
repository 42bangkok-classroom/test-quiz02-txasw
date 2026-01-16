import axios from "axios"
import { arrayBuffer } from "node:stream/consumers"

type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export async function getPostalAddress() {
    const users: User[] = (await axios.get("https://jsonplaceholder.typicode.com/users")).data

    const usersArray = Array.from(users)

    if (!users) return []

    const usersMap = usersArray.map(user => ({
        id: user.id,
        name:user.name,
        phone:user.phone,
        address: user.address ?? null
    }))
    
    return usersMap
}