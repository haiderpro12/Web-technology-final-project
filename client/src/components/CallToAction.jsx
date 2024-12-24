import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Grand Theft Auto VI?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout Rockstar's Website for more Info.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.rockstargames.com/VI" target='_blank' rel='noopener noreferrer'>
                    GTA VI
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/12/gta6-2.jpg" />
        </div>
    </div>
  )
}