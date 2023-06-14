import Typography from '@mui/material/Typography';
import LadderVideo from "../VideoComponent/ladderVideo";
import Container from '@mui/material/Container';

export default function StepladderPage() {
    return (
      <Container>
         <Typography variant="h6" align='center' sx={{fontWeight: 'bold',letterSpacing: 1.8}}>
         はしごや脚立からの墜落・転落<br/>災害をなくしましょう！
        </Typography>
      <LadderVideo />
      </Container>
        );
  }