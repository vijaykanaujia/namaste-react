import { useEffect, useState } from "react";

const useMenuItem = (menuId) => {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getMenuItemInfo();
  }, []);

  async function getMenuItemInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/quick?menuId=${menuId}&categories=true`
    );
    const json = await data.json();
    setMenuItems(Object.values(json?.data?.menu?.items) || []);
  }
  return menuItems;
};

export default useMenuItem;
