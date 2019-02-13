import React from 'react'
import {cx, css} from 'emotion'

export default class MenuItem extends React.Component {

    render() {

        const {href, icon, title, active, small} = this.props

        return (
            <li
                className={css`
                    list-style: none;
                `}
            >
                <a
                    href={href}
                    title={title}
                    className={cx(
                        css`
                        display: flex;
                        align-items: center;
                        padding: 14px 20px;
                        background-color: transparent;
                        color: hsla(0,0%,100%,.8);
                        display: flex;
                        text-decoration: none;
                        transition: all .1s ease-out;
                        cursor: pointer;
                        &:hover {
                            background-color: #262626;
                            color: #fff;
                        }
                    `,
                        active ? css`
                            background-color: #07f;
                            color: #fff;
                            &:hover {
                                background-color: #005fcc;
                            }
                        ` : null,
                        small ? css`
                            padding-top: 8px;
                            padding-bottom: 8px;
                            color: hsla(0,0%,100%,.7);
                            font-size: 14px;
                        ` : null
                    )}
                >
                    {icon({
                        width: 20,
                        className: css`
                            display: flex;
                            margin-right: 12px;
                            opacity: .6;
                            transition: opacity .1s ease-out;
                            flex-shrink: 0;
                        `
                    })}
                    <div
                        className={css`
                        flex-grow: 1;
                        overflow: hidden;
                        `}
                    >
                        <div
                            className={css`
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                max-width: 100%;
                                overflow: hidden;
                            `}
                        >
                            {title}
                        </div>
                    </div>
                </a>
            </li>
        )
    }
}