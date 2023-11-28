import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";

const router  = Router();

const moduleRoutes = [
    {
        path: '/students',
        route: StudentRoutes,
    },
    {
        path: '/users',
        route: UserRoutes,
    },
];

moduleRoutes.forEach((route)=>{
    router.use(route.path, route.route);
})

// router.use('/students', StudentRoutes);
// router.use('/users', UserRoutes);

export default router;