import React from 'react'
import {cx, css} from 'emotion'

export default class Sidebar extends React.Component {

    render() {

        return (
            <div
                className={cx(
                    css`
                        width: 250px;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        flex-direction: column;
                        background: #181818;
                        color: #fff;
                        display: flex;
                    `,
                    'Sidebar'
                )}
            >
                {this.props.children}

            </div>
        )
    }
}