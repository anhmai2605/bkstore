import classNames from 'classnames/bind';
import Header from '../components/Header';
import styles from './ProductLayout.module.scss';
import Menubar from './Menubar';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function ProductLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Menubar />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('wrapper')}>{children}</div>
            </div>
        </div>
    );
}

export default ProductLayout;
