import React, { forwardRef, useContext } from 'react';
import S from './styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { onProjectsTileMouseMove, onProjectsTileMouseOut, onProjectsTileMouseOver } from './utils';
import { useQueryClient } from '@tanstack/react-query';
import { GlobalContext } from '../../../../contexts/global';
import { checkIfCachedQueryDataExists } from '../../../../utils/loadingUtils';

interface Props {
  id: string;
  category: string;
  imagePath: string;
}

const ProjectBox = forwardRef((props: Props, ref) => {
  const queryClient = useQueryClient();
  const {
    pageLoadingState: [, setIsPageLoading],
  } = useContext(GlobalContext);
  const { category, imagePath, id } = props;

  return (
    <S.ProjectBox className="ProjectBox-Container" ref={ref}>
      <Link
        to={`/projects/${id}`}
        onClick={() => {
          const cachedProjectExists = checkIfCachedQueryDataExists(queryClient, ['project', id]);
          if (!cachedProjectExists) {
            setIsPageLoading(true);
          }
        }}
        draggable="false"
      >
        <img
          src={imagePath}
          className="ProjectBox-Img"
          draggable={false}
          onMouseOver={onProjectsTileMouseOver}
          onMouseOut={onProjectsTileMouseOut}
          onMouseMove={onProjectsTileMouseMove}
        />
        <Typography className="Category-Name">{`#${category}`}</Typography>
        <Box className="ProjectBox-Shadow" />
      </Link>
    </S.ProjectBox>
  );
});

ProjectBox.displayName = 'ProjectBox';

export default ProjectBox;
