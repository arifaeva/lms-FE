import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "text", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const ButtonSecondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const ButtonOutlined: Story = {
  args: {
    variant: "outlined",
    children: "Button",
  },
};

export const ButtonText: Story = {
  args: {
    variant: "text",
    children: "Button",
  },
};

export const ButtonDanger: Story = {
  args: {
    variant: "danger",
    children: "Button",
  },
};
