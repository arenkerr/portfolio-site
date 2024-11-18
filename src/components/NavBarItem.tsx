'use client';
import { Button } from '@mui/material';
import { Link } from 'react-scroll';

interface NavBarItemProps {
  item: string;
}

const NavBarItem = ({ item }: NavBarItemProps) => {
  return (
    <Button
      key={item}
      sx={{
        my: 2,
        mx: 2,
        display: 'block',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 700,
        color: 'text.primary',
      }}
    >
      <Link to={item} smooth={true}>
        {item}
      </Link>
    </Button>
  );
};

export default NavBarItem;
