import React from 'react'
import Layout from './Layout'

export const decorators = [
    (Story) => (
        <Layout>
            <Story />
        </Layout>
    )
]
