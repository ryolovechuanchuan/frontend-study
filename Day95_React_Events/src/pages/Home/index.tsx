import type React from 'react';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState<string>('');
  // const [message, setMessage] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [country, setCountry] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>, label: string) {
  //   console.log(label);
  //   console.log(name);
  //   setName(e.target.value);
  // }

  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   console.log('submit');
  // }

  // function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  //   if (e.key === 'Enter') {
  //     console.log(e.currentTarget.value);
  //   }
  // }

  // function handleMouseEnter() {
  //   console.log('Mouse Enter');
  // }

  // function handleMouseLeave() {
  //   console.log('Mouse Leave');
  // }

  // function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
  //   console.log(e.currentTarget.value);
  // }

  // function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
  //   if (e.target.value.trim() === '') {
  //     console.log('請輸入內容');
  //   }
  // }

  // function handleClick() {
  //   setMessage('Click');
  // }

  // function handleDoubleClick() {
  //   setMessage('Double Click');
  // }

  // function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setIsChecked(e.target.checked);
  // }

  // function handleCountryChange(e: React.ChangeEvent<HTMLSelectElement>) {
  //   setCountry(e.target.value);
  // }

  // function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
  //   setDescription(e.target.value);
  // }

  function handleInputName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleSelectCountry(e: React.ChangeEvent<HTMLSelectElement>) {
    setCountry(e.target.value);
  }

  function handleDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescription(e.target.value);
  }

  function handleIsChecked(e: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked);
  }

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log('Name:' + name);
    console.log('Country:' + country);
    console.log('Description:' + description);
    console.log('Agree:' + isChecked);
  }

  return (
    <>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleInputName} />

        <label>Country:</label>
        <select value={country} onChange={handleSelectCountry}>
          <option value="">ALL</option>
          <option value="Taiwan">Taiwan</option>
          <option value="Japan">Japan</option>
          <option value="USA">USA</option>
        </select>

        <label>Description:</label>
        <textarea value={description} onChange={handleDescription} />

        <label>
          <input type="checkbox" checked={isChecked} onChange={handleIsChecked} />
          Agree
        </label>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {/* <h1>Day95_React_Events</h1>
      <input type="text" value={name} onChange={(e) => handleChange(e, 'username')} />
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <input type="text" onKeyDown={handleKeyDown} />
      <button onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
        Hover Me
      </button>
      <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
      <button onClick={handleClick}>Click</button>
      <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
      <p>{message}</p>

      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <p>{isChecked ? 'Checked' : 'Not Checked'}</p>

      <select name="" id="country-select" value={country} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        <option value="Taiwan">Taiwan</option>
        <option value="Japan">Japan</option>
        <option value="USA">USA</option>
      </select>
      <p>Country:{country}</p>

      <textarea name="" value={description} onChange={handleDescriptionChange}></textarea>
      <p>{description}</p> */}
    </>
  );
}
