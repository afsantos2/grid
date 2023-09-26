import { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";
import React from "react";

const meta = {
  component: Pagination,
  argTypes: {
    cor: { control: 'color'}
  },
  tags: ['autodocs'],
}

export default meta

// type Story = StoryObj<typeof Pagination>

export const primary = {
  render: () => <Pagination limit={12} total={24} offset={0} setOffset={24}/>,
}