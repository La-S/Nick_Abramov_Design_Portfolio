import React, { /* useContext */ } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import { GlobalContext } from '../../contexts/global';

const PhotoBlogProjectPage = (): JSX.Element => {
  // const {
  //   pageLoadingState: [isPageLoading, setIsPageLoading],
  // } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const projectId = state?.projectId;
  if (!projectId) navigate('/photo-blog'); // Redirect to photo blog page

  return (
    <></>
  );
};

export default PhotoBlogProjectPage;
