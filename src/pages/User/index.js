import React from 'react';
import { Button } from 'react-native';

import { Container } from './styles';

export default function User({ navigation }) {
    return (
        <Container>
            <Button title='Go to Main' onPress={() => navigation.navigate('Main')}/>
        </Container>
    );
}
