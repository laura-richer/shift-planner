export default (items, tableOrder) => {
  const { orderBy, order } = tableOrder;
  const orderedItems = items.sort((a, b) => a[orderBy].localeCompare(b[orderBy]));

  // TODO account for correct date formatting order

  return order === 'ASC' ? orderedItems : orderedItems.reverse();
}