import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Modal } from './Modal'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children: 'Lofdfsdfdfdsdfsdfs'
}
export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children: 'Lofdfsdfdfdsdfsdfs'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
