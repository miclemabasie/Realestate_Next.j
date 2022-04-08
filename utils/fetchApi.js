import axios from 'axios'


export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'e77062eb91msh4dde1a91ecc4f2cp11902djsn277f35de9bd9'
          },
    })

    return data
}

