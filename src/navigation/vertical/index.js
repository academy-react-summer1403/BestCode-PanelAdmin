import { Mail, Home, Airplay, Circle, UserCheck, Tool } from "react-feather";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Home size={20} />,
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
];
