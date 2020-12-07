import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { EmptyContent } from "../empty-content";

export default {
  title: "Components / EmptyContent",
  component: EmptyContent,
  argTypes: {},
} as Meta;

const Template: Story<{}> = (args) => <EmptyContent {...args} />;

export const Basic = Template.bind({});
