import { useEffect, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import { api } from '../api';
import { PostAlbum } from '../components/PostAlbum';
import { Album, Photo } from '../types/type'
import css from '../styles.module.css'

export const PhotoT = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [photoInfo, setPhotoInfo] = useState<Photo>();

    useEffect(() => {
        if(params.id) {
            loadPhoto(params.id);
        }
    }, []);

    const loadPhoto = async (id: string) => {
        setLoading(true);
        const photo = await api.getPhoto(id);
        setPhotoInfo( photo );
        setLoading(false);
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            {loading && "Carregando..."}

            {photoInfo &&
                <>
                    <button onClick={handleBackButton}>Voltar</button>
                    <p>{photoInfo.title}</p>
                    <img src={photoInfo.url} alt={photoInfo.title} />
                </>
            }
        </div>
    )
}