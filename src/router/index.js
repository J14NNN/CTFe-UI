//index.js
import { createRouter,createWebHistory,createWebHashHistory } from "vue-router"



const routes = [
    {
        path:"/",
        name:'index',
        component: () => import("../views/Index.vue"),
        children: [
            {
                path: '/',
                redirect: '/index'
            },
            {
                path:"/index",
                component: () => import("../views/Main.vue")
            },

            {
                path:"/main",
                component: () => import("../views/Main.vue")
            },
            {
                path: "/challenges",
                component:() => import("../views/Challenges.vue")
            },
            {
                path: "/notifications",
                component:() => import("../views/Notifications.vue")
            },
            {
                path: "/scoreboard",
                component:() => import("../views/Scoreboard.vue")
            },
            {
                path: "/profile/:uid",
                component:() => import("../views/Profile.vue")
            },
            {
                path: "/login",
                name:"login",
                component:() => import("../views/Login.vue")
            },
            {
                path: "/register",
                component:() => import("../views/Register.vue")
            },
            {
                path:"/challenge/:cid",
                name:"challenge",
                component:() => import("../views/Challenge.vue"),
                // beforeEnter: (to, from, next) => {  
                //     store.dispatch('getChallengeById', to.params.id).then(() => {
                //       next()  
                //     })  
                //   }  
            },
            {
                path:"/test",
                component:() => import("../views/test1.vue")
            },
            {
                path: '/admin',
                name: 'admin',
        
                component: () => import('../views/admin/Index.vue'),
                children:[
                    {
                        path: '/admin',
                        redirect: '/admin/challengeManager'
                    },
                    {
                        path:'/admin/challengeManager',
                        name:'challengeManager',
                        component: () =>import('../views/admin/ChallengeManager.vue')
                    },
                    {
                        path:'/admin/addChallenge',
                        name:'addChallenge',
                        component: () =>import('../views/admin/AddChallenge.vue')
                    },
                    {
                        path:'/admin/editChallenge/:cid',
                        name:'editChallenge',
                        component: () =>import('../views/admin/EditChallenge.vue')
                    },
                    {
                        path:'/admin/userManager',
                        name:'userManager',
                        component: () =>import('../views/admin/UserManager.vue')
                    },
                    {
                        path:'/admin/notificationManager',
                        name:'notificationManager',
                        component: () =>import('../views/admin/NotificationManager.vue')
                    },
                    {
                        path:'/admin/containerManager',
                        name:'contaionerManager',
                        component: () =>import('../views/admin/ContainerManager.vue')
                    },
                    {
                        path:'/admin/platformManager',
                        name:'platformManager',
                        component: () =>import('../views/admin/PlatformManager.vue')
                    },
                    
                ]
        
            }
        ]
    },
    // {
    //     path: '/admin',
    //     name: 'admin',

    //     component: () => import('../views/admin/Index.vue'),


    // }
]


const router = createRouter({
    history:createWebHashHistory(),
    routes
})


export default router;