import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import React from "react";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const primary : Story = {
  render: () => <Checkbox />
}