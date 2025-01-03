import style from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../../asset/images/logo.svg'
import img2 from '../../../../asset/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(style)
console.log(img2.logo, img2.default);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images} alt='logo tiktok' />
                    {/* <img src={img2.logo} alt='tiktok cách 2'/> */}
                </div>
                <div className={cx('search')}>
                    <input placeholder='Search account and video' spellCheck='false' />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}> 
                    
                </div>
            </div>
        </header>
    )
}

export default Header