import { createRouter,createWebHashHistory } from "vue-router";
import AddStudent from "../components/Student/AddStudent.vue"
import EditStudent from "../components/Student/EditStudent.vue";
import ListStudent from "../components/Student/ListStudent.vue";
import NotFound from "../components/Student/NotFound.vue";

const routes = [
    {
        path:'/',
        name:"liststudent",
        component:ListStudent
         
    },
    {
        path:'/addstudent',
        name:"addstudent",
        component:AddStudent
    },
    {
        path:'/editstudent/:id',
        name:"editstudent",
        component:EditStudent
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'not-found',
        component: NotFound
      }
    ]
const router = createRouter({
    history:createWebHashHistory(),
    routes : routes
})
export default router