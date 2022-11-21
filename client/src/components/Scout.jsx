import { useForm } from "react-hook-form";
import axios from "axios";

export const Scout = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      author: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5005/post", data);

      reset();

      const res2 = await axios.get("http://localhost:5005/authors");
      let data2 = res2;
      console.log(data2);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", { required: true, minLength: 1 })} placeholder="Title" />
        <input {...register("author", { required: true, minLength: 1 })} placeholder="Author" />
        <input type="submit" />
      </form>
    </div>
  );
};

//BELOW raw React form with fetch & axios

// import { useState } from "react";
// import axios from "axios";

// const emptyBookForm = {
//   title: "",
//   author: "",
// };

// export function Scout() {
//   const [bookFormState, setBookFormState] = useState(emptyBookForm);

//   const handleChange = (e) => {
//     setBookFormState((old) => ({ ...old, [e.target.name]: e.target.value }));
//   };

//   const saveBookToDb = async () => {
//     try {
//       const formBody = bookFormState;
//       console.log(formBody);

//       const res = await axios.post("http://localhost:5005/post", formBody);

//       const data = res.data;
//       //
//       console.log(data);
//       //
//     } catch (error) {
//       console.error(error);
//     }
//   };

// const saveBookToDb = async () => {
//   try {
//     const formBody = bookFormState;
//     console.log(formBody);

//     const res = await fetch("http://localhost:5005/post", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formBody),
//     });

//     const sentData = await res.json();
//     console.log("hello again");
//     //
//     console.log(sentData);
//     //
//   } catch (error) {
//     console.error(error);
//   }
// };

//   return (
//     <div>
//       <h1>Scout's page</h1>

//       <fieldset>
//         <legend>Enter book</legend>
//         <input
//           name="title"
//           onChange={handleChange}
//           value={bookFormState.title}
//           placeholder="Title"
//         />
//         <br />
//         <input
//           type="text"
//           name="author"
//           onChange={handleChange}
//           value={bookFormState.author}
//           placeholder="Author"
//         />
//         <br />
//         <button onClick={saveBookToDb}>Submit</button>
//       </fieldset>
//     </div>
//   );
// }
