import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { useDarkMode } from '@play-with-me/ui';

interface INFO_LINKS {
  text: string;
  links?: string;
}

const INFO_LINKS = [
  { text: 'מי אנחנו' },
  { text: 'שאלות נפוצות' },
  { text: 'צרו קשר' },
];

const infoLinksElmProps: { variant: Variant; color: string } = {
  variant: 'subtitle1',
  color: '#808080',
};

const InfoLinks = () => {
  const { theme } = useDarkMode();

  return (
    <div
      style={{
        height: '7%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      {INFO_LINKS.map((item, index) => {
        return (
          <>
            <Typography
              {...infoLinksElmProps}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  color: `${theme.palette.primary.main}`,
                },
              }}
            >
              {item.text}
            </Typography>
            {index + 1 !== INFO_LINKS.length && (
              <Typography {...infoLinksElmProps}>|</Typography>
            )}
          </>
        );
      })}
    </div>
  );
};

export default InfoLinks;
