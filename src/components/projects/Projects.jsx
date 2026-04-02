'use client'
import SectionTitle from '../shared/sectionTitle/SectionTitle'
import useProjects from '@/hooks/useProjects';
import ProjectDisplay from './ProjectDisplay';
import Link from 'next/link';
function Projects() {
    const projects = useProjects()
    const limitedProjects = projects.slice(0, 8);


    return (
        <div>
            <SectionTitle title="Complated Projects" subTitle="সম্পন্ন করা প্রজেক্ট" width='lg:w-2/4 w-full'></SectionTitle>

            <ProjectDisplay projects={limitedProjects}></ProjectDisplay>
            <button className='block mx-auto bg-[#0E6B66] text-white py-3 mt-4 px-6 rounded-sm icon-shadow'>
                <Link href='/projects'>সবগুলো দেখুন</Link>
            </button>

        </div>
    )
}

export default Projects