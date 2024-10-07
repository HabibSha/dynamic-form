import { useState } from "react";

const formFields = {
  username: {
    label: "Username",
    type: "text",
    placeholder: "Enter username",
  },
  email: {
    label: "Email",
    type: "email",
    placeholder: "Enter email",
  },
  password: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
  },
};

// console.log(Object.keys(formFields));

const Form = () => {
  const [formState, setFormState] = useState(formFields);
  const dynamicData = objToArray(formState);

  console.log(dynamicData);

  const handleChange = () => {
    const oldState = deepClone(formState);
    setFormState(oldState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {dynamicData?.map((item, index) => {
          console.log(item);

          <div key={index}>
            <label>{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              value={item.value}
              placeholder={item.placeholder}
              onChange={handleChange}
            />
          </div>;
        })}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;

// const objToArray = (obj) => {
//   return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
// };

const transformObject = (obj) => {
  return Array.keys(obj).reduce((acc, cur) => {
    acc[cur] = { ...obj[cur], value: "" };
    return acc;
  }, {});
};

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
