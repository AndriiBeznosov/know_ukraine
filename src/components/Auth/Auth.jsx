import {
  Block,
  CloudAnime1,
  CloudAnime2,
  CloudAnime3,
  CloudAnime5,
  CloudAnime4,
  Container,
  Div,
} from './Auth.styled';
import Ukraine from '../../image/Ukraine.png';
import cloud_1 from '../../image/cloud_1.png';
import cloud_3 from '../../image/cloud_3.png';
import cloud_4 from '../../image/cloud_4.png';

import { FormWrapper } from '../Form/Form';

export const Auth = () => {
  return (
    <Container>
      <FormWrapper />
      <CloudAnime1 src={cloud_1} alt="photo" />
      <CloudAnime2 src={cloud_3} alt="photo" />
      <CloudAnime3 src={Ukraine} alt="photo" />
      <CloudAnime5 src={cloud_4} alt="photo" />
      <CloudAnime4 src={cloud_4} alt="photo" />
      <Div />
      <Block />
    </Container>
  );
};
