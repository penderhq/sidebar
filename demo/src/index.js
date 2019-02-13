import React, {Component} from 'react'
import {render} from 'react-dom'
import {injectGlobal, css} from 'emotion'
import icons from './icons'

injectGlobal`
    *, :before, :after {
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
`

import {Container, Sidebar, MenuBrand, MenuContainer, Menu, MenuSeparator, MenuItem} from '../../src'

class Demo extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Sidebar>
                        <MenuBrand
                            imageUrl={'https://user-images.githubusercontent.com/44947294/52167778-c049a780-2720-11e9-90dc-8255ce5c46fc.png'}
                            title={'Cosmos Base'}
                            description={'Version 1.0.0 Laika'}
                        />
                        <MenuContainer>
                            <Menu>
                                <MenuItem
                                    icon={icons.payments}
                                    title={'Payments'}
                                />
                                <MenuItem
                                    icon={icons.orders}
                                    title={'Orders'}
                                    active={true}
                                />
                                <MenuItem
                                    icon={icons.statistics}
                                    title={'Statistics'}
                                />
                                <MenuItem
                                    icon={icons.administration}
                                    title={'Administration'}
                                />
                                <MenuSeparator/>
                                <MenuItem
                                    icon={icons.developer}
                                    title={'Developers'}
                                />
                                <MenuItem
                                    icon={icons.notification}
                                    title={'Notifications'}
                                />
                                <MenuItem
                                    icon={icons.account}
                                    title={'Account'}
                                />
                                <MenuItem
                                    icon={icons.settings}
                                    title={'Settings'}
                                />
                                <MenuItem
                                    icon={icons.payments}
                                    title={'Very long title that gets truncated'}
                                />
                                <MenuSeparator large={true}/>
                                <MenuItem
                                    icon={icons.help}
                                    small={true}
                                    title={'Help'}
                                />
                                <MenuItem
                                    icon={icons.chat}
                                    small={true}
                                    title={'Chat'}
                                />
                                <MenuItem
                                    icon={icons.signout}
                                    small={true}
                                    title={'Sign out'}
                                />
                            </Menu>
                        </MenuContainer>
                    </Sidebar>
                    <div
                        className={css`
                        padding: 0 70px;
                        margin: 70px auto;
                    `}
                    >
                        <h1>Sidebar Demo</h1>
                    </div>
                </Container>
            </div>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
