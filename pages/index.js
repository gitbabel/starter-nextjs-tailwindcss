import Head from 'next/head'
import HeroComponent from '../components/organisms/Hero/HeroComponent'

const apollopayload =
  {
    src: 'https://avatars.githubusercontent.com/u/11522217?v=4',
    name: 'Xiao Zhong',
    mdContent: 'Hello! This is Xiao Zhong 👋. 💻 I’m a full-stack software engineer apprentice at Techtonica 🌱 I’m currently learning the PERN (PostgreSQL, Express, React, Node) stack. 👩‍🎓 I am a Finance PhD-turned software engineer excited about incorporating business acumen in building efficient and scalable algorithm'
  }

export default function Home () {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex justify-center bg-[#29b5ed] p-4 h-screen'>
        <HeroComponent props={apollopayload} />
      </div>
    </>
  )
}
