import Image from 'next/image';
import Link from 'next/link';

const Logo = (props: { sticky: boolean }) => {
    const { sticky } = props;
    return (
        <Link href="/">
            {/* WhiteLogo.svg */}
            <Image
                src={sticky ? "/images/logo/dot4.svg" : "/images/logo/dot.svg"}
                alt="logo"
                width={170}
                height={32}
                // style={{ width: 'auto', height: 'auto' }}
                quality={100}
                priority={true}
                className='hidden xsm:block'
            />
            <Image src={sticky ? "/images/logo/dot3.svg" : "/images/logo/dot3.svg"} alt='logo' width={40} height={40} className='block xsm:hidden' />
        </Link>
    );
};

export default Logo;
