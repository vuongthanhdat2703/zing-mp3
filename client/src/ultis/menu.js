import icons from "./icon"
const { MdOutlineLibraryMusic, TbChartArcs, PiChartLineBold } = icons
export const sidebarMenu = [

    {
        path: '',
        text: 'Khám phá',
        icons: <TbChartArcs size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <PiChartLineBold size={24} />
    },
    {
        path: 'mymusic',
        text: 'Thư viện',
        icons: <MdOutlineLibraryMusic size={24} />
    },

]