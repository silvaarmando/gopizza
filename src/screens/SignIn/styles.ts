import styled from 'styled-components/native'

import {
  LinearGradient
} from 'expo-linear-gradient'

export const Container = styled(LinearGradient).attrs((
  { theme }
) => ({
    colors: theme.COLORS.GRADIENT,
    start: {
      x: 0,
      y: 1
    },
    end: {
      
    }
  }
))`
  flex: 1;
  justify-content: center;
`;  