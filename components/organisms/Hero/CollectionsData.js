import GithubGlyph from '../../atoms/GithubGlyph'

import { gql, useQuery } from '@apollo/client'

const CollectionsData = (props) => {
  const { reponame, pr, details } = props

  // const GET_TOPICS = gql`{
  //   topics {
  //     uuid,
  //     title,
  //     type,
  //     urlSlug,
  //     repository,
  //     owner,
  //     ownerType,
  //     updatedAt
  //   }
  // }`

  const GET_TOPICS = gql`{
    topics {
      uuid,
      title,
      type,
      urlSlug,
      branch,
      repository,
      hasPrimaryHeader,
      isReadme,
      isChangelog,
      babelDoc,
      sourceFormat,
      filepath,
      filename,
      blockStats {
        totalHeaders,
        totalCode,
        totalList,
        totalParagraphs
      }
      toc {
        sectionTitle,
        type,
        children{
          sectionTitle,
          type,
          children {
            sectionTitle,
            type,
            children {
              sectionTitle,
              type
            }
          }
        }
      },
      ref,
      owner,
      ownerType,
      commitSha,
      sourced,
      isHead
    }
  }`

  const { loading, error, data } = useQuery(GET_TOPICS)

  if (loading) {
    return (<div />)
  } else if (error) {
    console.log(error)
    return (<div><p>Apollo Had an Error - check logs</p></div>)
  }

  const tecdata = data.topics.filter(result => result.repository === 'techtonica-assignments')
  const sorted = tecdata.sort((a, b) => a.filepath.localeCompare(b.filepath))

  const markup = sorted.map((item, index) => {
    return (
      <div key={index} className='pb-4 bg-purple-700 bg-opacity-25 border-4 border-yellow-400'>
        <b><p className='pr-4'>{item.title}</p></b>
        <p className='font-accent text-blue-500'>{item.filepath}</p>
      </div>
    )
  })

  return (
    <div className='p-8 rounded-md h-auto bg-white min-w-1/2 max-w-1/2 sm:w-3/6 lg:max-w-3/4'>
      <span className='text-4xl font-extrabold'>
        Projects
      </span>
      <div className='flex flex-row pt-6'>
        <GithubGlyph /><p className='pl-4'>{reponame}</p>
      </div>
      <div className='grid-cols-4 pt-4'>
        {markup}
      </div>
    </div>
  )
}

export default CollectionsData
