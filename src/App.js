import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import {Routes, Route} from 'react-router-dom'
import TeacherDashboard from './Structure/Dashboard/TeacherDashboard/TeacherDashboard';
import StudentDashboard from './Structure/Dashboard/StudentDashboard/StudentDashboard';
import Attendance from './Structure/Dashboard/TeacherDashboard/TeacherDasboardFeatures/Attendance/Attendance';


import SchoolDashboard from './Structure/Dashboard/SchoolDashboard/SchoolDashboard';
import SuperAdminDashboard from './Structure/Dashboard/SuperAdminDashboard/SuperAdminDashboard';
import StudentAttendanceView from './Structure/Dashboard/StudentDashboard/StudentDashboardFeatures/StudentAttendanceView';
import AddNewSchool from './Structure/Dashboard/SuperAdminDashboard/SuperAdminDashboardFeatures/AddNewSchool/AddNewSchool';
import CreateNewOrganization from './Structure/Dashboard/SuperAdminDashboard/SuperAdminDashboardFeatures/CreateNewOrganization/CreateNewOrganization';
import CreateNewClass from './Structure/Dashboard/SuperAdminDashboard/SuperAdminDashboardFeatures/CreateNewClass/CreateNewClass';
import CreateNewSection from './Structure/Dashboard/SuperAdminDashboard/SuperAdminDashboardFeatures/CreateNewSection/CreateNewSection';
import CreateNewSubject from './Structure/Dashboard/SuperAdminDashboard/SuperAdminDashboardFeatures/CreateNewSubject/CreateNewSubject';
import CreateNewPeriod from './Structure/Dashboard/SuperAdminDashboard/SuperAdminDashboardFeatures/CreateNewPeriod/CreateNewPeriod';
import Login from './Structure/Pages/Login/Login';

import Routine from './Structure/Dashboard/TeacherDashboard/TeacherDasboardFeatures/Routine/Routine';

import StudentRoutine from './Structure/Dashboard/StudentDashboard/StudentDashboardFeatures/StudentRoutine';
import Home from './Structure/components/Home/Home';
import HomeWork from './Structure/Dashboard/TeacherDashboard/TeacherDasboardFeatures/HomeWork/HomeWork';
import StudentHomeWork from './Structure/Dashboard/StudentDashboard/StudentDashboardFeatures/StudentHomeWork/StudentHomeWork';
import StudentHomeWorkSubmit from './Structure/Dashboard/StudentDashboard/StudentDashboardFeatures/StudentHomeWork/StudentHomeWorkSubmit';
import ViewerDashboard from './Structure/Dashboard/ViewerDashboard/ViewerDashboard';
import ViewerShowAttendanceView from './Structure/Dashboard/ViewerDashboard/ViewerDashboardFeatures/ViewerShowAttendance/ViewerShowAttendanceView';
import StudentAbsence from './Structure/Dashboard/ViewerDashboard/ViewerDashboardFeatures/ViewerShowAttendance/StudentAbsence';
import AcademicCalender from './Structure/Dashboard/AcademicCalender/AcademicCalender';
import HomeWorkShow from './Structure/Dashboard/TeacherDashboard/TeacherDasboardFeatures/HomeWork/HomeWorkShow';
import Payment from './Structure/Dashboard/SchoolDashboard/SchoolDashboardFeatures/Payment/Payment';
import AccountsDashboard from './Structure/Dashboard/AccountsDashboard/AccountsDashboard';
import CreateInvoice from './Structure/Dashboard/AccountsDashboard/AccountsDashboardFeatures/CreateInvoice/CreateInvoice';
import StudentPayment from './Structure/Dashboard/StudentDashboard/StudentDashboardFeatures/StudentPayment/StudentPayment';
import DueInvoice from './Structure/Dashboard/StudentDashboard/StudentDashboardFeatures/StudentPayment/DueInvoice';
import PayOption from './Structure/Dashboard/StudentDashboard/StudentDashboardFeatures/StudentPayment/PayOption';
import PaidInvoice from './Structure/Dashboard/StudentDashboard/StudentDashboardFeatures/StudentPayment/PaidInvoice';
import ClassBasedStudentAbsence from './Structure/Dashboard/ViewerDashboard/ViewerDashboardFeatures/ViewerShowAttendance/ClassBasedStudentAbsence';
import ShowHomeWork from './Structure/Dashboard/ViewerDashboard/ViewerDashboardFeatures/ViewerShowHomework/ShowHomeWork';
import SubmitDetails from './Structure/Dashboard/ViewerDashboard/ViewerDashboardFeatures/ViewerShowHomework/SubmitDetails';
import SchoolAcademicCalender from './Structure/Dashboard/ViewerDashboard/ViewerDashboardFeatures/AcademicCalender/SchoolAcademicCalender';
import ViewerShowStudentRoutine from './Structure/Dashboard/ViewerDashboard/ViewerDashboardFeatures/StudentRoutine/ViewerShowStudentRoutine';
import StudentShowAcademicCalender from './Structure/Dashboard/StudentDashboard/StudentDashboardFeatures/StudentShowAcademicCalender';
import CreateNewExam from './Structure/Dashboard/SchoolDashboard/SchoolDashboardFeatures/CreateNewExam/CreateNewExam';
import StudentResultSheet from './Structure/Dashboard/StudentDashboard/StudentDashboardFeatures/StudentResultSheet/StudentResultSheet';
import MarksEntry from './Structure/Dashboard/TeacherDashboard/TeacherDasboardFeatures/Evaluation/MarksEntry';
import StudentEvaluation from './Structure/Dashboard/StudentDashboard/StudentDashboardFeatures/StudentResultSheet/StudentEvaluation';
import FinalGradeSheet from './Structure/Dashboard/StudentDashboard/StudentDashboardFeatures/StudentResultSheet/FinalGradeSheet';
import ViewEvaluation from './Structure/Dashboard/ViewerDashboard/ViewerDashboardFeatures/ViewEvalutaion/ViewEvaluation';
import TeacherProfile from './Structure/Dashboard/TeacherDashboard/TeacherProfile/TeacherProfile';
import ViewerSchoolViewList from './Structure/Dashboard/ViewerDashboard/ViewerSchoolViewList/ViewerSchoolViewList';

