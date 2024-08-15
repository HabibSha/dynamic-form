import { useState } from "react";

const formFields = {
  name: {
    label: "What is your name?",
    type: "text",
    placeholder: "John Doe",
  },
  email: {
    label: "What is your email?",
    type: "email",
    placeholder: "john@example.com",
  },
  phone: {
    label: "What is your phone number?",
    type: "tel",
    placeholder: "+8801711111111",
  },
};

// TODO: We convert our json data to array so that we can iterate the data. And also create input's name dynamically.
const objToArray = (obj) => {
  return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

// TODO: We don't have a input value in our json data. that's why we create default value inside the json data.
const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      ...obj[cur],
      value: "",
    };

    return acc;
  }, {});
};

const DynamicForm = () => {
  const [formState, setFormState] = useState(transformObject(formFields));
  const dynamicData = objToArray(formState);

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: {
        ...formState[event.target.name],
        value: event.target.value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = Object.keys(formState).reduce((acc, cur) => {
      acc[cur] = formState[cur].value;
      return acc;
    }, {});

    console.log(values);
  };

  return (
    <>
      <h1>Dynamic Form</h1>
      <form onSubmit={handleSubmit}>
        {dynamicData.map((item, index) => (
          <div key={index}>
            <label>{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              value={item.value}
              placeholder={item.placeholder}
              onChange={handleChange}
            />
          </div>
        ))}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default DynamicForm;
