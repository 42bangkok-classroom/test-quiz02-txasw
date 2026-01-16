import axios from "axios"

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

export type ExpectUser = {
    id: number
    name: string
    phone: string
    address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  } | null
}

export async function getUsers(): Promise<ExpectUser[]> {
    const users: User[] = (await axios.get("https://jsonplaceholder.typicode.com/users")).data

    const usersArray = Array.from(users)

    if (!usersArray) return []
    return usersArray
}

export async function getPostalAddress() {
    
    const usersArray = await getUsers()

    const usersMap: ExpectUser[] = usersArray.map(user => ({
        id: user.id,
        name:user.name,
        phone:user.phone,
        address: user.address ?? null
    }))
    
    return usersMap
}