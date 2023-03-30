import { Button } from './Slider.styled';
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <Button button={direction === 'next'} type="button" onClick={moveSlide}>
      {direction === 'next' ? <VscArrowLeft /> : <VscArrowRight />}
    </Button>
  );
}
