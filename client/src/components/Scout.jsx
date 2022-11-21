import { useState } from "react";

const emptyBookForm = {
  title: "",
  author: "",
};

export function Scout() {
  const [bookFormState, setBookFormState] = useState(emptyBookForm);

  const handleChange = (e) => {
    setBookFormState((old) => ({ ...old, [e.target.name]: e.target.value }));
  };

  const saveBookToDb = async () => {
    try {
      const formBody = bookFormState;

      const res = await fetch({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formBody),
      });

      const sentData = await res.json();
      //
      console.log(sentData);
      //
      setBookFormState(emptyBookForm);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Scout's page</h1>
      <form action="POST">
        <fieldset>
          <legend>Enter book</legend>
          <input
            name="title"
            onChange={handleChange}
            value={bookFormState.title}
            placeholder="Title"
          />
          <br />
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={bookFormState.author}
            placeholder="Author"
          />
          <br />
          <button onClick={saveBookToDb}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
