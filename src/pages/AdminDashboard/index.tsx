import React, { useState } from 'react';
import { ProjectInputDto } from '../../types/data/projectAPI';
import { createProject } from '../../api/projectMethods.api';

const AdminDashboard = (): JSX.Element => {
  const [nameInput, setNameInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const name = nameInput.trim();
    const category = categoryInput.trim();
    const descriptionBullets = descriptionInput.split(';');
    const projectInputDto: ProjectInputDto = {
      name,
      category,
      descriptionBullets,
    };

    createProject(projectInputDto)
      .then(() => {
        setNameInput('');
        setCategoryInput('');
        setDescriptionInput('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <form>
      Admin Dashboard
      <input 
        type="text"
        value={nameInput}
        placeholder='name'
        onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
          setNameInput((target as HTMLInputElement).value);
        } }
      />
      <input 
        type="text"
        value={categoryInput}
        placeholder='category'
        onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
          setCategoryInput((target as HTMLInputElement).value);
        } }
      />
      <input 
        type="text"
        value={descriptionInput}
        placeholder='description'
        onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
          setDescriptionInput((target as HTMLInputElement).value);
        } }
      />
      <input type="file" />

      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default AdminDashboard;
