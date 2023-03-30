import { GalleryPhoto } from '../components/Home/GalleryPhoto/GalleryPhoto';
import { Main } from '../components/Wrapper/Wrapper';

export const Gallery = ({ status }) => {
  return (
    <Main status={status}>
      <GalleryPhoto />
    </Main>
  );
};
