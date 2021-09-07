// import Image from 'next/dist/client/image'

const HeroComponent = (props) => {
  const { src, name, mdContent } = props
  return (
    <div className='p-8 rounded-md h-auto bg-white min-w-1/2 max-w-1/2 sm:w-3/6 lg:max-w-3/4'>
      <div className='flex justify-center'>
        <img
          className='w-36 h-36 rounded-full object-cover mb-8'
          src={src}
        />
      </div>
      <span className='text-4xl font-extrabold'>
        {name}
      </span>
      <p className='pt-4 pb-4'>
        {mdContent}
      </p>
    </div>

  )
}

export default HeroComponent
