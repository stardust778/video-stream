import { FC, HTMLAttributes } from 'react';
import { VideoData } from '@/constans/data';
import styles from './index.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  list: VideoData[];
}

const Category: FC<Props> = (props) => {
  const { list, ...divProps } = props;
  return (
    <div className={styles.category} {...divProps} >
       <ul>
        {list.map(videoData => (
          <li key={videoData.id}>
            <video 
              src={videoData.src} 
              loop 
              muted 
              data-video-id={videoData.id}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category;