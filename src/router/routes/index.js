// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";
import { User } from "react-feather";
import ColorPalet from "../../pages/ColorPalet";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/home";

const Home = lazy(() => import("../../pages/Home"));
const CourseList = lazy(() => import("../../pages/CourseList"));
const CourseDetail = lazy(() => import("../../pages/CourseDetail"));
const UserDetail = lazy(() => import("../../pages/UserDetail"));
const NewsAdd = lazy(() => import('../../pages/News/add'))

const UserList = lazy(() => import("../../pages/userList"));
const NewsManagement = lazy(() => import("../../pages/newsManagement"));
const CommentsManagement = lazy(() => import("../../pages/commentsManagement"));
const AddnewCourse = lazy(() => import("../../pages/AddnewCourse"));
const NewsView = lazy(() => import('../../pages/News/view'))
const Building = lazy(() => import('../../pages/Building'))

// const DetailCommentNews = lazy(() => import("../../../src/@core/components/user1/view/TableHover"));

const DetailComment = lazy(() => import("../../../src/@core/components/user1/view/TableHover"));


const Login = lazy(() => import("../../pages/Login"));
const Register = lazy(() => import("../../pages/Register"));
const ForgotPassword = lazy(() => import("../../pages/ForgotPassword"));
const Error = lazy(() => import("../../pages/Error"));
const NewsEdit = lazy(() => import('../../pages/News/edit'))


// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/courseManagement/courseList",
    element: <CourseList />,
  },
  {
    path: "/courseManagement/AddnewCourse",
    element: <AddnewCourse />,
  },
  {
    path: "/courseManagement/CourseDetail/:id",
    element: <CourseDetail />,
  },
  {
    path: "/userManagement/userList",
    element: <UserList />,
  },
  {
    element: <NewsEdit />,
    path: '/News/edit/:id'
  },
  {
    element: <NewsAdd />,
    path: '/News/add'
  },
  {
    path: "/userManagement/userDetail/:id",
    element: <UserDetail />,
  },
  {
    path: "/newsManagement",
    element: <NewsManagement />,
  },
  
  {
    path: "/comments/view/:id/:courseId",
    element: <DetailComment />,
  },
  {
    path: "/commentsManagement",
    element: <CommentsManagement />,
  },
  {
    path: "/building",
    element: <Building />,
  },
  {
    path: "/colorPalet",
    element: <ColorPalet />,
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    element: <NewsView />,
    path: '/News/view/:id'
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "*",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
