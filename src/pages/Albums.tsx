import { useEffect, useState } from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import { api } from '../api';
import { PostAlbum } from '../components/PostAlbum';
import { Album, Photo } from '../types/type'
import css from '../styles.module.css'
import { PhotoItem } from '../components/PostPhoto';

export const Photos = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)
    const [photo, setPhoto] = useState<Photo[]>([])
    const [photoInfo, setPhotoInfo] = useState<Album>({id: 0, title: '', userId: 0});


    useEffect(() => {
        if(params.id) {
            loadPhotos(params.id);
            loadPhotoInfo(params.id)
        }
    }, []);

    const loadPhotos = async (id: string) => {
        setLoading(true);
        const photos = await api.getPhotosFromAlbum(id)
        setPhoto(photos)
        setLoading(false)
    }

    const loadPhotoInfo = async (id: string) => {
        const albumInfo = await api.getAllId(id);
        setPhotoInfo(albumInfo)
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            <button onClick={handleBackButton}>Voltar</button>

            {loading && "Carregando..."}

            <h1>{photoInfo.title}</h1>

            {photo.map((item, index) => (
                <PhotoItem
                    key={index}
                    data={item}
                />
            ))}
        </div>
    )

}