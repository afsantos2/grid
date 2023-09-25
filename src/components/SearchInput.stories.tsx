import { Meta, StoryObj } from "@storybook/react";
import SearchInput from "./SearchInput";
import React from "react";

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SearchInput>

export const primary : Story = {
  render: () => <SearchInput onChange={null} value={''} />,
}