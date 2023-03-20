export const PAGE_TITLE = "Savants Network";
export function setPageTitle(title) {
  if (arguments.length === 0) {
    document.title = PAGE_TITLE;
  } else {
    document.title = `${PAGE_TITLE} | ${title}`;
  }
}
