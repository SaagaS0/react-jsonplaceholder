import { Link } from 'react-router-dom';
import {Photo} from '../types/type'
import css from '../styles.module.css'

type Props = {
    data:Photo
}

export const PhotoItem = ({data}: Props) => {
    return (
        <Link to={`/photo/${data.id}`}>
            <div className={css.photos}>
                <img src={data.thumbnailUrl} alt={data.title} />
            </div>
        </Link>
    )
}

// <img src={data.thumbnailUrl} alt={data.title} />