export const PAGE_TITLE = "Savants Network";
export function getPageTitle(title) {
  if (arguments.length === 0) {
    return PAGE_TITLE;
  } else {
    return `${PAGE_TITLE} | ${title}`;
  }
}
