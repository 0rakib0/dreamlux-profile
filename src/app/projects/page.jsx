"use client"
import React from 'react'
import Image from 'next/image'
import useProjects from '@/hooks/useProjects'
import ProjectDisplay from '@/components/projects/ProjectDisplay'
function Projects() {

  const projects = useProjects()

  return (
    <div>
      <div className="px-2 lg:px-6 py-3">
        <div className="relative w-full h-[120px] sm:h-[160px] lg:h-[220px] rounded-xl overflow-hidden">

          {/* Image */}
          <Image
            src="/small_benner-2.jpg"
            alt="project Cover"
            fill
            className="object-cover"
            priority
          />

          {/* Content */}
          <div className="absolute tex-[#0f6b66] inset-0 flex flex-col justify-center items-center text-center px-4">

            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">
              Our Projects
            </h2>

            <p className="text-[10px] sm:text-sm lg:text-base mt-1">
              আমাদের ডেলিভারি করা প্রোডাক্টের দিয়ে সাজানো রুম
            </p>

          </div>

        </div>
      </div>

      <div className='text-[#0E6B66] text-xl text-center font-bold mt-8 -mb-5'>
        <h4>আমাদের কমপ্লিট করা কিছু প্রোজেক্ট</h4>
      </div>

      <ProjectDisplay projects={projects}></ProjectDisplay>

    </div>
  )
}

export default Projects