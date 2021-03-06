import React from 'react'

import HeroComponent from '../../components/organisms/Hero/HeroComponent'

export default {
  title: 'HeroComponent',
  component: HeroComponent

  // argTypes: {
  //   backgroundColor: { control: 'color' }
  // }
}

const Template = (args) => <HeroComponent {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'HeroComponent',
  src: 'https://avatars.githubusercontent.com/u/11522217?v=4',
  name: 'Xiao Zhong',
  mdContent: 'Hello! This is Xiao Zhong š. š» Iām a full-stack software engineer apprentice at Techtonica š± Iām currently learning the PERN (PostgreSQL, Express, React, Node) stack. š©āš I am a Finance PhD-turned software engineer excited about incorporating business acumen in building efficient and scalable algorithm',
  // primary: true,
  label: 'HeroComponent'
}
