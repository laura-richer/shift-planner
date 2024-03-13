export default (items, searchInput) => {
  return items.filter(item => item.name.includes(searchInput));
}