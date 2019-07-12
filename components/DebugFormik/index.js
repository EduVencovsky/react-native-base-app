import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { FormikConsumer } from 'formik'

export const DebugFormik = () => (
    <ScrollView
        style={{
            height: 100
        }}
    >
        <FormikConsumer>
            {(
                { validationSchema, validate, onSubmit, ...rest } // eslint-disable-line no-unused-vars
            ) => <Text>{JSON.stringify(rest, null, 2)}</Text>}
        </FormikConsumer>
    </ScrollView>
)
