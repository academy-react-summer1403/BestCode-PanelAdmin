import { Mail, Home, Airplay, Circle, UserCheck, Tool, Monitor, Edit } from "react-feather";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Monitor size={20} />,
    navLink: "/home",
  },
  {
    id: "CourseManagemet",
    title: "مدیریت دوره ها",
    icon: <Tool size={20} />,
    // navLink: "/Course",
    children: [
      {
        id: "courseList",
        title: "لیست دوره ها",
        icon: <Circle size={12} />,
        navLink: "/courseManagement/courseList",
      },
      {
        id: "/AddnewCourse",
        title: " افزودن دوره جدید ",
        icon: <Circle size={12} />,
        navLink: "/courseManagement/AddnewCourse",
      },

    ],
  },
  {
    id: "userManagement",
    title: "مدیریت کاربران",
    icon: <UserCheck size={20} />,
    navLink: "/userManagement",
    children: [
      {
        id: "userList",
        title: "لیست کاربران",
        icon: <Circle size={12} />,
        navLink: "/userManagement/userList",
      },

    ],
  },
  {
    id: "newsManagement",
    title: "مدیریت اخبار و مقالات",
    icon: <Airplay size={20} />,
    navLink: "/newsManagement",
    
  },
  {
    id: "CommentsManagement",
    title: "مدیریت کامنت ها",
    icon: <Mail size={20} />,
    navLink: "/commentsManagement",
    
  },
  {
    id: "Building",
    title: " ساختمان ها ",
    icon: <Home size={20} />,
    navLink: "/building",
    
  },
  {
    id: "ColorPalet",
    title: " تم سایت ",
    icon: <Edit  size={20} />,
    navLink: "/colorPalet",
  },
];
