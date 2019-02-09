import { storiesOf } from '@storybook/react'
import { random } from 'faker'
import * as React from 'react'

import MyButton from '.'

storiesOf('atoms/MyButton', module).add('default', () => {
    return (
    <MyButton name={random.word()} message={random.word()}></MyButton>
    )
});