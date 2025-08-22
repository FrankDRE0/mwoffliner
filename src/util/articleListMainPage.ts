import { Dump } from '../Dump.js'
import { encodeArticleIdForZimHtmlUrl } from '../util/index.js'

export function makeArticleListItem(dump: Dump, articleEntry: ArticleDetail) {
  return `<li><a href="${encodeArticleIdForZimHtmlUrl(articleEntry.title.replace(/ /g, '_'))}">${articleEntry.title.replace(/_/g, ' ') || ''}<a></li>\n`
}

export function makeArticleImageTile(dump: Dump, articleEntry: ArticleDetail) {
  // Use thumbnail for display
  const thumb = articleEntry.internalThumbnailUrl;
  // Use full image for link, fallback to thumbnail if not available
  const full = articleEntry.fullImageUrl || thumb;

  return `<a class="item" href="${full}" target="_blank">
            <figure>
              <img loading="lazy" src="${thumb}" />
              <figcaption>${(articleEntry.title || '').replace(/_/g, ' ')}</figcaption>
            </figure>
          </a>\n`;
}

