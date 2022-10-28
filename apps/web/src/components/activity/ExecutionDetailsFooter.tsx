import { Group } from '@mantine/core';
import styled from 'styled-components';

import { GotAQuestionButton } from '../utils/GotAQuestionButton';
import { colors, Container, Text } from '../../design-system';

const ActionsWrapper = styled(Container)`
  margin: 0;
  padding: 0;
`;

export const ExecutionDetailsFooter = () => {
  return (
    <Group position="right">
      <ActionsWrapper>
        {/* TODO: Button has a margin top that's not possible to overload */}
        <GotAQuestionButton mt={30} size="md" />
      </ActionsWrapper>
    </Group>
  );
};
