import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between mx-auto w-9/12 m-4 border-b-2 border-gray-300 pb-4 items-center'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;