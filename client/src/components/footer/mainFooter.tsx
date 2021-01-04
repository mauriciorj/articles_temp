import React, { useState, useEffect } from "react";
import { Client } from "../../prismic/config";
import { Footer } from "wcl_articles/src/components/Footer/Footer";
import Prismic from "@prismicio/client";

interface mainFooterLinksProps {
  order: number;
  session: string;
  title: string;
  url: string;
}

interface mainFooterInfoProps {
  copyright: string;
}

export const MainFooter = () => {
  const [footerLinks, setFooterLinks] = useState<Array<mainFooterLinksProps> | null>([]);
  const [footerInfo, setFooterInfo] = useState<mainFooterInfoProps | null>(null);

  useEffect(() => {
    (async function fetchFooterInfo() {
      const getFooterLinks = await Client.query([
        Prismic.Predicates.any("document.type", ["link-cta"]),
        Prismic.Predicates.at("document.tags", ["footer"]),
      ]);
      if (getFooterLinks) {
        let footerSessions = [];

        // get all footer links per group
        getFooterLinks.results.map((footer) => {
          footerSessions.push({
            title: footer.data.link_title[0].text,
            session: footer.data.footer_session,
            url: footer.data.link_url[0].text,
            order: footer.data.order,
          });
        });

        const sortMainFooterLinks = footerSessions;
        sortMainFooterLinks.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
        setFooterLinks(sortMainFooterLinks);
      }

      const getFooterInfo = await Client.query([
        Prismic.Predicates.any("document.type", ["component"]),
        Prismic.Predicates.at("document.tags", ["footer"]),
      ]);
      if(getFooterInfo){
        setFooterInfo({copyright: getFooterInfo.results[0].data.text[0].text})
      }
    })();
  }, []);

  return (
    <Footer
      footerLinks={footerLinks}
      copyrightLabel={footerInfo?.copyright}
    />
  );
};
