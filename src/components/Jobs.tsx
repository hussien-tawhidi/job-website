import JobRow from "./shared/JobRow";

const Jobs = () => {
  return (
    <div className='md:p-8 sm:p-5 p-3 md:w-[75vw] mx-auto'>
      <h2 className="font-semibold sm:text-xl text-sm">Recent Jobs</h2>
      <div className='flex flex-col gap-4'>
        <JobRow/>
        <JobRow/>
        <JobRow/>
        <JobRow/>
        <JobRow/>
      </div>
    </div>
  );
};

export default Jobs;
