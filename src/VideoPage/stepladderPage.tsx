import Typography from '@mui/material/Typography';
import LadderVideo from "../VideoComponent/ladderVideo";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';

export default function StepladderPage() {
    return (
      <Container>
         <Typography variant="h6" align='center' sx={{mb:1.5,fontWeight: 'bold',letterSpacing: 1.8}}>
         はしごや脚立からの墜落・転落<br/>災害をなくしましょう！
        </Typography>
        <LadderVideo />
        <Card variant="outlined" sx={{mt:1}}>
        <Typography variant='body2'sx={{m:1,letterSpacing: 1}}>
        はしごや脚立は、ごく身近な用具であるため、 墜落・転落の危険をそれほど感じずに使用する場合が多いのではないでしょうか。しかし、過去の災害事例を見ると、骨折などの重篤な災害が多数発生し、負傷箇所によっては死亡に至る災害も少なくありません。
        </Typography>
        </Card>

      </Container>
        );
  }