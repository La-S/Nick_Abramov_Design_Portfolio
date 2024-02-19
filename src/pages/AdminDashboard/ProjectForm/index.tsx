import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Select,
  TextField,
  OutlinedInput,
  Typography,
  ButtonBase,
  FormLabel,
  Divider,
  MenuItem,
  CircularProgress,
  Checkbox,
  AlertColor,
} from '@mui/material';
import Alert from '../../../components/Alert';
import { X as CloseIcon, Trash as TrashIcon, UploadSimple as UploadIcon } from '@phosphor-icons/react';
import { createProject, getProject, updateProject } from '../../../api/projectMethods.api';
import type { ProjectGalleryRow } from '../../../types/data/project';
import type { ProjectInputDto } from '../../../types/data/projectAPI';
import formUtils from './utils';
import S from './styles';
import { useQueryClient } from '@tanstack/react-query';
import { EMPTY_PROJECT } from '../../../hooks/useProject';
import type { AlertDisplayProps } from '../../../components/Alert/props';

interface Props {
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  projectId?: string;
}

const ProjectForm = (props: Props): JSX.Element => {
  const queryClient = useQueryClient();
  const { setModalOpen, projectId } = props;
  const [project, setProject] = useState(EMPTY_PROJECT);
  const [isFetched, setIsFetched] = useState(false);
  const [alertState, setAlertState] = useState<AlertDisplayProps>({
    open: false,
    message: '',
    severity: 'info',
  });

  const [nameValue, setNameValue] = useState(project.name);
  const [categoryValue, setCategoryValue] = useState(project.category);
  const [descriptionBulletValues, setDescriptionBulletValues] = useState(project.descriptionBullets);
  const [mainImagePathValue, setMainImagePathValue] = useState(project.mainImagePath);
  const [isGallerySpacedValue, setIsGallerySpacedValue] = useState(project.isGallerySpaced);
  const [galleryValues, setGalleryValues] = useState(project.gallery);

  const resetFields = () => {
    setNameValue('');
    setCategoryValue('');
    setDescriptionBulletValues([]);
    setMainImagePathValue('');
    setGalleryValues([]);
  };

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
      isGallerySpaced: isGallerySpacedValue,
      gallery,
    };

    if (projectId) {
      updateProject(projectId, projectInputDto)
        .then(() => {
          resetFields();
          alert('Project updated successfully!');
          queryClient.invalidateQueries({ queryKey: ['projects'] });
          setModalOpen?.(false);
        })
        .catch((err) => alert(err.response.data.message));
    } else {
      createProject(projectInputDto)
        .then(() => {
          resetFields();
          alert('Project created successfully!');
          queryClient.invalidateQueries({ queryKey: ['projects'] });
          if (setModalOpen) setModalOpen(false);
        })
        .catch((err) => alert(err.response.data.message));
    }
  };

  const UploadImageButton = (callback: (imagePath: string) => void) => (
    <Button 
      component="label"
      variant="contained"
      startIcon={<UploadIcon className='Hide-On-Smaller-Screens' />}
      sx={{ marginLeft: '10px' }}
    >
      <span>Upload&nbsp;</span>
      <span className='Hide-On-Smaller-Screens'>Image</span>
      <S.VisuallyHiddenInput
        type="file"
        accept="image/png, image/gif, image/jpeg, image/jpg"
        onChange={(e) => {
          formUtils.handleImageUpload(e, setAlertState, callback);
          callback;
        }}
      />
    </Button>
  );

  const renderProjectFormState = (): JSX.Element => {
    if (projectId && !isFetched) {
      return (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      );
    }

    return (
      <>
        <S.ProjectForm
          id="Project-Form"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.shiftKey) e.preventDefault();
          }}
        >
          <Box className="Title-Label-Box">
            <Typography className="Title-Label">
              <b>{projectId ? `Edit '${project.name}' project` : 'Create new project'}</b>
            </Typography>
            {setModalOpen ? (
              <ButtonBase onClick={() => setModalOpen(false)} disableRipple>
                <CloseIcon />
              </ButtonBase>
            ) : (
              <></>
            )}
          </Box>

          <FormLabel className="Section-Title-Label">General Information:</FormLabel>
          <TextField
            variant="outlined"
            value={nameValue}
            placeholder="Project Name"
            autoComplete="off"
            required
            onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
              setNameValue((target as HTMLInputElement).value);
            }}
          />
          <TextField
            variant="outlined"
            value={categoryValue}
            placeholder="Category Name"
            required
            onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
              setCategoryValue((target as HTMLInputElement).value);
            }}
          />
          <Box className="CoverImagePath-Box">
            <TextField
              variant="outlined"
              value={mainImagePathValue}
              placeholder="Cover Image Path"
              required
              onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
                setMainImagePathValue((target as HTMLInputElement).value);
              }}
            />
            {UploadImageButton((imagePath) => setMainImagePathValue(imagePath))}
          </Box>
          <Divider />

          <FormLabel className="Section-Title-Label">Description:</FormLabel>
          {descriptionBulletValues.map((descriptionBulletValue, i) => (
            <OutlinedInput
              className="Input-With-Icon"
              key={i}
              endAdornment={
                <ButtonBase
                  className="EndAdornment-Button"
                  onClick={() => {
                    setDescriptionBulletValues((prevState) => prevState.filter((_, index) => index !== i));
                  }}
                  disableRipple
                >
                  <TrashIcon />
                </ButtonBase>
              }
              value={descriptionBulletValue}
              placeholder={`Description Bullet ${i + 1}`}
              required
              onInput={(e) =>
                formUtils.updateDescriptionBullet(e, i, descriptionBulletValues, setDescriptionBulletValues)
              }
            />
          ))}
          <Button type="button" onClick={() => setDescriptionBulletValues([...descriptionBulletValues, ''])}>
            Add description bullet +
          </Button>
          <Divider />

          <FormLabel className="Section-Title-Label">Project Gallery Rows:</FormLabel>
          {galleryValues.map((galleryRow, i) => (
            <Box key={i} className="Row-Box">
              <Box className="Row-Number-Box">
                <FormLabel className="Sub-Label">Row {i + 1}</FormLabel>
                <ButtonBase
                  onClick={() => {
                    const newGalleryValues = galleryValues.filter((_, index) => index !== i);
                    setGalleryValues(newGalleryValues);
                  }}
                  disableRipple
                >
                  <TrashIcon />
                </ButtonBase>
              </Box>
              <Box className="Cell-Amount-Box">
                <Typography>Specify amount of cells</Typography>
                <Select
                  variant="outlined"
                  value={galleryRow.cellAmount || 1}
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
                    value={cellValue.type || 'image link'}
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
                    variant="outlined"
                    type="text"
                    value={cellValue.path}
                    placeholder="Path"
                    onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
                      const newGalleryValues = [...galleryValues];
                      newGalleryValues[i].cells[j].path = (target as HTMLInputElement).value;
                      setGalleryValues(newGalleryValues);
                    }}
                  />
                  {(cellValue.type === 'image link' || !cellValue.type) && !cellValue.path 
                    ? UploadImageButton((imagePath) => {
                      const newGalleryValues = [...galleryValues];
                      newGalleryValues[i].cells[j].path = imagePath;
                      setGalleryValues(newGalleryValues);
                    })
                    : <></>}
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
          <Box className="Gallery-Space-Box">
            <Checkbox
              size="medium"
              checked={isGallerySpacedValue}
              onChange={(e) => setIsGallerySpacedValue(e.target.checked)}
            />
            <FormLabel className="Sub-Label">Add space between gallery items</FormLabel>
          </Box>

          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </S.ProjectForm>
        {alertState.open ? <Alert severity={alertState.severity as AlertColor}>{alertState.message}</Alert> : <></>}
      </>
    );
  };

  useEffect(() => {
    if (!projectId) return;

    setNameValue(project.name);
    setCategoryValue(project.category);
    setDescriptionBulletValues(project.descriptionBullets);
    setMainImagePathValue(project.mainImagePath);
    setGalleryValues(project.gallery);
    setIsGallerySpacedValue(project.isGallerySpaced);
  }, [project]);

  useEffect(() => {
    if (!projectId) return;

    getProject(projectId)
      .then(({ data }) => {
        setProject(data);
        setIsFetched(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
        if (setModalOpen) setModalOpen(false);
      });
  }, []);

  return renderProjectFormState();
};

export default ProjectForm;
