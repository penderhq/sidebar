import React from 'react'
import {css} from 'emotion'

export default class MenuContainer extends React.Component {

    render() {

        return (
            <div
                className={css`
                            -ms-flex-align: center;
                            -webkit-box-align: center;
                            align-items: center;
                            background-color: #0d0d0d;
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            position: relative;
                        `}
            >
                <div
                    className={css`
                                display: flex;
                                align-items: center;
                                padding: 20px;
                                transition: background .3s ease-in-out;
                                overflow: hidden;
                            `}
                >
                    <div
                        className={css`
                                    -webkit-box-flex: 0;
                                    flex: 0 0 auto;
                                    height: 48px;
                                    margin-right: 12px;
                                    width: 48px;
                                    background-color: #fff;
                                    border-radius: 50%;
                                    overflow: hidden;
                                    border-radius: 50%;
                                    position: relative;
                                `}
                    >
                        <div
                            className={css`
                                        position: absolute;
                                        top: 10px;
                                        bottom: 10px;
                                        left: 10px;
                                        right: 10px;
                                        background-image: url(${this.props.imageUrl});
                                        background-size: cover;
                                        background-repeat: no-repeat;
                                    `}
                        >

                        </div>
                    </div>
                    <div
                        className={css`
                                    -ms-flex: 1 1;
                                    -webkit-box-flex: 1;
                                    flex: 1 1;
                                    overflow: hidden;
                                    white-space: nowrap;
                                `}
                    >
                        <div
                            className={css`
                                        color: #fff;
                                        font-size: 14px;
                                        font-weight: 700;
                                        line-height: 19px;
                                        margin-bottom: 0;
                                        margin-top: 1px;
                                        overflow: hidden;
                                        text-align: left;
                                        text-overflow: ellipsis;
                                        max-width: 100%;
                                    `}
                        >
                            {this.props.title}
                        </div>
                        <div
                            className={css`
                                        color: #b3b3b3;
                                        font-size: 14px;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        max-width: 100%;
                                    `}
                        >
                            {this.props.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}