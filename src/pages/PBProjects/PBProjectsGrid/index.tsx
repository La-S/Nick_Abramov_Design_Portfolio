import React from 'react';
import S from './styles';
import PBProjectsGridBox from './PBProjectsGridBox';
import usePBProjects from '../../../hooks/usePBProjects';

const PBProjectsGrid = (): JSX.Element => {
  const {
    pBProjects,
    ...pBProjectsResponse
  } = usePBProjects({ summary: true });

  return (
    <S.PBProjectsGrid>
      {
        pBProjectsResponse.isFetched
          ? pBProjects.map((pBProjectSummary, i) => (
            <PBProjectsGridBox
              pBProjectSummary={pBProjectSummary}
              key={i}
            />
          )) : <></>
      }
    </S.PBProjectsGrid>
  );
};

export default PBProjectsGrid;
