import Head from 'next/head'
import CollectionsData from '../components/organisms/Hero/CollectionsData'
import HeroComponent from '../components/organisms/Hero/HeroComponent'

const heropayload =
  {
    src: 'https://avatars.githubusercontent.com/u/11522217?v=4',
    name: 'Xiao Zhong',
    mdContent: 'Hello! This is Xiao Zhong 👋. 💻 I’m a full-stack software engineer apprentice at Techtonica 🌱 I’m currently learning the PERN (PostgreSQL, Express, React, Node) stack. 👩‍🎓 I am a Finance PhD-turned software engineer excited about incorporating business acumen in building efficient and scalable algorithm'
  }

const collectionspayload = {
  reponame: 'starter-nextjs-tailwindcss',
  pr: 'PR / 01',
  details: 'feat (initial)'
}

export default function Home () {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col items-center align-items bg-[#29b5ed] p-4 h-screen'>
        <HeroComponent {...heropayload} />
        <CollectionsData {...collectionspayload} />
      </div>
    </>
  )
}
