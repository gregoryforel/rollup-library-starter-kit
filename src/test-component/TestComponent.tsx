import { Button } from 'antd'
import * as React from 'react'

import { TestComponentProps } from './TestComponent.types'

import styles from './TestComponent.module.less'

export const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
    <div
        data-testid="test-component"
        // className={`test-component test-component-${theme}`}
    >
        <h1 className={styles.test}>I'm the test component</h1>
        <Button>Test</Button>
        <div className="text-red-500">This text should be red</div>
    </div>
)
