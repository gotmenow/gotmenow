import { useEffect } from "react";

const SITE_NAME = "GotMeNow";
const DEFAULT_OG_IMAGE = "https://media.base44.com/images/public/6a7c1eb392acd3acb78eaf63/d54430e00_generated_af55cefd.png";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SEO({ title, description, image, canonical, type = "website", noindex = false, keywords, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title;
    const url = canonical || window.location.href.split("?")[0].split("#")[0];
    const img = image || DEFAULT_OG_IMAGE;

    upsertLink("canonical", url);
    upsertMeta("name", "description", description);
    if (keywords) upsertMeta("name", "keywords", keywords);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", img);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", img);

    let script;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      if (script) script.remove();
    };
  }, [title, description, image, canonical, type, noindex, keywords, jsonLd]);
  return null;
}