export function filterData(searchText, restaurentList) {
  const filteredData = restaurentList.filter((res) => {
    return res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
  });
  return filteredData;
}
