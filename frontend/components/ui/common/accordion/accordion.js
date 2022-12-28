import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionMUI from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import scss from './accordion.module.scss';

function Accordion({ summary, children, className }) {
  let accordionClassName = scss['accordion'];
  if (className)
    accordionClassName = `${scss['accordion']} ${className}`;

  return (
    <AccordionMUI className={accordionClassName}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h3>{summary}</h3>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordionMUI>
  );
}

export default Accordion;
