import { FC, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Tabs from '@/components/Tabs';
import Head from 'next/head';
import Image from 'next/image';
import BannerImage from '@/assets/banner.png';
import FooterImage from '@/assets/footer.jpg';
import Category from '@/components/Category';
import styles from '@/styles/Home.module.scss';
import { dataSource } from '@/constans/data'; 

interface Props {
  test: string;
  videoData: any;
}


const Home: FC<Props> = function(props) {
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
        <Navbar />
        <Tabs />
        <Image src={BannerImage} alt='banner' className={styles.banner} />

        <div className={styles.line} />

        <h2>{dataSource.hot.title}</h2>
        <Category list={dataSource.hot.list}/>

        <h2>{dataSource.live.title}</h2>
        <Category list={dataSource.live.list}/>

        <h2>{dataSource.recommend.title}</h2>
        <Category list={dataSource.recommend.list}/>

        <Image src={FooterImage} alt='footer' className={styles.banner}/>
        <footer className={styles.footer}><span>@Bilibili 2023</span></footer>
      </div>
    </>
  )
}

export default Home;

