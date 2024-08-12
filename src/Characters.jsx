import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'

function Characters() {
    const [characters,setCharacters] = useState([])
    const fetchData = async () => {
        try {
            const charData = await axios.get(`https://66ba1cfdfa763ff550fad850.mockapi.io/got`)
            setCharacters(charData.data)
        } catch (error) {
            alert("Something went wrong")
        }
    }
    useEffect(() => {
        fetchData()
    },[])
    return (
        <div className='container'>
            
            <div className='row'>
                <div className='col-lg-12 text-center mb-3'>
                    <h1>Game of Thrones</h1>
                    <Link to={"/modal"} className='btn btn-primary'>Create</Link>
                </div>
            </div>
           
            <div className='row'>
                {
                    characters.map((character) => {
                        return <Card character={character} />
                    })
                }
            </div>
            <Outlet/>
        </div>
    )
}

export default Characters