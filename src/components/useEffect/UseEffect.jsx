import { useEffect, useState } from "react";

const data = [
  {
    name: "Abdullah Turky",
    email: "turky@test.com",
  },
  {
    name: "Arjun Roy",
    email: "arjun@test.com",
  },
  {
    name: "Fahim Faisal",
    email: "fahim@test.com",
  },
  {
    name: "Faruk Ahmed",
    email: "faruk@test.com",
  },
  {
    name: "Firoz Ahmed",
    email: "firoz@test.com",
  },
];

const UseEffect = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setState({ name: "Habib Shah" });
    }, 3000);
    console.log("Rendering useEffect");
  }, []);

  console.log("Rendering");
  return (
    <>
      <div>
        <p>
          Hello <strong>{state.name ? state.name : "Guest"}</strong>, we are
          from UseEffect component
        </p>
      </div>
      <div>
        {data.length > 0 ? (
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                {item.name}, {item.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>There is no data!</p>
        )}
      </div>
    </>
  );
};

export default UseEffect;
