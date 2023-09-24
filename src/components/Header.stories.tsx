import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import React from "react";

const meta: Meta<typeof Header> = {
  component: Header,
  argTypes: {
    cor: { control: 'color'}
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Header>

export const primary : Story = {
  render: () => <Header />,
}