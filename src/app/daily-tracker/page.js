import { Card } from "@/components/card";
import { TotalCalories } from "@/components/totalCalories";

export default async function Page() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/P0ISHrAN4l8i", {
    cache: "no-store",
  });
  const { data } = await res.json();

  const totalCalories = data.reduce((total, item) => {
    if (item.entrytype === "workout") {
      return total - item.calories;
    } else if (item.entrytype === "food" || item.entrytype === "drink") {
      return total + item.calories;
    }
    return item;
  }, 0);

  return (
    <div className="w-full">
      <header className="text-center py-3 space-y-2">
        <h1 className="font-bold text-4xl text-customGreen">Daily Tracker</h1>
        <p className="text-customRed text-lg">March 22, 2024</p>
      </header>
      <main>
        <section className="text-center py-11 ">
          <TotalCalories total={totalCalories} />
        </section>
        <section className="mx-7 py-6 relative">
          <button className="flex items-center gap-1 absolute top-0 right-1 text-customSalmon hover:scale-90">
            <i class="bx bxs-plus-circle"></i>
            <p>add</p>
          </button>
          <div className="flex flex-col gap-2">
            {data.map((item) => {
              if (item.entrytype === "food") {
                return (
                  <Card
                    name={item.nameentry}
                    calories={item.calories}
                    icon="bx-bowl-rice"
                    key={item._id}
                  />
                );
              } else if (item.entrytype === "drink") {
                return (
                  <Card
                    name={item.nameentry}
                    calories={item.calories}
                    icon="bx-beer"
                    key={item._id}
                  />
                );
              } else if (item.entrytype === "workout") {
                return (
                  <Card
                    name={item.nameentry}
                    calories={item.calories}
                    icon="bxs-bone"
                    key={item._id}
                  />
                );
              }
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
