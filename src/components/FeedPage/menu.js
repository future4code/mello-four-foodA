import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import styled from 'styled-components';

const MenuContainer = styled.div `

    max-height: 2.625rem;
    margin-top: 0.75rem;

    span {
      margin-right: 0.75rem;
      margin-left: 0.75rem;
      color: #e8222e;
      font-size: 1rem;
      letter-spacing: -0.39px;
    }
`

const useStyles = makeStyles((theme) => ({
    
  root: {
    width: '22.5rem',
    height: '2.625rem',
    marginBottom: '0.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    width: '100%',
    justifyContent: 'Flex-start'
  },
  title: {
    color: 'black'
  },
  titleBar: {
    background:
      'blue'
  },
}));

export default function SingleLineGridList( {restaurants} ) {
  const classes = useStyles();
  const rest = restaurants;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4}>
        {rest.map((restaurant) => (
          <MenuContainer>
            <span>{restaurant.category}</span>
          </MenuContainer>
        ))}
      </GridList>
    </div>
  );
}