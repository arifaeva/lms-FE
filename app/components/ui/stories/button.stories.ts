import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    variant: { type: "string" },
    size: { type: "string" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
  args: {
    children: "Submit!",
  },
};
