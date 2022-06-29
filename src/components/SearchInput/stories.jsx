import React from "react";

import { SearchInput } from ".";

export default {
  title: "Form/Input",
  conponent: SearchInput,
};

export const Default = (args) => <SearchInput {...args} />;
Default.args = {
  error: "",
  loading: false,
};
export const WithError = (args) => <SearchInput {...args} />;
WithError.args = {
  error: "no found",
};
export const WithLoad = (args) => <SearchInput {...args} />;
WithLoad.args = {
  loading: true,
};
