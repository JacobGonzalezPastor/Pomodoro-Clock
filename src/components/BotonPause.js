import React from 'react'
import {Button, Icon} from 'semantic-ui-react';
const BotonPause = (props) => {
  return (
    <Button {...props}>
        <Icon name='pause' />
    </Button>
  )
}

export default BotonPause