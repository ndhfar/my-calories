import { Button } from "./button";

export const Card = ({ name, calories, icon, key }) => {
  return (
    <div
      className=" bg-customSalmon rounded-xl flex justify-between items-center px-4 py-2 "
      key={key}
    >
      <div className="flex gap-2">
        <div className="bg-customCream rounded-full flex items-center p-2">
          <i class={`bx ${icon} text-4xl text-customSalmon`}></i>
        </div>
        <div className="text-customCream">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm">{calories} kcal</p>
        </div>
      </div>
      <div className="flex gap-2 text-customCream">
        <Button variation="edit" children="edit" />
        <Button variation="delete" children="delete" />
      </div>
    </div>
  );
};
