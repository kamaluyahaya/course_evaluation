import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Welcome from './Welcomes';
import Dashboard from './user/dashboard';
import ManageStudent from './admin/manageStudent';
import Evaluation from './user/evaluation';
import ParentComponent from './component/propsoPractice';
import ChildComponent from './component/childClass';
import ExampleComponent from './user/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './user/profile';
import AdminLogin from './admin/adminLogin';
import AdminDashboard from './admin/dashboard';
import AddCourse from './admin/addCourse';
import logo from './kasulogo.png'
import ManageCourse from './admin/manageCourse'
import Courses from './user/course';
import AdminEvaluation from './admin/evaluation';
import AddEvaluation from './admin/addEvaluation';
import Feedback from './admin/feedback';
import MyEvaluation from './user/myEvaluation';
import ViewEvaluation from './admin/viewEvaluation';
import EvRecord from './admin/evRecord';
import ViewFeedback from './admin/viewFeedback';

<img src={logo} alt="Logo" />
function App() {
  return (
   <BrowserRouter>
     <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/Practical' element={<ExampleComponent/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Evaluation' element={<Evaluation/>}></Route>
        <Route path='/ParentComponent' element={<ParentComponent/>}></Route>
        <Route path='/ChildComponent' element={<ChildComponent/>}></Route>
        <Route path='/admin/login' element={<AdminLogin/>}></Route>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
        <Route path='/Admin/manage' element={<ManageStudent/>}></Route>
        <Route path='/Admin/manageCourse' element={<ManageCourse/>}></Route>
        <Route path='/admin/addCourse' element={<AddCourse/>}></Route>
        <Route path='/admin/AddEvaluation' element={<AddEvaluation/>}></Route>
        <Route path='/admin/Evaluations' element={<AdminEvaluation/>}></Route>
        <Route path='/admin/Feedback' element={<Feedback/>}></Route>
        <Route path='/admin/viewEvaluation' element={<ViewEvaluation/>}></Route>
        <Route path='/admin/evRecord' element={<EvRecord/>}></Route>
        <Route path='/admin/viewFeedback' element={<ViewFeedback/>}></Route>
        <Route path='/course' element={<Courses/>}></Route>
        <Route path='/admin/' element={<AdminLogin/>}></Route>
        <Route path='/myEvalution/' element={<MyEvaluation/>}></Route>
     </Routes>   
   </BrowserRouter>
  );
}

export default App;
