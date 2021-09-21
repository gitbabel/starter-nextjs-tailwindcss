import React from 'react'

import CollectionsData from '../../components/organisms/Hero/CollectionsData'

export default {
  title: 'CollectionsData',
  component: CollectionsData

  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

const Template = (args) => <CollectionsData {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'CollectionsData',
  reponame: 'starter-nextjs-tailwindcss',
  pr: 'PR / 01',
  details: 'feat (initial)',
  label: 'HeroComponent'
}