function App() {
  return (
    <div className="App">
     
          <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/home' element={<Home />} />
           <Route path='/login' element={<Login />} />
           <Route path='/super-admin' element={<SuperAdminDashboard />} />
           <Route path='/school-admin' element={<SchoolDashboard />} />
           <Route path='/teacher-admin' element={<TeacherDashboard />} />
           <Route path='/student-admin' element={<StudentDashboard />} />
           <Route path='/viewer-admin' element={<ViewerDashboard />} />
           <Route path='/accounts' element={<AccountsDashboard />} />
           <Route path='/viewer-school' element={<ViewerSchoolViewList />} />
           <Route path='/viewershowattendanceview' element={<ViewerShowAttendanceView />} />
           <Route path='/classbasedstudentabsence' element={<ClassBasedStudentAbsence />} />
           <Route path='/studentabsence' element={<StudentAbsence />} />
           <Route path='/showhomework' element={<ShowHomeWork />} />
           <Route path='/submitdetails' element={<SubmitDetails />} />
           <Route path='/add-school' element={<AddNewSchool />} />
           <Route path='/add-organization' element={<CreateNewOrganization />} />
           <Route path='/create-class' element={<CreateNewClass />} />
           <Route path='/create-section' element={<CreateNewSection />} />
           <Route path='/create-subject' element={<CreateNewSubject />} />
           <Route path='/create-period' element={<CreateNewPeriod />} />
           <Route path='/academic-calender' element={<AcademicCalender />} />
           <Route path='/sudentshowacademiccalender' element={<StudentShowAcademicCalender />} />
           <Route path='/routine' element={<Routine />} />
           <Route path='/studentroutine' element={<StudentRoutine />} />
           <Route path='/schoolacademiccalender' element={<SchoolAcademicCalender />} />
           <Route path='/viewershowstudentroutine' element={<ViewerShowStudentRoutine />} />
           <Route path='/attendance' element={<Attendance />} />
           <Route path='/studentviewattendance' element={<StudentAttendanceView />} />
           <Route path='/homework' element={<HomeWork />} />
           <Route path='/homeworkshow' element={<HomeWorkShow />} />
           <Route path='/studenthomework' element={<StudentHomeWork />} />
           <Route path='/studenthomeworksubmit' element={<StudentHomeWorkSubmit />} />
           <Route path='/paymentsector' element={<Payment />} />
           <Route path='/createinvoice' element={<CreateInvoice />} />
           <Route path='/studentinvoice' element={<StudentPayment />} />
           <Route path='/dueinvoice' element={<DueInvoice />} />
           <Route path='/paidinvoice' element={<PaidInvoice />} />
           <Route path='/payoption' element={<PayOption />} />
           <Route path='/createnewexam' element={<CreateNewExam />} />
           <Route path='/studentevaluation' element={<StudentEvaluation />} />
           <Route path='/marksentry' element={<MarksEntry />} />
           <Route path='/finalgrade' element={<FinalGradeSheet />} />
           <Route path='/studentresultsheet' element={<StudentResultSheet />} />
           <Route path='/viewevaluation' element={<ViewEvaluation />} />
           <Route path='/teacherprofile' element={<TeacherProfile />} />

           

           
           </Routes>
     
         
         
    </div>
  );
}

export default App;
