import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { InvalidExecution } from "../invalid-execution";

export default {
  title: "Components / InvalidExecution",
  component: InvalidExecution,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <InvalidExecution {...args} />;

export const Basic = Template.bind({});
