import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchCourses:{
    marginTop: '5rem'
  },
  searchButton:{
    padding:"10px 0px",
    fontSize: '20px',
    backgroundColor:"#0753B1",
    color : "white",
    width: '100%'
  },
  searchByTags:{
    width: '80%'
  }
}));
