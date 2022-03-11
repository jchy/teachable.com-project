import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  ul: {
    justifyContent: 'space-around',
  },
  container : {
    width:"260px",
    marginRight : "20px"
  },
  links : {
    margin:"10px",
    marginTop:"40px",
    textDecoration:"none", 
    backgroundColor:"aqua", 
    padding:"8px",
    flexWrap: 'wrap',
    color : 'black'
  },
  brandContainer : {
    textDecoration:"none",
    color : "black",
    fontSize : "16px",
    lineHeight : "20px"
  }
}));
