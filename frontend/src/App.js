import {BrowserRouter,Routes,Route,} from "react-router-dom";
import LoginPage from "./Pages/AdminLoginPage";
import { AuthProvider } from "./context/AuthContext";
import AdminHomePage from "./Pages/AdminHomePage";
import AddUserPage from "./Pages/AddUserPage";
import EditUserPage from "./Pages/EditUserPage";
import UserHomePage from "./Pages/UserHomePage";
import AddTaskPage from "./Pages/AddTaskPage";
import EditTaskPage from "./Pages/TaskEditPage";
import DailyTaskPage from "./Pages/DailyTaskPage";
import WeeklyTaskPage from "./Pages/WeeklyTaskPage";
import DailyChartPage from "./Pages/DailyChartPage";
import MonthlyTaskPage from "./Pages/MonthlyTaskPage";
import MonthlyChartPage from "./Pages/MonthlyChartPage";
import UserLoginCase from "./utils/UserLoginCase";
import AdminLoginCase from "./utils/AdminLoginCase";
import PrivetRouterAdmin from "./utils/PrivetRouterAdmin";
import PrivetRouter from "./utils/PrivetRouter";

function App() {
  return (
    <div >
      <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route element={<AdminLoginCase />} >  
            <Route element={<UserLoginCase />} >
              {/* both admin and user have same login */}
              <Route path='/login' element={<LoginPage />} />
            </Route>
            </Route>   

            <Route element={<PrivetRouterAdmin />} >                  
                <Route path='/adminHome' element={<AdminHomePage />} />
                <Route path='/adminHome/addUser' element={<AddUserPage />} />
                <Route path='/adminHome/editUser/:id' element={<EditUserPage />} />
                <Route path='/adminHome/dailyTask' element={<DailyTaskPage />} />
                <Route path='/adminHome/weeklyTask' element={<WeeklyTaskPage />} />
                <Route path='/adminHome/dailyChart' element={<DailyChartPage />} />
                <Route path='adminHome/monthlyTask' element={<MonthlyTaskPage />} />
                <Route path='adminHome/monthlyChart' element={<MonthlyChartPage />} />             
            </Route>

            <Route element={<PrivetRouter />}>             
                <Route path='/' element={<UserHomePage />}/>
                <Route path='/addTask' element={<AddTaskPage />} />
                <Route path='/editTask/:id' element={<EditTaskPage />} />
              
            </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    values
    </div>
  );
}

export default App;
