import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Welcome } from "../welcome";

export default {
  title: "Components / Welcome",
  component: Welcome,
  argTypes: {
    onPrimaryAction: { action: "clicked" },
  },
} as Meta;

const Template: Story = (args) => <Welcome {...args} />;

export const Basic = Template.bind({});
