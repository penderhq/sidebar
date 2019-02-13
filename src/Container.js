import React from 'react'
import {injectGlobal, cx, css} from 'emotion'

injectGlobal`
    @media (min-width: 720px) {
    
        .custom-scrollbar::-webkit-scrollbar {
            background: #000;
            height: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #737373;
            border: 1px solid #000;
            border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
            -webkit-box-shadow: none;
            background: transparent;
            box-shadow: none;
        }
    }
`

export default class Container extends React.Component {

    render() {

        return (
            <div
                className={cx(
                    css`
                        padding-left: 250px;
                    `,
                    'Sidebar__Container'
                )}
            >
                {this.props.children}
            </div>
        )
    }
}