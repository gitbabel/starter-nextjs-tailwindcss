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
  mdContent: 'Hello! This is Xiao Zhong 👋. 💻 I’m a full-stack software engineer apprentice at Techtonica 🌱 I’m currently learning the PERN (PostgreSQL, Express, React, Node) stack. 👩‍🎓 I am a Finance PhD-turned software engineer excited about incorporating business acumen in building efficient and scalable algorithm',
  // primary: true,
  label: 'HeroComponent'
}
