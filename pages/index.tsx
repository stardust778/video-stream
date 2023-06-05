import { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Tabs from '@/components/Tabs';
import Head from 'next/head';
import Image from 'next/image';
import BannerImage from '@/assets/banner.png';
import FooterImage from '@/assets/footer.jpg';
import Category from '@/components/Category';
import styles from '@/styles/Home.module.scss';
import { dataSource, VideoData } from '@/constans/data'; 
import classnames from 'classnames';

interface Props {
  test: string;
  videoData: VideoData;
}


const Home: FC<Props> = function(props) {
  const oldYRef = useRef<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState<boolean>(false);

  const onScroll = () => {
    if (contentRef.current) {
      const { top: newY } = contentRef.current.getBoundingClientRect();
      const diff = newY - oldYRef.current;

      if (diff < 0) {
        // 隐藏
        setHidden(true);
      } else {
        // 显示
        setHidden(false);
      }
    }
  }

  return (
    <>
      <Head>
        <title>视频流分类</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Link href={'/posts/test'}>去test</Link> */}
      <div className={styles.app}>
        <header className={classnames(styles.header, { [styles.hidden]: hidden })}>
          <Navbar title={'首页'}/>
          <Tabs />
        </header>

        <div className={styles.line} />

        <div className={styles.scrollView} onScroll={onScroll}>
          <Image src={BannerImage} alt='banner' className={styles.banner} />
          
          <div className={styles.content} ref={contentRef}>
            <h2>{dataSource.hot.title}</h2>
            <Category list={dataSource.hot.list}/>

            <h2>{dataSource.live.title}</h2>
            <Category list={dataSource.live.list}/>

            <h2>{dataSource.recommend.title}</h2>
            <Category list={dataSource.recommend.list}/>
          </div>

          <Image src={FooterImage} alt='footer' className={styles.banner}/>
          <footer className={styles.footer}><span>@Bilibili 2023</span></footer>
        </div>
      </div>
    </>
  )
}

export default Home;

