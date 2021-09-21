// Atoms
import GithubGlyph from '../../atoms/GithubGlyph'
import PullRequest from '../../atoms/PullRequest'

// MUI Timeline
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

// Apollo
import { gql, useQuery } from '@apollo/client'

const CollectionsData = (props) => {
  const { reponame, pr, details } = props

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
  sorted.reverse()

  console.log(sorted)

  const markup = sorted.map((item, index) => {
    return (
      <div key={index} className=''>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <b><p className=''>Week {index + 1}</p></b>
              <div className='flex flex-row'>
                <p className='font-accent text-blue-500'>{item.filepath}</p>
                <div className=''><PullRequest />PR/{index + 1}</div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

    )
  })

  return (
    <div className='p-8 m-8 rounded-md h-auto bg-white min-w-1/2 max-w-1/2 sm:w-3/6 lg:max-w-3/4'>
      <span className='text-4xl font-extrabold'>
        Coursework
      </span>
      <div className='flex flex-row pt-6'>
        <GithubGlyph /><p className='pl-4 text-xl'>Tectonica Assignments</p>
      </div>
      <div className='flex flex-col align-content: flex-start'>
        {markup}
      </div>
    </div>
  )
}

export default CollectionsData
