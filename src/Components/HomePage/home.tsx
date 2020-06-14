import React from 'react';
import { Route, Switch } from 'react-router-dom'

const Home = (props: object) => {
    return (
        <GlobalState>
            <Switch>
                <Route path='/' component={Product} exact={true} />
                <Route path='/cart' component={Cart} exact={true} />
            </Switch>
        </GlobalState>
    )

}



export default Home;