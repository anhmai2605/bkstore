import classNames from 'classnames/bind';
import styles from './Menubar.module.scss';

const cx = classNames.bind(styles);
function Menubar() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Menubar;