import { Button } from '@mui/material';

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
      href={`#${item}`}
    >
      {item}
    </Button>
  );
};

export default NavBarItem;
