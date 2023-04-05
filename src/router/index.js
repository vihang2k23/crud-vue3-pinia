import { createRouter,createWebHashHistory } from "vue-router";
import AddTeam from "../components/Student/AddTeam.vue"
import EditTeam from "../components/Student/EditTeam.vue";
import ListTeams from "../components/Student/ListTeams.vue";
import NotFound from "../components/Student/NotFound.vue";

const routes = [
    {
        path:'/',
        name:"listteams",
        component:ListTeams
         
    },
    {
        path:'/addteam',
        name:"addteam",
        component:AddTeam
    },
    {
        path:'/editteams/:id',
        name:"editteams",
        component:EditTeam
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