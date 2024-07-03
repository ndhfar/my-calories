export const Button = ({ variation, children }) => {
  if (variation === "edit") {
    return (
      <button className="bg-customGreen px-4 py-1 rounded-md cursor-pointer">
        {children}
      </button>
    );
  } else if (variation == "delete") {
    return (
      <button className="bg-customRed px-2 py-1 rounded-md cursor-pointer">
        {children}
      </button>
    );
  }
};
