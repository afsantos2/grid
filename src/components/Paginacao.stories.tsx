import { Meta, StoryObj } from "@storybook/react";
import Paginacao from "./Paginacao";
import React from "react";

const meta: Meta<typeof Paginacao> = {
  component: Paginacao,
  argTypes: {
    cor: { control: 'color'}
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Paginacao>

export const primary : Story = {
  render: () => <Paginacao />,
}