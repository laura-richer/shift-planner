// Gets the list of people based on what page you are on
export default (items, activePage, itemsPerPage) => {
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return items.slice(startIndex, endIndex);
}
