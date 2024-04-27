type ProjectBoxMouseEvent = React.MouseEvent<HTMLImageElement, MouseEvent>;

export const onProjectsTileMouseOver = (e: ProjectBoxMouseEvent) => {
  if (e.target === null) return;

  const projectImage = e.target as HTMLImageElement;
  projectImage.style.transform = 'scale(1.05)';
};
export const onProjectsTileMouseOut = (e: ProjectBoxMouseEvent) => {
  if (e.target === null) return;

  const projectImage = e.target as HTMLImageElement;
  projectImage.style.transform = 'scale(1)';
};
export const onProjectsTileMouseMove = (e: ProjectBoxMouseEvent) => {
  if (e.target === null) return;

  const projectImage = e.target as HTMLImageElement;
  const projectImageBoundingBox = projectImage.getBoundingClientRect();
  const transformOriginX = ((e.clientX - projectImageBoundingBox.left) / projectImageBoundingBox.width) * 100;
  const transformOriginY = ((e.clientY - projectImageBoundingBox.top) / projectImageBoundingBox.height) * 100;

  projectImage.style.transformOrigin = `${transformOriginX}% ${transformOriginY}%`;
};

export const formatProjectName = (name: string) => {
  const nameLowerCase = name.toLowerCase();
  const filteredNameParts = nameLowerCase.split(' ').filter((namePart) => namePart !== '-');
  const formattedName = filteredNameParts.join('-');

  return formattedName;
};
