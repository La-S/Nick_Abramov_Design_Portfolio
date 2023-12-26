import React, { useState } from 'react';
import { Box, Button, Select, TextField, OutlinedInput, Typography, ButtonBase, FormLabel, Divider, MenuItem } from '@mui/material';
import { X as CloseIcon } from '@phosphor-icons/react';
import type { ProjectInputDto } from '../../../types/data/projectAPI';
import { createProject } from '../../../api/projectMethods.api';
import { ProjectGalleryRow } from '../../../types/data/project';
import formUtils from './utils';
import S from './styles';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectForm = (props: Props): JSX.Element => {
  const queryClient = useQueryClient();
  const { setModalOpen } = props;

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
        alert('Project created successfully!');
        queryClient.invalidateQueries({ queryKey: ['projects'] });
        if (setModalOpen) setModalOpen(false);
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <S.ProjectForm>
      <Box className='Title-Label-Box'>
        <Typography className="Title-Label">
          <b>
            Create a new project
          </b>
        </Typography>
        {setModalOpen ? (
          <ButtonBase
            onClick={() => setModalOpen(false)}
            disableRipple
          >
            <CloseIcon />
          </ButtonBase>
        ): <></>}
      </Box>

      <FormLabel className='Section-Title-Label'>
        General Information:
      </FormLabel>
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
      <TextField
        variant='outlined'
        value={mainImagePathValue}
        placeholder="Cover Image Path*"
        required
        onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
          setMainImagePathValue((target as HTMLInputElement).value);
        }}
      />
      <Divider />

      <FormLabel className='Section-Title-Label'>
        Description:
      </FormLabel>
      {descriptionBulletValues.map((descriptionBulletValue, i) => (
        <OutlinedInput
          className='Input-With-Icon'
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
        Add description bullet +
      </Button>
      <Divider />

      <FormLabel className='Section-Title-Label'>
        Project Gallery Rows:
      </FormLabel>
      {galleryValues.map((galleryRow, i) => (
        <Box key={i} className="Row-Box">
          <FormLabel className='Sub-Label'>
            Row {i + 1}
          </FormLabel>
          <Box className="Cell-Amount-Box">
            <Typography>Specify amount of cells</Typography>
            <Select
              variant='outlined'
              defaultValue={galleryRow.cellAmount}
              onChange={(e) => formUtils.updateGalleryRows(e, i, galleryValues, setGalleryValues)}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select>
          </Box>
          {galleryRow.cells.map((cellValue, j) => (
            <Box key={j} className="Cell-Links-Box">
              <Select
                defaultValue={cellValue.type}
                onChange={(e) => {
                  const newGalleryValues = [...galleryValues];
                  newGalleryValues[i].cells[j].type = e.target.value as ProjectGalleryRow['cells'][number]['type'];
                  setGalleryValues(newGalleryValues);
                }}
              >
                <MenuItem value="image link">image link</MenuItem>
                <MenuItem value="direct video link">direct video link</MenuItem>
                <MenuItem value="embedded video link">youtube video link</MenuItem>
              </Select>
              <TextField
                variant='outlined'
                type="text"
                value={cellValue.path}
                placeholder="Path*"
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
        Add a new gallery row +
      </Button>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </S.ProjectForm>
  );
};

export default ProjectForm;
