"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [entrytype, setEntryType] = useState("");
  const [calories, setCalories] = useState("");
  const [nameentry, setNameEntry] = useState("");

  async function handleCreateData() {
    await fetch("https://v1.appbackend.io/v1/rows/P0ISHrAN4l8i", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ entrytype, calories, nameentry }]),
    });

    router.refresh();
    setCalories("");
    setEntryType("");
    setNameEntry("");
  }

  return (
    <div>
      <header className="flex justify-between items-center px-4 py-3">
        <div></div>
        <h1 className="font-bold text-4xl ">Add Tracker</h1>
        <i class="bx bx-x text-4xl text-customRed"></i>
      </header>
      <main className="flex flex-col mx-7 gap-3 pt-2">
        <select
          className="bg-transparent border border-customSalmon px-3 py-2 rounded-md outline-none text-customSalmon"
          value={entrytype}
          onChange={(e) => setEntryType(e.target.value)}
        >
          <option value="">Select a category (Food, Drink, Workout)</option>
          <option value="food">Food</option>
          <option value="drink">Drink</option>
          <option value="workout">Workout</option>
        </select>
        <InputTemplate
          type="text"
          placeholder="Enter name (e.g., Salad, Water, Running)"
          value={nameentry}
          onChange={(e) => setNameEntry(e.target.value)}
        />
        <InputTemplate
          type="number"
          placeholder="Enter calories (e.g., 200)"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <button
          className="bg-customSalmon text-customCream py-2 rounded-md font-semibold hover:bg-[#FF7D4C]"
          onClick={handleCreateData}
        >
          Submit
        </button>
      </main>
    </div>
  );
}

const InputTemplate = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      className="bg-transparent border border-customSalmon px-3 py-2 rounded-md placeholder:text-customSalmon outline-none text-customSalmon"
      value={value}
      onChange={onChange}
    />
  );
};
