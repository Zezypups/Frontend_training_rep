import { Typography, Link } from "@material-ui/core";

export default function Personal() {
  return (
    <>
      <img src='Profile.jpg' alt='profile-img' />
      <Typography variant='h1'>
        Hello, I am Zezypups! I am a beginner front-end developer.
      </Typography>
      <Link href="https://github.com/Zezypups" target='blank'>
        Here is my GitHub
      </Link>
    </>
  )
}