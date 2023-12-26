import React, { useState } from 'react';
import { Box, Button, Select, TextField, OutlinedInput, Typography, ButtonBase } from '@mui/material';
import { X as CloseIcon } from '@phosphor-icons/react';
import type { ProjectInputDto } from '../../../types/data/projectAPI';
import { createProject } from '../../../api/projectMethods.api';
import { ProjectGalleryRow } from '../../../types/data/project';
import formUtils from './utils';
import S from './styles';

const ProjectForm = (): JSX.Element => {
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
    <S.ProjectForm>
      <Typography className="Directions-Label">
        Create a new project:
      </Typography>
      <TextField
        variant='outlined'
        value={nameValue}
        placeholder="Project Name*"
        autoComplete='off'
        required
        onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
          setNameValue((target as HTMLInputElement).value);
        }}
      />
      <TextField
        variant='outlined'
        value={categoryValue}
        placeholder="Category Name*"
        required
        onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
          setCategoryValue((target as HTMLInputElement).value);
        }}
      />
      {descriptionBulletValues.map((descriptionBulletValue, i) => (
        <OutlinedInput
          key={i}
          endAdornment={
            <ButtonBase
              className='EndAdornment-Button'
              onClick={() => {
                setDescriptionBulletValues((prevState) => prevState.filter((_, index) => index !== i));
              }}
              disableRipple
            >
              <CloseIcon />
            </ButtonBase>
          }
          value={descriptionBulletValue}
          placeholder={`Description Bullet ${i + 1}`}
          required
          onInput={(e) => formUtils.updateDescriptionBullet(e, i, descriptionBulletValues, setDescriptionBulletValues)}
          
        />
      ))}
      <Button
        type="button"
        onClick={() => setDescriptionBulletValues([...descriptionBulletValues, ''])}
      >
        Add description bullet
      </Button>
      <TextField
        variant='outlined'
        value={mainImagePathValue}
        placeholder="Cover Image Path*"
        required
        onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
          setMainImagePathValue((target as HTMLInputElement).value);
        }}
      />
      {galleryValues.map((galleryRow, i) => (
        <Box key={i}>
          {`Row ${i + 1}:`}
          <Typography>Cell number</Typography>
          <Select
            defaultValue={galleryRow.cellAmount}
            onChange={(e) => formUtils.updateGalleryRows(e, i, galleryValues, setGalleryValues)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          {galleryRow.cells.map((cellValue, j) => (
            <Box key={j}>
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
            </Box>
          ))}
        </Box>
      ))}
      <Button
        type="button"
        onClick={() =>
          setGalleryValues([...galleryValues, { cellAmount: 1, cells: [{ type: 'image link', path: '' }] }])
        }
      >
        Add a new gallery row
      </Button>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </S.ProjectForm>
  );
};

export default ProjectForm;
