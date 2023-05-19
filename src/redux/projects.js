import { createSlice } from '@reduxjs/toolkit'

const projects = createSlice({
    name: 'projects',
    initialState: {
        loading: false,
        projects: [
            {
                made: 'test',
                like: '2',
                name: 'test',
                image: '/images/comingsoon1.png',
                link: '/test',
                comment:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, placeat, quas eaque repudiandae velit non veniam blanditiis qui omnis repellat laudantium nobis recusandae, distinctio provident a dolorum cumque maiores dolores iusto saepe. Eaque atque praesentium in quae nulla itaque ea aperiam ratione, cumque aliquam. Labore in recusandae ratione repudiandae debitis eius ipsum deserunt laboriosam eveniet veritatis officia ad, maxime quia. Quos unde et dolor eaque impedit, itaque, accusantium recusandae tempore sapiente iusto quibusdam quis aperiam, repudiandae modi fugiat aliquam iste alias eum maiores sint. Numquam quas doloremque error ipsam, hic eum cumque, nesciunt, quia incidunt dolor culpa sapiente delectus eaque!',
            },
        ],
        error: false,
        err_msg: '',
    },
    reducers: {
        addLike: (state, { payload }) => {
            state.loading = false
            state.projects.forEach(project => {
                if (project._id === payload) {
                    console.log(project.like)
                    return ++project.like
                }
            })
        },
    },
})

export const { addLike } = projects.actions

export default projects.reducer
