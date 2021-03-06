import Main from '@view/Main'
import Login from '@view/Login'
import Register from '@view/Register'
import Error from '@view/Error'
import FindPassword from '@view/FindPassword'
import Index from '@view/Index'
import Topic from '@view/Topic'
import Board from '@view/Board'
import EditTopic from '@view/EditTopic'
import UserCenter from '@view/UserCenter'
import UserPosts from '@view/UserCenter/Post'
import UserReplys from '@view/UserCenter/Reply'
import UserInfo from '@view/UserCenter/Info'
import EditInfo from '@view/UserCenter/EditInfo'
import EditEmail from '@view/UserCenter/EditEmail'
import EditPwd from '@view/UserCenter/EditPwd'
import InitEmail from '@view/UserCenter/InitEmail'
import Test from '@view/Test'

const routes = [
    {
        path: '/test',
        component: Test,
    },
    {
        path: '/login',
        component: Login,
        permissionGroupList: [['noLogin']],
        backUrl: '/',
    },
    {
        path: '/register',
        component: Register,
        permissionGroupList: [['noLogin']],
        backUrl: '/',
    },
    {
        path: '/find-password',
        component: FindPassword,
        permissionGroupList: [['noLogin']],
        backUrl: '/',
    },
    {
        path: '/error',
        component: Error,
    },
    {
        component: Main,
        path: '/',
        routes: [
            {
                path: '/',
                component: Index,
                exact: true,
            },
            {
                component: Board,
                path: '/board/:id',
            },
            {
                component: Topic,
                path: '/topic/:id',
            },
            {
                component: EditTopic,
                path: '/edit-topic/:id?',
            },
            {
                component: UserCenter,
                path: '/user-center/:id',
                routes: [
                    {
                        component: UserPosts,
                        path: '/user-center/:id/post-list',
                    },
                    {
                        component: UserReplys,
                        path: '/user-center/:id/reply-list',
                    },
                    {
                        component: UserInfo,
                        path: '/user-center/:id/info',
                    },
                    {
                        component: EditInfo,
                        path: '/user-center/:id/edit-info',
                    },
                    {
                        component: EditEmail,
                        path: '/user-center/:id/edit-email',
                    },
                    {
                        component: EditPwd,
                        path: '/user-center/:id/edit-pwd',
                    },
                    {
                        component: InitEmail,
                        path: '/user-center/:id/init-email',
                    },
                ],
            },
        ],
    },
]

export default routes
