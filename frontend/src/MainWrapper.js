import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function MainWrapper(props) {
  return (
    <Box
        sx={{
            display: 'flex',
            height: '100vh',
            width: '100vw',
            margin: '0',
        }}>
        <Container maxWidth="lg">
        {props.children}
        </Container>
    </Box>
  )
}