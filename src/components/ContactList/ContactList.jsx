import { useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);

  return (
    <>
      <h1>Contact List</h1>
      <br />
      <div>
        <CreateContact />
      </div>
    </>
  );
};

export default ContactList;

const initialState = {
  name: "",
  email: "",
  group: "",
};

const CreateContact = () => {
  const [inputText, setInputText] = useState({ ...initialState });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
    console.log(inputText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter name:</label>
        <input
          type="text"
          name="name"
          value={inputText.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Enter email:</label>
        <input
          type="email"
          name="email"
          value={inputText.email}
          onChange={handleChange}
        />
        <br />
        <select name="group" value={inputText.group} onChange={handleChange}>
          <option value="">Group</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
