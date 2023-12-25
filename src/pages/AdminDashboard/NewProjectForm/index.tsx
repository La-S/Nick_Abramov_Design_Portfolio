import React, { useState } from 'react';
import type { ProjectInputDto } from '../../../types/data/projectAPI';
import { createProject } from '../../../api/projectMethods.api';
import { ProjectGalleryRow } from '../../../types/data/project';

const NewProjectForm = (): JSX.Element => {
  const [nameValue, setNameValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [descriptionBulletValues, setDescriptionBulletValues] = useState<Array<string>>([]);
  const [mainImagePathValue, setMainImagePathValue] = useState('');
  const [galleryValues, setGalleryValues] = useState<ProjectInputDto['gallery']>([]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const name = nameValue.trim();
    const category = categoryValue.trim();
    const descriptionBullets = descriptionBulletValues.map((inputValue) => inputValue.trim());
    const mainImagePath = mainImagePathValue.trim();
    const gallery = [...galleryValues];
    const projectInputDto: ProjectInputDto = {
      name,
      category,
      descriptionBullets,
      mainImagePath,
      gallery,
    };

    createProject(projectInputDto)
      .then(() => {
        setNameValue('');
        setCategoryValue('');
        setDescriptionBulletValues([]);
        setMainImagePathValue('');
        setGalleryValues([]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
      Admin Dashboard
      <input
        type="text"
        value={nameValue}
        placeholder="name"
        onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
          setNameValue((target as HTMLInputElement).value);
        }}
      />
      <input
        type="text"
        value={categoryValue}
        placeholder="category"
        onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
          setCategoryValue((target as HTMLInputElement).value);
        }}
      />
      {descriptionBulletValues.map((descriptionBulletValue, i) => (
        <input
          key={i}
          type="text"
          value={descriptionBulletValue}
          placeholder="description"
          onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
            const newDescriptionBulletValues = [...descriptionBulletValues];
            newDescriptionBulletValues[i] = (target as HTMLInputElement).value;
            setDescriptionBulletValues(newDescriptionBulletValues);
          }}
        />
      ))}
      <button type="button" onClick={() => setDescriptionBulletValues([...descriptionBulletValues, ''])}>
        Add description bullet
      </button>
      <input
        type="text"
        value={mainImagePathValue}
        placeholder="main image path"
        onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
          setMainImagePathValue((target as HTMLInputElement).value);
        }}
      />
      {galleryValues.map((galleryRow, i) => (
        <div key={i}>
          {`Row ${i + 1}:`}
          <p>Cell number</p>
          <select 
            defaultValue={galleryRow.cellAmount}
            onChange={(e) => {
              const newCellAmount = (e.target.value as unknown) as ProjectGalleryRow['cellAmount'];
              const newGalleryValues = [...galleryValues];
              newGalleryValues[i].cellAmount = newCellAmount;
              if (newGalleryValues[i].cells.length > newCellAmount) {
                newGalleryValues[i].cells = newGalleryValues[i].cells.slice(0, newCellAmount);
              } else if (newGalleryValues[i].cells.length < newCellAmount) {
                const newCells = [...newGalleryValues[i].cells];
                while (newCells.length < newCellAmount) {
                  newCells.push({ type: 'image link', path: '' });
                }
                newGalleryValues[i].cells = newCells;
              }
              setGalleryValues(newGalleryValues);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {galleryRow.cells.map((cellValue, j) => (
            <div key={j}>
              <select
                defaultValue={cellValue.type}
                onChange={(e) => {
                  const newGalleryValues = [...galleryValues];
                  newGalleryValues[i].cells[j].type = e.target.value as ProjectGalleryRow['cells'][number]['type'];
                  setGalleryValues(newGalleryValues);
                }}
              >
                <option value="image link">image link</option>
                <option value="direct video link">direct video link</option>
                <option value="embedded video link">youtube video link</option>
              </select>
              <input 
                type="text" 
                value={cellValue.path}
                placeholder="path"
                onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
                  const newGalleryValues = [...galleryValues];
                  newGalleryValues[i].cells[j].path = (target as HTMLInputElement).value;
                  setGalleryValues(newGalleryValues);
                }}
              />
            </div>
          ))}
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setGalleryValues([...galleryValues, { cellAmount: 1, cells: [{ type: 'image link', path: '' }] }])
        }
      >
        Add a new gallery row
      </button>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default NewProjectForm;
