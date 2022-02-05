import { useState } from "react";
import useForm from "../lib/useForm";

function CreateProduct() {
  const {inputs, handleChange, clearForm, resetForm} = useForm({
      name : 'Nice Shoes',
      price: 2343,
      description: 'Nice shoes in the market'
  });
  return (
    <form>
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        <input
          type="number"
          id="price"
          name="price"
          placeholder="price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={clearForm}>clear form</button>
      <button type="button" onClick={resetForm}>Reset form</button>
    </form>
  );
}

export default CreateProduct;
