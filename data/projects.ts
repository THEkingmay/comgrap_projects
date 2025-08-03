interface project_struct {
    title:string,
    description:string | undefined,
    link:string | undefined , 
}

const projects :project_struct[]= [
    {
        title:'GPU transform' , 
        description:'เรียนรู้เรื่องการtransform หัวข้อแรกๆ ',
        link:'https://thekingmay.github.io/GPU_transform/'
    } , 
    {
        title:'GPU Mesh' , 
        description:'เรียนรู้เรื่องของ GPU Mesh สัปดาห์ที่ 5 ',
        link:'https://thekingmay.github.io/week5gpuMesh/'
    } ,
    {
        title:'Modeling & Obj Loader ' , 
        description:'เรียนรุ้เรื่องการโหลดไฟล์ obj และการปั้นโมเดล',
        link:'https://thekingmay.github.io/comgraphic_objLoader/'
    }
]
export default  projects