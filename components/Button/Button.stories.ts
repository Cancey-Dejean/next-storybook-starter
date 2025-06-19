import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button, buttonCva } from ".";

const BUTTON_VARIANTS = Object.keys(
  buttonCva.variants.variant,
) as (keyof typeof buttonCva.variants.variant)[];
const BUTTON_SIZES = Object.keys(
  buttonCva.variants.size,
) as (keyof typeof buttonCva.variants.size)[];

const meta = {
  title: "Components/Button",
  component: Button,

  parameters: {
    layout: "centered",
    html: {
      removeEmptyComments: true,
    },
  },
  argTypes: {
    variant: {
      description: "The variant of the button",
      control: { type: "select" },
      options: BUTTON_VARIANTS,
    },
    size: {
      description: "The size of the button",
      control: { type: "select" },
      options: BUTTON_SIZES,
    },
    asChild: {
      description:
        "If true, the button will render the child as a linkable button",
      control: false,
    },
  },
  args: {
    children: "Button",
    disabled: false,
    asChild: false,
    variant: "default",
    size: "default",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "default",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};
