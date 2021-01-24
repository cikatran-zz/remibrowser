import styled, {css} from '@emotion/native';
import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RemiWebviewToolbar({
  canGoBack,
  canGoForward,
  onGoBack,
  onGoForward,
  onEnterLink,
  ...props
}) {
  return (
    <ToolbarContainer>
      <ActionButtonContainer>
        <TouchableOpacity onPress={onGoBack}>
          <Icon
            size={20}
            name="arrow-left-bold-circle-outline"
            color={'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onGoForward}>
          <Icon
            size={20}
            name="arrow-right-bold-circle-outline"
            color={'darkgrey'}
          />
        </TouchableOpacity>
      </ActionButtonContainer>
      <TextInput
        style={css`
          flex: 8;
          height: 30px;
          border: 0.5px;
          border-radius: 3px;
          padding: 3px;
          background-color: white;
        `}
        placeholder="Enter website link..."
        onSubmitEditing={(event) => onEnterLink(event.nativeEvent.text)}
      />
    </ToolbarContainer>
  );
}

const ToolbarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: whitesmoke;
  padding: 5px;
  height: 50px;
  width: 100%;
`;

const ActionButtonContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;
