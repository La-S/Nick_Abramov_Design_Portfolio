import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { formatStringToUriPath } from '../../../../utils/apiUtils';
import { checkIfCachedQueryDataExists } from '../../../../utils/loadingUtils';
import { GlobalContext } from '../../../../contexts/global';
import S, { classes } from './styles';
import type { PBProjectSummary } from '../../../../types/data/pBProject';
import { generatePBProjectDateString } from '../../utils';

interface PBProjectsGridBoxProps {
  pBProjectSummary: PBProjectSummary
}

const PBProjectsGridBox = ({
  pBProjectSummary,
}: PBProjectsGridBoxProps): JSX.Element => {
  const queryClient = useQueryClient();
  const {
    pageLoadingState: [, setIsPageLoading],
  } = useContext(GlobalContext);
  const { id, dateInfo, nameInfo, mainImage } = pBProjectSummary;
  const formattedName = formatStringToUriPath(nameInfo.full);
  const formattedDateString = generatePBProjectDateString(dateInfo);

  return (
    <S.PBProjectsGridBox className={classes.root}>
      <Link
        to={`/photo-blog/${formattedName}`}
        state={{ pBProjectId: id }}
        onClick={() => {
          const cachedPBProjectExists = checkIfCachedQueryDataExists(queryClient, ['photo-blog-project', id]);
          if (!cachedPBProjectExists) setIsPageLoading(true);
        }}
        draggable="false"
      >
        <img
          src={mainImage.path}
          className='Loadable-Image'
          {...(mainImage.alt ? { alt: mainImage.alt } : {})}
        />

        <p>
          <span className={classes.name}>{nameInfo.short || nameInfo.full}</span>
          <span className={classes.dateCreatedString}>{formattedDateString}</span>
        </p>
      </Link>
    </S.PBProjectsGridBox>
  );
};

export default PBProjectsGridBox;
