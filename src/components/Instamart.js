import { useState } from "react";

const Section = ({
  title,
  description,
  isVisible,
  setIsVisible,
  hideVisible,
}) => {
  console.log(isVisible);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button className="cursor-pointer underline" onClick={hideVisible}>
          Hide
        </button>
      ) : (
        <button className="cursor-pointer underline" onClick={setIsVisible}>
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1>Instamart</h1>
      <Section
        title={"About Section"}
        description={"description data 1"}
        isVisible={visibleSection == "about"}
        setIsVisible={() => setVisibleSection("about")}
        hideVisible={() => setVisibleSection("")}
      />
      <Section
        title={"Profile Section"}
        description={"description data 2"}
        isVisible={visibleSection == "profile"}
        setIsVisible={() => setVisibleSection("profile")}
        hideVisible={() => setVisibleSection("")}
      />
      <Section
        title={"Company Section"}
        description={"description data 3"}
        isVisible={visibleSection == "company"}
        setIsVisible={() => setVisibleSection("company")}
        hideVisible={() => setVisibleSection("")}
      />
    </div>
  );
};

export default Instamart;
