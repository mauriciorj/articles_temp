import React, { useState, useEffect } from "react";
import { Client } from "../../prismic/config";
import { Header } from "wcl_articles/src/components/Header/Header";
import Prismic from "@prismicio/client";

interface mainHeaderInfoProps {
  type: string;
  title: string;
  altText: string;
  titleAltText: string;
  mobileButtonTitle: string;
  titleImage: string;
  titleImageAltText: string;
}

interface mainHeaderLinksInfoProps {
  headerTitle: string;
  link: string;
  order: number;
  type: string;
}

export const MainHeader = () => {
  const [mainHeaderInfo,setMainHeaderInfo] = useState<Array<mainHeaderInfoProps> | null>([]);
  const [mainHeaderLinksInfo, setMainHeaderLinksInfo] = useState<Array<mainHeaderLinksInfoProps> | null>([]);

  useEffect(() => {
    (async function fetchMainHeaderInfo() {
      const getHeaderInfo = await Client.query([
        Prismic.Predicates.any("document.type", ["component"]),
        Prismic.Predicates.at("document.tags", ["mainHeader"]),
      ]);
      if (getHeaderInfo) {
        const title = getHeaderInfo?.results[0]?.data?.component_title[0]?.text;
        const titleAltText =
          getHeaderInfo?.results[0]?.data?.component_title_alt_text[0].text;
        const titleImage =
          getHeaderInfo?.results[0]?.data?.component_title_image?.url;
        const titleImageAltText =
          getHeaderInfo?.results[0]?.data?.component_title_image.alt;
        const mobileButtonTitle =
          getHeaderInfo?.results[0]?.data?.component_title_mobile[0]?.text;

        const type = titleImage ? "image" : "text"

        const altText = titleImage
            ? titleImageAltText
            : titleAltText

        setMainHeaderInfo([{
          type,
          title,
          altText,
          titleAltText,
          mobileButtonTitle,
          titleImage,
          titleImageAltText,
        }]);
      }

      const getHeaderLinksInfo = await Client.query([
        Prismic.Predicates.any("document.type", ["link-cta"]),
        Prismic.Predicates.at("document.tags", ["mainHeader"]),
      ]);
      if (getHeaderLinksInfo) {
        let linksResult = [];
        getHeaderLinksInfo.results.map((link) => {
          const headerLinks = {
            headerTitle: link.data.link_title[0]?.text,
            link: link.data.link_url[0]?.text,
            order: link.data.order,
            type: link.data.type,
          };
          linksResult.push(headerLinks);
        });

        const sortMainHeaderLinksInfo = linksResult;
        sortMainHeaderLinksInfo.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
        setMainHeaderLinksInfo(sortMainHeaderLinksInfo)
      }
    })();
  }, []);

  return (
    <Header
      logoInfo={mainHeaderInfo}
      headerLinks={mainHeaderLinksInfo}
      mobileMenu={{ title: mainHeaderInfo[0]?.mobileButtonTitle }}
    />
  );
};
