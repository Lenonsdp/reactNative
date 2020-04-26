import React from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default function Main({ navigation }) {
    return (
        <Container>
            <Form>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Adicionar usuário"
                />
                <SubmitButton>
                    <Icon name="add" size={20} color="#fff" />
                </SubmitButton>
            </Form>
            {/* <Button title='Go to User' onPress={() => navigation.navigate('User')}/> */}
        </Container>
    );
}
