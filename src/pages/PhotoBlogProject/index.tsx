import React, { /* useContext */ } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import usePhotoBlogProject from '../../hooks/usePhotoBlogProject';
// import { GlobalContext } from '../../contexts/global';

const PhotoBlogProjectPage = (): JSX.Element => {
  // const {
  //   pageLoadingState: [isPageLoading, setIsPageLoading],
  // } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const photoBlogProjectId = state?.photoBlogProjectId;
  if (!photoBlogProjectId) navigate('/photo-blog'); // Redirect to photo blog page

  const {
    photoBlogProject,
    ...photoBlogProjectResponse
  } = usePhotoBlogProject(photoBlogProjectId || '');

  console.log({ photoBlogProject, photoBlogProjectResponse });

  return (
    <></>
  );
};

export default PhotoBlogProjectPage;
