import { styled } from '@mui/system';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
// import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';


export const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#e4e8ef',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

export const Tab = styled(TabUnstyled)`
              font-family: IBM Plex Sans, sans-serif;
              cursor: pointer;
              font-size: 0.875rem;
              font-weight: bold;
              background-color: transparent;
              width: 96%;
              padding: 12px 16px;
              margin: 6px 6px;
              border: none;
              display: flex;
              justify-content: center;

              &:hover {
                  background-color: ${blue[400]};
              }
              &.${tabUnstyledClasses.selected} {
                  // active tab color will be white 
                  background-color: ${blue[50]};
                  color: ${blue[600]};
              }

              &.${buttonUnstyledClasses.disabled} {
                  opacity: 0.5;
                  cursor: not-allowed;
              }
              `;
export const TabsList = styled(TabsListUnstyled)`
              min-width: 20%;
              background-color: ${blue[500]};
              margin-bottom: 16px;
              display: flex;
              flex-direction:column;
              align-items: center;
              justify-content: center;
              align-content: space-between;
              `;