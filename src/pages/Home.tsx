import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { api } from '../api';
import { PostAlbum } from '../components/PostAlbum';
import { Album } from '../types/type'
import css from '../styles.module.css'

export const Home = () => {

    const [album, setAlbum] = useState<Album[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
     loadAlbum()
    }, [])

    const loadAlbum = async () => {
        setLoading(true)
        let json = await api.getAll()
        setAlbum(json)
        setLoading(false)
    }

    return (
        <div>
            {loading &&
                <div>Carregando</div>
            }
            {!loading &&
                <div>
                    <div>Total de Album: {album.length}</div>
                    {album.map((item, index) => (
                    <PostAlbum id={item.id} key={index} data={item.title} />
                    ))}
            
                </div>
            }
        </div>
    )
}