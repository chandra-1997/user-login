import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';


import AdminLoginComponent from './AdminLoginComponent';
import AdminDashBoardComponent from './AdminDashBoardComponent';

export default function IndexComponent() {
    return (
        <div className='container-fluid'>
            <Router>
                <header className='bg-danger text-center text-white'>
                    <h1>mail</h1>
                </header>
                <section className='row'>
                    <div className='col-3'>
                        <ul>
                            <li>
                                <Link to="adminLogin">AdminLogin</Link>
                            </li>
                            <li>
                                <Link to="admindashboard">Admin DashBoard</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-9'>
                        <Switch>
                            <Route path="/adminlogin" component={AdminLoginComponent}></Route>
                            <Route path="/admindashboard" component={AdminDashBoardComponent}></Route>
                        </Switch>
                    </div>
                </section>
            </Router>
        </div>
    )
}