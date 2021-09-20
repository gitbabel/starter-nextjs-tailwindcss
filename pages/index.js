import React from 'react'
import Head from 'next/head'

// Just need the query interfaces
import { ApolloClient, ApolloProvider } from '@apollo/client'
// ApolloClient REQUIRES a `cache` object
import { cache } from '../lib/cache'

// Atoms

// Organisms
import CollectionsData from '../components/organisms/Hero/CollectionsData'
import HeroComponent from '../components/organisms/Hero/HeroComponent'
import Projects from '../components/organisms/Hero/Projects'

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

export async function getStaticProps (context) {
  console.log('Message at build-time')
  return {
    props: {
      GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
      API_BEARER_TOKEN: process.env.API_BEARER_TOKEN
    }
  }
}

export default function Home (props) {
  // TODO: abstract queries into a lib/query folder, realizing we can create a shared package
  const GRAPHQL_API_URL = props.GRAPHQL_API_URL
  // console.log('WOW I HAVE URL? ', GRAPHQL_API_URL)
  // Make a call to Apollo
  const client = new ApolloClient({
    uri: GRAPHQL_API_URL,
    connectToDevTools: true,
    // Allow 3rd Party (api-calls), requires CORS enablement
    // credentials: 'include',
    // ApolloClient 3.x requires a cache object
    // our cache is generated from ./cache.js
    cache: cache,
    headers: {
      Authorization: `Bearer: ${props.API_BEARER_TOKEN}`
    }
  })

  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <title>gitBabel Developer Page Proof-Of-Concept</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='flex flex-col items-center align-items bg-[#29b5ed] p-4 '>
          <HeroComponent {...heropayload} />
          <CollectionsData {...collectionspayload} />
          <Projects />
        </div>
      </ApolloProvider>
    </>
  )
}
