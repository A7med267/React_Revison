import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Switch from '@mui/material/Switch';
const label = { slotProps: { input: { 'aria-label': 'Switch demo' } } };

export default function AccordionUsage() {
  const id = React.useId();

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Container maxWidth="md" style={{marginTop:"50px", textAlign:"center"}} >
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel1-content`}
            id={`${id}-panel1-header`}
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel2-content`}
            id={`${id}-panel2-header`}
          >
            <Typography component="span">HIIII</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Switch {...label} checked={checked} onChange={handleChange} defaultChecked />
          </AccordionDetails>
        </Accordion>
      
      </div>

      <Collapse in={checked} collapsedSize={20}>
      <div style={{height:"300px", background:"darkBlue", color:"white", paddingTop:"30px"}}>
        <h1>
          I'M Ahmed Ramadan 🫡
        </h1>
      </div>
      </Collapse>

    </Container>
  );
}
