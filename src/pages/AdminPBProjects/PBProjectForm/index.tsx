import React, { useEffect, useState } from 'react';
import {
  AlertColor,
  Button,
  ButtonBase,
  CircularProgress,
  Divider,
  FormLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Alert from '../../../common/components/Alert';
import { X as CloseIcon, Trash as TrashIcon, UploadSimple as UploadIcon } from '@phosphor-icons/react';
import { useQueryClient } from '@tanstack/react-query';
import { EMPTY_PBPROJECT } from '../../../hooks/usePBProject';
import { createPBProject, getPBProject, updatePBProject } from '../../../api/pBProjectMethods.api';
import utils from './utils';
import formUtils from '../../../utils/formUtils';
import S from './styles';
import type { AlertDisplayProps } from '../../../common/components/Alert/props';
import type { PBProjectInputDto } from '../../../types/data/pBProjectAPI';

const ORDERED_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

interface PBProjectFormProps {
  pBProjectId?: string;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PBProjectForm = ({
  pBProjectId,
  setModalOpen,
}: PBProjectFormProps): JSX.Element => {
  const queryClient = useQueryClient();
  const [pBProject, setPBProject] = useState(EMPTY_PBPROJECT);
  const [isFetched, setIsFetched] = useState(false);
  const [alertState, setAlertState] = useState<AlertDisplayProps>({
    open: false,
    message: '',
    severity: 'info',
  });

  const [nameInfoValue, setNameInfoValue] = useState(pBProject.nameInfo);
  const [dateInfoValue, setDateInfoValue] = useState(pBProject.dateInfo);
  const [mainImageValue, setMainImageValue] = useState(pBProject.mainImage);
  const [descriptionValue, setDescriptionValue] = useState(pBProject.description);
  const [gallerySectionsValue, setGallerySectionsValue] = useState(pBProject.gallerySections);

  const resetFields = () => {
    setNameInfoValue({
      full: '',
      short: '',
    });
    setDateInfoValue({
      monthIndex: 0,
      year: 0,
    });
    setMainImageValue({
      path: '',
      alt: '',
    });
    setDescriptionValue('');
    setGallerySectionsValue([]);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const pBProjectInputDto: PBProjectInputDto = {
      nameInfo: {
        full: nameInfoValue.full.trim(),
        short: nameInfoValue.short?.trim(),
      },
      dateInfo: {
        monthIndex: dateInfoValue.monthIndex,
        year: dateInfoValue.year,
      },
      mainImage: {...mainImageValue },
      description: descriptionValue.trim(),
      gallerySections: [...gallerySectionsValue],
    };

    if (pBProjectId) {
      updatePBProject(pBProjectId, pBProjectInputDto)
        .then(() => {
          resetFields();
          alert('Photo blog project updated successfully!');
          queryClient.invalidateQueries({ queryKey: ['photo-blog-projects'] });
          setModalOpen?.(false);
        })
        .catch((err) => alert(err.response.data.message));
    } else {
      createPBProject(pBProjectInputDto)
        .then(() => {
          resetFields();
          alert('Photo blog project created successfully!');
          queryClient.invalidateQueries({ queryKey: ['photo-blog-projects'] });
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
    if (pBProjectId && !isFetched) {
      return (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </div>
      );
    }

    return (
      <>
        <S.PBProjectForm
          id="Project-Form"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.shiftKey) e.preventDefault();
          }}
        >
          <div className="Title-Label-Box">
            <Typography className="Title-Label">
              <b>{pBProjectId ? `Edit '${pBProject.nameInfo.full}' project` : 'Create new photo blog project'}</b>
            </Typography>
            {setModalOpen ? (
              <ButtonBase onClick={() => setModalOpen(false)} disableRipple>
                <CloseIcon />
              </ButtonBase>
            ) : (
              <></>
            )}
          </div>

          <FormLabel className="Section-Title-Label">General Information:</FormLabel>
          <TextField
            variant="outlined"
            value={nameInfoValue.full}
            placeholder="Project Name (Full)"
            autoComplete="off"
            required
            onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
              setNameInfoValue({
                ...nameInfoValue,
                full: (target as HTMLInputElement).value,
              });
            }}
          />
          <TextField
            variant="outlined"
            value={nameInfoValue.short}
            placeholder="Project Name (Short)"
            autoComplete="off"
            required
            onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
              setNameInfoValue({
                ...nameInfoValue,
                short: (target as HTMLInputElement).value,
              });
            }}
          />
          <div className="CoverImagePath-Box">
            <TextField
              variant="outlined"
              value={mainImageValue.path}
              placeholder="Cover Image Path"
              required
              onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
                const imagePath = (target as HTMLInputElement).value;
                setMainImageValue({ ...mainImageValue, path: imagePath });
              }}
            />
            {UploadImageButton((imagePath) => setMainImageValue({ ...mainImageValue, path: imagePath }))}
          </div>
          <div className="CoverImageAlt-Box">
            <TextField
              variant="outlined"
              value={mainImageValue.alt}
              placeholder="Cover Image Alt Text (SEO)"
              required
              onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
                const altText = (target as HTMLInputElement).value;
                setMainImageValue({ ...mainImageValue, alt: altText });
              }}
            />
          </div>
          <Divider />

          <FormLabel className="Section-Title-Label">Date Created:</FormLabel>
          <div className="DateInfo-Box">
            <Select
              className="DateInfo-MonthSelector"
              value={pBProject.dateInfo.monthIndex || 0}
              onChange={({ target }) => {
                const newMonthIndexValue = (
                  target as unknown as HTMLSelectElement
                ).value;
                setDateInfoValue({
                  ...dateInfoValue,
                  monthIndex: parseInt(newMonthIndexValue, 10),
                });
              }}
            >
              {ORDERED_MONTHS.map((month, i) => (
                <MenuItem key={month} value={i}>{month}</MenuItem>
              ))}
            </Select>
            <TextField
              variant="outlined"
              value={dateInfoValue.year}
              placeholder="Year created"
              required
              type='number'
              onInput={({ target }: React.FormEvent<HTMLInputElement>) => {
                const newYearValue = parseInt(
                  (target as HTMLInputElement).value,
                  10
                );
                setDateInfoValue({...dateInfoValue, year: newYearValue });
              }}
            />
          </div>
          <Divider />

          <div className="Description-Label-Wrapper">
            <FormLabel className="Section-Title-Label">Description:</FormLabel>
            <a
              href='https://www.markdownguide.org/cheat-sheet/'
              target='_blank'
              rel='noreferrer'
            >
              Markdown cheat sheet
            </a>
          </div>
          <TextField
            multiline
            value={descriptionValue}
            placeholder='Description (markdown format)'
            required
            onInput={(e) => {
              setDescriptionValue((e.target as HTMLInputElement).value);
            }}
            onKeyDown={(e) => utils.onKeyDownDescriptionField(
              e, [descriptionValue, setDescriptionValue]
            )}
          />
          <Typography className='Description-Note'>
            <strong>Note</strong>
            {': For a new line break, use \'\\\' symbol'}
          </Typography>
          <Divider />

          <FormLabel className="Section-Title-Label">Project Gallery Sections:</FormLabel>
          {gallerySectionsValue.map((gallerySection, i) => (
            <div key={i} className="Section-Box">
              <div className="Section-Number-Box">
                <FormLabel className="Sub-Label">Section {i + 1}</FormLabel>
                <ButtonBase
                  onClick={() => {
                    const newGallerySectionsValue = gallerySectionsValue.filter((_, index) => index !== i);
                    setGallerySectionsValue(newGallerySectionsValue);
                  }}
                  disableRipple
                >
                  <TrashIcon />
                </ButtonBase>
              </div>
              <TextField
                variant="outlined"
                value={gallerySection.title}
                placeholder="Section Title"
                autoComplete="off"
                required
                onInput={({ target }) => {
                  const newGallerySectionsValue = [...gallerySectionsValue];
                  newGallerySectionsValue[i].title = (
                    target as HTMLInputElement
                  ).value as string;

                  setGallerySectionsValue(newGallerySectionsValue);
                }}
              />
              <TextField
                variant="outlined"
                value={gallerySection.description}
                placeholder="Section Description"
                autoComplete="off"
                required
                onInput={({ target }) => {
                  const newGallerySectionsValue = [...gallerySectionsValue];
                  newGallerySectionsValue[i].description = (
                    target as HTMLInputElement
                  ).value as string;

                  setGallerySectionsValue(newGallerySectionsValue);
                }}
              />
            </div>
          ))}

          <Button
            type="button"
            onClick={() =>
              setGallerySectionsValue([
                ...gallerySectionsValue,
                { title: '', description: '', rows: [] },
              ])
            }
          >
            Add a new gallery section +
          </Button>

          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </S.PBProjectForm>

        {alertState.open ? <Alert severity={alertState.severity as AlertColor}>{alertState.message}</Alert> : <></>}
      </>
    );
  };

  useEffect(() => {
    if (!pBProjectId) return;

    setNameInfoValue(pBProject.nameInfo);
    setDateInfoValue(pBProject.dateInfo);
    setMainImageValue(pBProject.mainImage);
    setDescriptionValue(pBProject.description);
    setGallerySectionsValue(pBProject.gallerySections);
  }, [pBProject]);

  useEffect(() => {
    if (!pBProjectId) return;


    getPBProject(pBProjectId)
      .then(({ data }) => {
        setPBProject(data);
        setIsFetched(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
        if (setModalOpen) setModalOpen(false);
      });
  }, []);

  return renderProjectFormState();
};

export default PBProjectForm;
