import React from "react";

import { Footer } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const MainFooter = Template.bind({});
MainFooter.args = {
  footerLinks: [
    { 
      title: "Create Account",
      session: "main",
      url: "#" },
    {
      title: "Sign In",
      session: "main",
      url: "#",
    },
    {
      title: "Contact Us",
      session: "main",
      url: "#",
    },
    {
      title: "Facebook",
      session: "social",
      url: "facebook.com",
    },
    { 
      title: "Instagram",
      session: "social",
      url: "instagram.com"
    },
  ],
  copyrightLabel: "Copyright © 2021 articles. All Rights Reserved",
};
