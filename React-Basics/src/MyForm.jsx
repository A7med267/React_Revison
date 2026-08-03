// import React, { useState } from "react";

// function MyForm() {
//   const [formInput, setFormInput] = useState({
//     name: "",
//     email: "",
//     age: "",
//     info: "",
//     isStudent: false,
//     country: "",
//     status: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     localStorage.setItem("user", JSON.stringify(formInput));

//     console.log("Saved:", formInput);
//     alert("Data Saved Successfully!");
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit} style={{ margin: "50px" }}>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={formInput.name}
//           onChange={(e) =>
//             setFormInput({
//               ...formInput,
//               name: e.target.value,
//             })
//           }
//         />

//         <hr />

//         <label>Email:</label>
//         <input
//           type="email"
//           value={formInput.email}
//           onChange={(e) =>
//             setFormInput({
//               ...formInput,
//               email: e.target.value,
//             })
//           }
//         />

//         <hr />

//         <label>Age:</label>
//         <input
//           type="number"
//           value={formInput.age}
//           onChange={(e) =>
//             setFormInput({
//               ...formInput,
//               age: e.target.value,
//             })
//           }
//         />

//         <hr />

//         <label>Are you student?</label>
//         <input
//           type="checkbox"
//           checked={formInput.isStudent}
//           onChange={(e) =>
//             setFormInput({
//               ...formInput,
//               isStudent: e.target.checked,
//             })
//           }
//         />

//         <hr />

//         <label>Country:</label>

//         <select
//           value={formInput.country}
//           onChange={(e) =>
//             setFormInput({
//               ...formInput,
//               country: e.target.value,
//             })
//           }
//         >
//           <option value="">Select Country</option>
//           <option value="EGY">EGY</option>
//           <option value="USA">USA</option>
//           <option value="KSA">KSA</option>
//           <option value="JPA">JPA</option>
//         </select>

//         <hr />

//         <label>
//           <input
//             type="radio"
//             name="status"
//             value="student"
//             checked={formInput.status === "student"}
//             onChange={(e) =>
//               setFormInput({
//                 ...formInput,
//                 status: e.target.value,
//               })
//             }
//           />
//           Student
//         </label>

//         <label style={{ marginLeft: "20px" }}>
//           <input
//             type="radio"
//             name="status"
//             value="teacher"
//             checked={formInput.status === "teacher"}
//             onChange={(e) =>
//               setFormInput({
//                 ...formInput,
//                 status: e.target.value,
//               })
//             }
//           />
//           Teacher
//         </label>

//         <hr />

//         <label>General Info:</label>

//         <textarea
//           value={formInput.info}
//           onChange={(e) =>
//             setFormInput({
//               ...formInput,
//               info: e.target.value,
//             })
//           }
//         />

//         <br />
//         <br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default MyForm;




import React, { useState } from 'react'
import Model from "./Model.jsx";
import MyComponent from './MyComponent.js';
import { LoanInputContext } from './Context/LoanFormInputContext.js';
function MyForm() {

const [errorMassage ,setErrorMassage] = useState(null)

const [inputValue,setInputValue] = useState({
  name:"",
  phone:"",
  age:"",
  isEmp: false,
  salary:""

})

const btnDisabled =inputValue.name == "" || inputValue.phone == "" ||  inputValue.age == "" 
const [showModal, setShowModal] = useState(false);



function hadlerSubmit(e) {
  e.preventDefault();

  const { age } = inputValue;
  const {phone} = inputValue;

  if (age < 18 || age > 100) {
    setErrorMassage("The age is not allowed");
    setShowModal(true);
    return;

  }else if (!/^\d{10,12}$/.test(phone)) {
  setErrorMassage("Phone number must contain 10 to 12 digits");
  setShowModal(true);
  return;
}
  
  setErrorMassage(null);
  setShowModal(true);
}

  function handelChange(name, value) {
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }


  return (
    <div className="card">
      <h1>Requsting A Loan</h1>

      <LoanInputContext.Provider value={{
        value:inputValue.name,
        handelChange:handelChange,
        label: "Name",
        name: "name",
        }}>
      <MyComponent/>
      </LoanInputContext.Provider>


      <LoanInputContext.Provider value={{
        value:inputValue.age,
        handelChange:handelChange,
        label: "Age",
        name: "age",
        }}>
      <MyComponent/>
      </LoanInputContext.Provider>


      <LoanInputContext.Provider value={{
        value:inputValue.phone,
        handelChange:handelChange,
        label: "Phone",
        name: "phone",
        }}>
      <MyComponent/>
      </LoanInputContext.Provider>

      <br />
      <label htmlFor="">Are You Employee</label>
      <input
        type="checkbox"
        name="emp"
        id="emp"
        checked={inputValue.isEmp}
        onChange={(e) => {
          setInputValue({ ...inputValue, isEmp: e.target.checked });
        }}
      />
      <br />
      <label htmlFor="">Salary</label>
      <select
        name=""
        id=""
        value={inputValue.salary}
        onChange={(e) => {
          setInputValue({ ...inputValue, salary: e.target.value });
        }}
      >
        <option value="less 500">less than 500$</option>
        <option value="above 500">Above 500$</option>
      </select>

      <button type="button"
      className={btnDisabled ? "disabled" : ""}
      onClick={hadlerSubmit}
      disabled={btnDisabled}>
        
        submit
      </button>
      {showModal && <Model errorMassage={errorMassage} closeModal={() => setShowModal(false)} />}{" "}
{
console.log(inputValue),
console.log(btnDisabled)
}
    </div>
  );
}

export default MyForm                                                                    