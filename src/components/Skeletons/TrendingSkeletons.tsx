import { Card, Skeleton } from "@nextui-org/react";

export default function TrendingSkeletons() {
    return (
			<div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6'>
				{Array.from({ length: 6 }).map((_, index) => (
					<Card
						key={index}
						className='bg-[#0B0B0C] p-4 rounded-md shadow-md flex flex-row'
					>
						<div className='w-48 h-full'>
							<Skeleton className='w-full h-[280px] rounded-md' />
						</div>
						<div className='flex-1 ml-4'>
							<Skeleton className='h-6 w-[250px] rounded-lg mt-4 ' />
							<Skeleton className='h-6 w-[200px] rounded-lg mt-4' />
							<Skeleton className='h-[70px] w-full rounded-lg mt-4' />
							<div className='mt-4 flex flex-wrap gap-2'>
								<Skeleton className='w-20 h-6 px-2 py-1 rounded-full' />
								<Skeleton className='w-24 h-6 px-2 py-1 rounded-full' />
								<Skeleton className='w-16 h-6 px-2 py-1 rounded-full' />
							</div>
						</div>
					</Card>
				))}
			</div>
		)
}