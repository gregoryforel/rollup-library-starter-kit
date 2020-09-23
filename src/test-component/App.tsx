import { Button } from 'antd'
import * as React from 'react'

import * as styles from './styles.module.less'

export const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className={styles.test}>
                To get started, edit `src/App.js` and save to reload!
            </p>
            <Button type="primary">Antd Button</Button>
        </div>
    )
}
