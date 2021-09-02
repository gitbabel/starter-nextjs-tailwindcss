import React from 'react'

import { HeroComponent } from '../../components/organisms/HeroComponent'

export default {
  title: 'HeroComponent',
  component: HeroComponent,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template = (args) => <HeroComponent {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'HeroComponent'
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button'
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button'
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button'
// }
