import React from 'react'
import {Button, Icon} from 'semantic-ui-react';
const BotonInicio = (props) => {
  return (
    <Button {...props}>
        <Icon name='play'></Icon>
    </Button>
  )
}

export default BotonInicio