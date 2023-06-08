import classes from './Cendol.module.css';

const Cendol = ({count,initialValueFetcher}) => {
    
  return (
    <h1 className={classes.count}>
        {count}
    </h1>
  );
}

export default Cendol;
