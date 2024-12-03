import React, { useContext, useEffect, useRef } from 'react';
import S from './styles';
import PBProjectsGridBox from './PBProjectsGridBox';
import usePBProjects from '../../../hooks/usePBProjects';
import { useGSAP } from '@gsap/react';
import { GlobalContext } from '../../../contexts/global';
import gsap from 'gsap';
import { classes as gridBoxClasses } from './PBProjectsGridBox/styles';

const PBProjectsGrid = (): JSX.Element => {
  const gridRef = useRef<HTMLDivElement>(null);
  const {
    pageLoadingState: [isPageLoading],
  } = useContext(GlobalContext);
  const {
    pBProjects,
    ...pBProjectsResponse
  } = usePBProjects({ summary: true });
  const wereGSAPAnimationsTriggeredRef = useRef(pBProjectsResponse.isFetched);

  useGSAP(() => {
    if (isPageLoading
      || !pBProjectsResponse.isFetched
      || wereGSAPAnimationsTriggeredRef.current) return;

    gsap.fromTo(
      `.${gridBoxClasses.root}`,
      { opacity: 0, scale: 1.25 },
      { opacity: 1, scale: 1, stagger: 0.1, duration: 0.35 }
    );
  }, {
    scope: gridRef,
    dependencies: [isPageLoading, pBProjectsResponse.isFetched]
  });

  useEffect(() => {
    if (pBProjectsResponse.isFetched
      && !wereGSAPAnimationsTriggeredRef.current) {
      wereGSAPAnimationsTriggeredRef.current = true;
    }
  }, []);

  return (
    <S.PBProjectsGrid ref={gridRef}>
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
