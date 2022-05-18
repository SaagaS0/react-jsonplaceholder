import {Album} from '../types/type'
import css from '../styles.module.css'
import { Link } from 'react-router-dom';

type Props = {
    id: number
    data: string
}

export const PostAlbum = ({id, data}: Props) => {
    return (
        <Link to={`/album/${id}`}>
            <div className={css.albums}>
                <h4>{data}</h4>
            </div>
        </Link>
    )
}

// <div className={css.albums}>
//      <h4>{data.title}</h4>
// </div>