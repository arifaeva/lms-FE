import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label";

const meta = {
  title: "Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["sublabel"],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LabelComponent: Story = {
  args: {
    label: "Input label",
  },
};

export const SublabelComponent: Story = {
  args: {
    variant: "sublabel",
    label: "Input helper label",
  },
};
