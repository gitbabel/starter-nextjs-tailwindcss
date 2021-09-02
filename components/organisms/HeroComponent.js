// import Image from 'next/dist/client/image'

// const props = [
//   {
//     src: 'https://avatars.githubusercontent.com/u/11522217?v=4',
//     mdContent: 'Hello! This is Xiao Zhong 👋. 💻 I’m a full-stack software engineer apprentice at Techtonica 🌱 I’m currently learning the PERN (PostgreSQL, Express, React, Node) stack. 👩‍🎓 I am a Finance PhD-turned software engineer excited about incorporating business acumen in building efficient and scalable algorithm'
//   }
// ]

const HeroComponent = ({ props }) => {
  const { src, name, mdContent } = props
  return (
    <div className='p-5 rounded-md h-auto bg-white w-1/2'>
      <div className='flex justify-center'>
        <img
          className='w-36 h-36 rounded-full object-cover mb-8'
          src={src}
        />
      </div>
      <span className='text-4xl spanb-4'>
        {name}
      </span>
      <p>
        {mdContent}
      </p>
    </div>

  )
}

export default HeroComponent
