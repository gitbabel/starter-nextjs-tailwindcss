import GithubGlyph from '../../atoms/GithubGlyph'

import { gql, useQuery } from '@apollo/client'

const CollectionsData = (props) => {
  const { reponame, pr, details } = props

  const GET_COLLECTIONS = gql`{
    collections {
      uuid,
      title,
      description,
      repository,
    }
  }`

  console.log(GET_COLLECTIONS)

  const { loading, error, data } = useQuery(GET_COLLECTIONS)

  if (loading) {
    return (<div />)
  } else if (error) {
    console.log(error)
    return (<div><p>Apollo Had an Error - check logs</p></div>)
  }

  console.log(data)

  return (
    <div className='p-8 rounded-md h-auto bg-white min-w-1/2 max-w-1/2 sm:w-3/6 lg:max-w-3/4'>
      <span className='text-4xl font-extrabold'>
        Projects
      </span>
      <div className='flex flex-row pt-6'>
        <GithubGlyph /><p className='pl-4'>{reponame}</p>
      </div>
      <div className='flex flex-row pt-4'>
        <p className='pr-4'>{pr}</p>
        <p className='font-accent text-blue-500'>{details}</p>
      </div>
    </div>
  )
}

export default CollectionsData
