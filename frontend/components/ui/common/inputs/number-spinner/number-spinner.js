import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import concat from 'classnames';
import { useState } from 'react';
import useInterval from '../../../../../hooks/use-interval';
import OutlinedIconButton from '../../buttons/icon-button/icon-button-outlined';
import scss from './number-spinner.module.scss';

function NumberSpinner({
  steps = 1,
  min = 1,
  max = 100,
  className,
  ...props
}) {
  const [value, setValue] = useState(min);
  const [mouseDirection, setMouseDirection] = useState(null);

  useInterval(
    () => handleButtonChange(mouseDirection),
    mouseDirection ? 100 : null
  );

  const handleChange = (event) => {
    setValue(() => {
      const nextNumeric = +event.target.value;
      if (nextNumeric < min) return min;
      if (nextNumeric > max) return max;
      return nextNumeric;
    });
  };

  const handleButtonChange = (direction) => {
    setValue((current) => {
      let next;

      switch (direction) {
        case 'up':
          next = current + steps;
          break;
        case 'down':
          next = current - steps;
          break;
        default:
          next = current;
          break;
      }

      if (next < min || next > max) return current;
      return next;
    });
  };

  return (
    <div className={concat(scss['input-number'], className)}>
      <OutlinedIconButton
        onClick={() => handleButtonChange('down')}
        onMouseDown={() => setMouseDirection('down')}
        onMouseOut={() => setMouseDirection(null)}
        onMouseUp={() => setMouseDirection(null)}>
        <RemoveRoundedIcon />
      </OutlinedIconButton>
      <input
        type='number'
        step={steps}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <OutlinedIconButton
        onClick={() => handleButtonChange('up')}
        onMouseDown={() => setMouseDirection('up')}
        onMouseUp={() => setMouseDirection(null)}
        onMouseOut={() => setMouseDirection(null)}>
        <AddRoundedIcon />
      </OutlinedIconButton>
    </div>
  );
}

export default NumberSpinner;
