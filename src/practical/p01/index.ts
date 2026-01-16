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


export async function getPostalAddress() {
    const users: User[] = (await axios.get("https://jsonplaceholder.typicode.com/users")).data

    if (users?.length == 0 ) return []
    const expect_user = Array.from(users.map(u => {
        return{
            id: u.id,
            name: u.name,
            phone: u.phone,
            address: u.address ?? null
        }

    }))
    return expect_user
}

getPostalAddress().then(u => {
    console.log(u)
})